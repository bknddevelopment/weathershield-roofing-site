import fs from 'fs'
import path from 'path'

describe('Performance Tests', () => {
  describe('Bundle Size', () => {
    it('should have reasonable main bundle size', () => {
      const mainChunkPath = path.join(process.cwd(), '.next/static/chunks')
      if (!fs.existsSync(mainChunkPath)) {
        console.log('Build directory not found, skipping bundle size test')
        return
      }

      const files = fs.readdirSync(mainChunkPath)
      const mainFile = files.find(f => f.startsWith('main-'))

      if (mainFile) {
        const stats = fs.statSync(path.join(mainChunkPath, mainFile))
        const sizeInKB = stats.size / 1024

        // Main bundle should be under 200KB
        expect(sizeInKB).toBeLessThan(200)
        console.log(`Main bundle size: ${sizeInKB.toFixed(2)}KB`)
      }
    })

    it('should have reasonable framework bundle size', () => {
      const chunkPath = path.join(process.cwd(), '.next/static/chunks')
      if (!fs.existsSync(chunkPath)) {
        console.log('Build directory not found, skipping framework size test')
        return
      }

      const files = fs.readdirSync(chunkPath)
      const frameworkFile = files.find(f => f.startsWith('framework-'))

      if (frameworkFile) {
        const stats = fs.statSync(path.join(chunkPath, frameworkFile))
        const sizeInKB = stats.size / 1024

        // Framework bundle should be under 200KB
        expect(sizeInKB).toBeLessThan(200)
        console.log(`Framework bundle size: ${sizeInKB.toFixed(2)}KB`)
      }
    })
  })

  describe('Image Optimization', () => {
    it('should have optimized images in public folder', () => {
      const imagesPath = path.join(process.cwd(), 'public/images')
      if (!fs.existsSync(imagesPath)) {
        console.log('Images directory not found, skipping image optimization test')
        return
      }

      const checkImageSize = (dir: string) => {
        const files = fs.readdirSync(dir)
        files.forEach(file => {
          const filePath = path.join(dir, file)
          const stats = fs.statSync(filePath)

          if (stats.isDirectory()) {
            checkImageSize(filePath)
          } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
            const sizeInKB = stats.size / 1024

            // Warn if image is over 500KB
            if (sizeInKB > 500) {
              console.warn(`Large image found: ${file} (${sizeInKB.toFixed(2)}KB)`)
            }

            // Fail if image is over 1MB
            expect(sizeInKB).toBeLessThan(1024)
          }
        })
      }

      checkImageSize(imagesPath)
    })
  })

  describe('Critical Files', () => {
    it('should generate all critical static files', () => {
      const criticalFiles = [
        'public/robots.txt',
        'public/sitemap.xml',
        'public/favicon.png',
        'public/CNAME'
      ]

      criticalFiles.forEach(file => {
        const filePath = path.join(process.cwd(), file)
        expect(fs.existsSync(filePath)).toBe(true)
      })
    })

    it('should have valid robots.txt', () => {
      const robotsPath = path.join(process.cwd(), 'public/robots.txt')
      const content = fs.readFileSync(robotsPath, 'utf8')

      expect(content).toContain('User-agent: *')
      expect(content).toContain('Sitemap:')
      // Check that we allow crawling of the root, not blanket disallow
      expect(content).toContain('Allow: /')

      // Check that we don't block all crawlers - only specific bad bots
      const lines = content.split('\n')
      let currentUserAgent = ''
      let hasGeneralDisallow = false

      lines.forEach((line, index) => {
        if (line.startsWith('User-agent:')) {
          currentUserAgent = line
        }
        // Check if there's a blanket disallow for all user agents
        if (line.trim() === 'Disallow: /' && currentUserAgent.includes('User-agent: *')) {
          // Check if this is part of the "Disallow specific paths" section
          const prevLines = lines.slice(Math.max(0, index - 5), index).join(' ')
          if (!prevLines.includes('specific paths')) {
            hasGeneralDisallow = true
          }
        }
      })

      expect(hasGeneralDisallow).toBe(false)
    })

    it('should have valid sitemap.xml', () => {
      const sitemapPath = path.join(process.cwd(), 'public/sitemap.xml')
      const content = fs.readFileSync(sitemapPath, 'utf8')

      expect(content).toContain('<?xml')
      expect(content).toContain('<urlset')
      expect(content).toContain('<loc>')
      expect(content).toContain('weathershield')
    })
  })

  describe('Page Load Performance', () => {
    it('should have reasonable page sizes', () => {
      const htmlPath = path.join(process.cwd(), '.next/server/app')
      if (!fs.existsSync(htmlPath)) {
        console.log('Build directory not found, skipping page size test')
        return
      }

      const checkPageSize = (dir: string) => {
        const files = fs.readdirSync(dir)
        files.forEach(file => {
          const filePath = path.join(dir, file)
          const stats = fs.statSync(filePath)

          if (stats.isDirectory()) {
            checkPageSize(filePath)
          } else if (file === 'page.js') {
            const sizeInKB = stats.size / 1024

            // Pages should generally be under 500KB
            if (sizeInKB > 500) {
              console.warn(`Large page found: ${filePath} (${sizeInKB.toFixed(2)}KB)`)
            }

            // Fail if page is over 1MB
            expect(sizeInKB).toBeLessThan(1024)
          }
        })
      }

      checkPageSize(htmlPath)
    })
  })

  describe('Build Output', () => {
    it('should successfully export static site', () => {
      const outPath = path.join(process.cwd(), 'out')

      if (fs.existsSync(outPath)) {
        const files = fs.readdirSync(outPath)

        // Should have index.html
        expect(files).toContain('index.html')

        // Should have CNAME for GitHub Pages
        expect(files).toContain('CNAME')

        // Should have other critical pages
        const criticalPages = ['about.html', 'services.html']
        criticalPages.forEach(page => {
          const pagePath = path.join(outPath, page)
          if (!fs.existsSync(pagePath)) {
            // Check if it's in a directory
            const pageDir = page.replace('.html', '')
            const dirPath = path.join(outPath, pageDir)
            expect(fs.existsSync(dirPath)).toBe(true)
          }
        })
      }
    })
  })
})