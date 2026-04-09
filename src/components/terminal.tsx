import { skills } from '../data/skills'
import SkillMenu from './skill-menu'
import SkillDetail from './skill-detail'
import styles from './terminal.module.css'

type Props = {
  selectedIndex: number
  onSelect: (index: number) => void
}

function OctocatIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
    </svg>
  )
}

export default function Terminal({ selectedIndex, onSelect }: Props) {
  const selected = skills[selectedIndex]

  return (
    <div className={styles.frame}>
      <div className={styles.header}>
        <div>
          <div className={styles.title}>── ♛ KISS! Skills ──────────</div>
          <div className={styles.subtitle}>Keep It Simple Stupid! Skills</div>
        </div>
      </div>

      <div className={styles.body}>
        <SkillMenu selectedIndex={selectedIndex} onSelect={onSelect} />
        <div className={styles.divider} />
        <SkillDetail skill={selected} />
      </div>

      <div className={styles.statusBar}>
        <span>↵ open</span>
        <span className={styles.statusSep}>·</span>
        <span>⇥ tab</span>
      </div>

      <div className={styles.footer}>
        <a
          href="https://github.com/kiss-skills/pr-buddy?tab=MIT-1-ov-file"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mitLink}
        >MIT License</a>
        <span className={styles.footerSep}>·</span>
        <span>open source · free to use</span>
        <span className={styles.footerSep}>·</span>
        <a
          href="https://github.com/kiss-skills"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          <OctocatIcon />
          github.com/kiss-skills
        </a>
      </div>
    </div>
  )
}
