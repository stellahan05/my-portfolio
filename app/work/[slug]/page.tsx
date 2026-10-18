import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudyArticle from '../../components/case-study-article'
import { caseStudies } from '../../data/case-studies'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find(study => study.slug === slug)
  if (!study) return {}
  return { title: `${study.title} | Stella Han`, description: study.introduction[0] }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = caseStudies.find(study => study.slug === slug)
  if (!study) notFound()
  return <CaseStudyArticle study={study} />
}
