import { skills } from '../data/skills'
import styles from './skill-menu.module.css'

type Props = {
  selectedIndex: number
  onSelect: (index: number) => void
}

export default function SkillMenu({ selectedIndex, onSelect }: Props) {
  const selected = skills[selectedIndex]

  return (
    <div className={styles.panel}>
      <div className={styles.iconWrap}>
        <pre className={styles.ascii} aria-hidden="true">{selected.ascii}</pre>
      </div>

      <div className={styles.right}>
        <nav className={styles.nav} aria-label="skills">
          {skills.map((skill, i) => (
            <button
              key={skill.id}
              className={`${styles.item} ${i === selectedIndex ? styles.selected : ''}`}
              onClick={() => onSelect(i)}
              aria-current={i === selectedIndex ? 'true' : undefined}
            >
              <span className={styles.cursor} aria-hidden="true">
                {i === selectedIndex ? '▶' : '\u00a0\u00a0'}
              </span>
              {skill.name}
            </button>
          ))}
          <div className={styles.comingSoon}>
            <span className={styles.cursor} aria-hidden="true">&nbsp;&nbsp;</span>
            more coming soon…
          </div>
        </nav>

      </div>
    </div>
  )
}
