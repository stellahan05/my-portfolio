'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import type { PointerEvent } from 'react'

// Keep computed SVG values stable across Node and browser math engines.
const precise = (value: number) => Number(value.toFixed(6))
const svgNumber = (value: number) => Number(value.toFixed(3))

// Entirely synthetic topology, unrelated to insurance records or model outputs.
const nodes = Array.from({ length: 24 }, (_, id) => {
  const y = 1 - (id / 23) * 2
  const radius = Math.sqrt(1 - y * y)
  const angle = id * Math.PI * (3 - Math.sqrt(5))
  return { id, x: precise(Math.cos(angle) * radius), y: precise(y), z: precise(Math.sin(angle) * radius) }
})
const edges: [number, number][] = []
for (const node of nodes) {
  const nearest = nodes.filter((other) => other.id !== node.id).sort((a, b) =>
    precise(Math.hypot(node.x - a.x, node.y - a.y, node.z - a.z)) - precise(Math.hypot(node.x - b.x, node.y - b.y, node.z - b.z)) || a.id - b.id
  ).slice(0, 3)
  for (const other of nearest) {
    const pair: [number, number] = [Math.min(node.id, other.id), Math.max(node.id, other.id)]
    if (!edges.some(([a, b]) => a === pair[0] && b === pair[1])) edges.push(pair)
  }
}
const neighbours = (id: number) => edges.flatMap(([a, b]) => a === id ? [b] : b === id ? [a] : [])
const initialWalk = [8, neighbours(8)[0]]
const label = (id: number) => String(id + 1).padStart(2, '0')

