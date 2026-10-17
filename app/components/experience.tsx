import { experiences } from '../data/experience'

const employers = experiences.reduce<{ company: string; roles: typeof experiences }[]>((groups, experience) => {
  const employer = groups.find((group) => group.company === experience.company)
  if (employer) employer.roles.push(experience)
  else groups.push({ company: experience.company, roles: [experience] })
  return groups
}, [])

export default function Experience() {
  return (
    <section id="experience" className="content-section compact-experience" aria-labelledby="experience-heading">
      <div className="page-container">
        <div className="section-intro">
          <h2 id="experience-heading" className="section-heading">Experience</h2>
        </div>
        <div className="experience-list">
          {employers.map((employer, employerIndex) => (
            <article key={employer.company} className="experience-employer" aria-labelledby={`experience-employer-${employerIndex}`}>
              <h3 id={`experience-employer-${employerIndex}`} className="experience-company">{employer.company}</h3>
              <div className="experience-roles">
                {employer.roles.map((experience, roleIndex) => (
                  <section key={experience.title} className="experience-row" aria-labelledby={`experience-role-${employerIndex}-${roleIndex}`}>
                    <p className="experience-period">{experience.period}</p>
                    <div className="experience-position">
                      <h4 id={`experience-role-${employerIndex}-${roleIndex}`}>{experience.title}</h4>
                    </div>
                    <div className="experience-contribution">
                      <p>{experience.summary}</p>
                      {experience.relatedProjectId && (
                        <a href={`#${experience.relatedProjectId}`}>
                          Related work: {experience.relatedProjectLabel} <span aria-hidden="true">→</span>
                        </a>
                      )}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
