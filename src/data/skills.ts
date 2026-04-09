export type Skill = {
  id: string
  name: string
  version: string
  tagline: string
  installation: string
  update: string
  githubUrl: string
  ascii: string
}

export const skills: Skill[] = [
  {
    id: 'pr-buddy',
    name: '/pr-buddy',
    version: '0.3.0',
    tagline: 'A Claude Code skill that makes you understand a PR before you approve it.',
    installation: 'npx skills add kiss-skills/pr-buddy',
    update: 'npx skills update',
    githubUrl: 'https://kiss-skills.github.io/pr-buddy/',
    ascii: `  / \\__\n (    @\\___\n /         O\n/   (_____/\n/_____/   U`,
  },
]
