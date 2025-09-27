import { exec } from 'child_process'
import { promisify } from 'util'
import fs from 'fs'
import path from 'path'

const execAsync = promisify(exec)

describe('Build Process Tests', () => {
  it('should run linting without errors', async () => {
    const { stdout, stderr } = await execAsync('npm run lint')
    // The headers warning is expected with static export, filter it out
    const filteredStderr = stderr
      .split('\n')
      .filter(line => !line.includes('headers') && !line.includes('output: export'))
      .join('\n')
      .trim()
    expect(filteredStderr).toBe('')
  }, 30000)

  it('should have valid package.json', () => {
    const packagePath = path.join(process.cwd(), 'package.json')
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))

    expect(packageJson.name).toBe('weather-shield-roofing')
    expect(packageJson.version).toBeDefined()
    expect(packageJson.scripts.dev).toBeDefined()
    expect(packageJson.scripts.build).toBeDefined()
    expect(packageJson.scripts.test).toBeDefined()
  })

  it('should have Next.js configuration', () => {
    const configPath = path.join(process.cwd(), 'next.config.js')
    expect(fs.existsSync(configPath)).toBe(true)
  })

  it('should have TypeScript configuration', () => {
    const tsconfigPath = path.join(process.cwd(), 'tsconfig.json')
    expect(fs.existsSync(tsconfigPath)).toBe(true)
  })

  it('should have Tailwind CSS configuration', () => {
    const tailwindPath = path.join(process.cwd(), 'tailwind.config.ts')
    expect(fs.existsSync(tailwindPath)).toBe(true)
  })

  it('should have critical pages', () => {
    const pages = [
      'app/page.tsx',
      'app/layout.tsx',
      'app/about/page.tsx',
      'app/services/page.tsx',
      'app/reviews/page.tsx',
      'app/quote/page.tsx'
    ]

    pages.forEach(page => {
      const pagePath = path.join(process.cwd(), page)
      expect(fs.existsSync(pagePath)).toBe(true)
    })
  })

  it('should have critical components', () => {
    const components = [
      'app/components/Header.tsx',
      'app/components/Footer.tsx',
      'app/components/HeroSection.tsx',
      'app/components/ServiceCards.tsx',
      'app/components/AboutSection.tsx',
      'app/components/TestimonialsSection.tsx'
    ]

    components.forEach(component => {
      const componentPath = path.join(process.cwd(), component)
      expect(fs.existsSync(componentPath)).toBe(true)
    })
  })

  it('should have public assets', () => {
    const publicPath = path.join(process.cwd(), 'public')
    expect(fs.existsSync(publicPath)).toBe(true)

    const faviconPath = path.join(publicPath, 'favicon.png')
    expect(fs.existsSync(faviconPath)).toBe(true)

    const cnamePath = path.join(publicPath, 'CNAME')
    expect(fs.existsSync(cnamePath)).toBe(true)
  })

  it('should have robots.txt and sitemap', () => {
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt')
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml')

    expect(fs.existsSync(robotsPath)).toBe(true)
    expect(fs.existsSync(sitemapPath)).toBe(true)
  })

  it('should have valid CNAME for GitHub Pages', () => {
    const cnamePath = path.join(process.cwd(), 'public', 'CNAME')
    const cnameContent = fs.readFileSync(cnamePath, 'utf8').trim()
    expect(cnameContent).toBe('www.weathershieldroofers.com')
  })
})