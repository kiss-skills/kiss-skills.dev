import type { Skill } from '../data/skills'
import styles from './skill-detail.module.css'

type Props = {
  skill: Skill
}

export default function SkillDetail({ skill }: Props) {
  const displayUrl = skill.githubUrl.replace('https://', '')

  return (
    <div className={styles.panel}>
      <div className={styles.name}>
        {skill.name} <span className={styles.version}>@{skill.version}</span>
      </div>
      <div className={styles.tagline}>{skill.tagline}</div>

      <div className={styles.separator} />

      <div className={styles.section}>
        <div className={styles.sectionLabel}>INSTALLATION</div>
        <pre className={styles.installation}>{skill.installation}</pre>
      </div>

      <div className={styles.spacer} />

      <div className={styles.urlRow}>
        <span className={styles.urlLabel}>docs →</span>
        <a
          href={skill.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.url}
        >
          {displayUrl}
        </a>
      </div>

      <div className={styles.hint}>press ↵ to open</div>
    </div>
  )
}
