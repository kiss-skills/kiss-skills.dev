export type Mascot = 'dog' | 'cat' | 'frog' | 'duck'

export type Skill = {
  id: string
  name: string
  version: string
  tagline: string
  installation: string
  githubUrl: string
  mascot: Mascot
}

export const skills: Skill[] = [
  {
    id: 'pr-buddy',
    name: '/pr-buddy',
    version: '0.2.0',
    tagline: 'A Claude Code skill that makes you understand a PR before you approve it.',
    installation: 'npx skills add kiss-skills/pr-buddy',
    githubUrl: 'https://kiss-skills.github.io/pr-buddy/',
    mascot: 'dog',
  },
]
