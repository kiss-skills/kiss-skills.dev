import { skills } from '../data/skills'
import SkillMenu from './skill-menu'
import SkillDetail from './skill-detail'
import styles from './terminal.module.css'

type Props = {
  selectedIndex: number
  onSelect: (index: number) => void
}

export default function Terminal({ selectedIndex, onSelect }: Props) {
  const selected = skills[selectedIndex]

  return (
    <div className={styles.frame}>
      <div className={styles.header}>
        <span className={styles.title}>── ♛ KISS! Skills ──────────</span>
      </div>

      <div className={styles.body}>
        <SkillMenu selectedIndex={selectedIndex} onSelect={onSelect} />
        <div className={styles.divider} />
        <SkillDetail skill={selected} />
      </div>

      <div className={styles.footer}>
        <span>MIT License</span>
        <span className={styles.footerSep}>·</span>
        <span>open source · free to use</span>
        <span className={styles.footerSep}>·</span>
        <a
          href="https://github.com/kiss-skills"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          github.com/kiss-skills
        </a>
      </div>
    </div>
  )
}