export default function GraphExplorer() {
  const descriptionId = useId()
  const [walk, setWalk] = useState<number[]>(initialWalk)
  const [rotation, setRotation] = useState({ yaw: 24, pitch: -12.6 })
  const [dragging, setDragging] = useState(false)
  const drag = useRef<{ pointerId: number; x: number; y: number; width: number; yaw: number; pitch: number; nodeId?: number } | null>(null)
  const didDrag = useRef(false)

  function beginDrag(event: PointerEvent<SVGSVGElement>) {
    if (!event.isPrimary || event.button !== 0) return
    const node = (event.target as Element).closest('.graph-node')
    event.currentTarget.setPointerCapture(event.pointerId)
    drag.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, width: event.currentTarget.getBoundingClientRect().width, ...rotation, nodeId: node ? Number(node.getAttribute('data-node-id')) : undefined }
    didDrag.current = false
  }

  function moveGraph(event: PointerEvent<SVGSVGElement>) {
    const start = drag.current
    if (!start || start.pointerId !== event.pointerId) return
    const dx = event.clientX - start.x
    const dy = event.clientY - start.y
    if (!didDrag.current && Math.hypot(dx, dy) < 5) return
    didDrag.current = true
    setDragging(true)
    setRotation({ yaw: start.yaw + dx / start.width * 180, pitch: Math.max(-75, Math.min(75, start.pitch - dy / start.width * 180)) })
  }

  function endDrag(event: PointerEvent<SVGSVGElement>) {
    if (drag.current?.pointerId !== event.pointerId) return
    if (event.type === 'pointerup' && !didDrag.current && drag.current.nodeId !== undefined) selectNode(drag.current.nodeId)
    drag.current = null
    setDragging(false)
  }
  const [running, setRunning] = useState(false)
  const current = walk[walk.length - 1]
  const connected = neighbours(current)

  function step() {
    setWalk((previous) => {
      const options = neighbours(previous[previous.length - 1])
      return [...previous, options[Math.floor(Math.random() * options.length)]].slice(-9)
    })
  }

  useEffect(() => {
    if (!running) return
    let count = 0
    const timer = window.setInterval(() => {
      if (document.hidden) { setRunning(false); return }
      step()
      count += 1
      if (count >= 6) setRunning(false)
    }, 850)
    return () => window.clearInterval(timer)
  }, [running])

  const projected = useMemo(() => nodes.map((node) => {
    const angle = rotation.yaw * Math.PI / 180
    const tilt = rotation.pitch * Math.PI / 180
    const x = node.x * Math.cos(angle) + node.z * Math.sin(angle)
    const z = -node.x * Math.sin(angle) + node.z * Math.cos(angle)
    const y = node.y * Math.cos(tilt) - z * Math.sin(tilt)
    const depth = node.y * Math.sin(tilt) + z * Math.cos(tilt)
    const scale = 2.8 / (2.8 - depth * .55)
    return { id: node.id, x: svgNumber(360 + x * 245 * scale), y: svgNumber(235 + y * 176 * scale), depth: precise(depth), radius: svgNumber(5.5 + (depth + 1) * 2.5) }
  }), [rotation])

  function selectNode(id: number) {
    setRunning(false)
    setWalk([id])
  }

  return (
    <figure className="project-figure network-figure">
      <div className="graph-explorer">
        <svg className={`graph-scene ${dragging ? 'graph-scene-dragging' : ''}`} tabIndex={0} onPointerDown={beginDrag} onPointerMove={moveGraph} onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={endDrag} onKeyDown={(event) => {
          if (event.target !== event.currentTarget || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return
          event.preventDefault()
          setRotation((value) => ({ yaw: value.yaw + (event.key === 'ArrowRight' ? 8 : event.key === 'ArrowLeft' ? -8 : 0), pitch: Math.max(-75, Math.min(75, value.pitch + (event.key === 'ArrowUp' ? 8 : event.key === 'ArrowDown' ? -8 : 0))) }))
        }} viewBox="0 0 720 470" role="group" aria-label="Interactive synthetic graph" aria-describedby={descriptionId}>
          <desc>A perspective view of 24 synthetic nodes. A highlighted path illustrates a walk along connected edges. Select a node to begin a new walk.</desc>
          {edges.map(([a, b]) => {
            const start = projected[a], end = projected[b]
            const visited = walk.some((id, i) => i > 0 && ((walk[i - 1] === a && id === b) || (walk[i - 1] === b && id === a)))
            const nearby = a === current || b === current
            return <line key={`${a}-${b}`} x1={start.x} y1={start.y} x2={end.x} y2={end.y} className={visited ? 'graph-edge graph-edge-walk' : nearby ? 'graph-edge graph-edge-neighbour' : 'graph-edge'} style={{ opacity: visited ? 1 : svgNumber(.22 + ((start.depth + end.depth + 2) / 4) * .4) }} />
          })}
          {[...projected].sort((a, b) => a.depth - b.depth || a.id - b.id).map((node) => {
            const active = node.id === current
            const visited = walk.includes(node.id)
            const neighbour = connected.includes(node.id)
            return (
              <g key={node.id} data-node-id={node.id} className={`graph-node ${active ? 'graph-node-active' : visited ? 'graph-node-visited' : neighbour ? 'graph-node-neighbour' : ''}`} role="button" tabIndex={0} aria-label={`Start a new walk at node ${label(node.id)}`} aria-pressed={active} onClick={() => { if (!didDrag.current) selectNode(node.id) }} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectNode(node.id) } }}>
                <circle className="graph-node-target" cx={node.x} cy={node.y} r={22} />
                {active && <circle className="graph-current-ring" cx={node.x} cy={node.y} r={svgNumber(node.radius + 9)} />}
                <circle className="graph-node-body" cx={node.x} cy={node.y} r={node.radius} />
                <circle className="graph-node-light" cx={svgNumber(node.x - node.radius * .25)} cy={svgNumber(node.y - node.radius * .3)} r={svgNumber(node.radius * .27)} aria-hidden="true" />
                {(active || neighbour) && <text x={svgNumber(node.x + node.radius + 7)} y={svgNumber(node.y - node.radius - 4)} aria-hidden="true">{label(node.id)}</text>}
              </g>
            )
          })}
        </svg>
        <div className="graph-toolbar">
          <div className="graph-readout" aria-live="polite" aria-atomic="true">
            <span>Node {label(current)} <span className="graph-readout-secondary">· {connected.length} neighbours</span></span>
            <span className="sr-only">Recent path: {walk.map(label).join(' → ')}</span>
          </div>
          <div className="graph-controls">
            <button type="button" onClick={step} disabled={running} aria-label="Take one random-walk step">Step <span aria-hidden="true">→</span></button>
            <button type="button" onClick={() => setRunning(!running)} aria-label={running ? 'Pause the random walk' : 'Run a six-step random walk'} aria-pressed={running}>{running ? 'Pause' : 'Run walk'}</button>
            <button type="button" onClick={() => { setRunning(false); setWalk(initialWalk); setRotation({ yaw: 24, pitch: -12.6 }) }} aria-label="Reset the graph and walk">Reset</button>
          </div>
        </div>
        <p id={descriptionId} className="graph-explanation">Drag to rotate. Select a node to start.<span className="sr-only"> When the graph is focused, keyboard arrow keys also rotate the view.</span></p>
        <noscript><p className="graph-explanation">The highlighted path shows a sample walk between connected nodes. Interactive controls require JavaScript.</p></noscript>
      </div>
      <figcaption>Illustrative network · synthetic data. Each step chooses a connected neighbour at random.</figcaption>
    </figure>
  )
}
