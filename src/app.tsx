import { useState, useEffect } from 'react'
import { skills } from './data/skills'
import Terminal from './components/terminal'
import styles from './app.module.css'

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(i => (i - 1 + skills.length) % skills.length)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(i => (i + 1) % skills.length)
      } else if (e.key === 'Enter') {
        const skill = skills[selectedIndex]
        window.open(skill.githubUrl, '_blank', 'noopener,noreferrer')
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selectedIndex])

  return (
    <div className={styles.root}>
      <Terminal selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
    </div>
  )
}
