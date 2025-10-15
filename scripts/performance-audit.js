const fs = require('fs');
const path = require('path');

/**
 * Performance Audit Script
 * Analyzes the build output and provides performance metrics
 */

// Performance targets based on Core Web Vitals
const PERFORMANCE_TARGETS = {
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100,  // First Input Delay (ms)
  CLS: 0.1,  // Cumulative Layout Shift
  FCP: 1800, // First Contentful Paint (ms)
  TTI: 3800, // Time to Interactive (ms)
  TBT: 200,  // Total Blocking Time (ms)
  SI: 3400,  // Speed Index (ms)
  bundleSize: {
    emergency: 50000,  // 50KB for emergency page
    firstLoad: 100000, // 100KB for first load JS
    image: 100000,     // 100KB max per image
  }
};

// Analyze build output
function analyzeBuildOutput() {
  console.log('\n🔍 Performance Audit Report\n');
  console.log('=' .repeat(60));

  // Check if build exists
  const buildPath = path.join(__dirname, '..', 'out');
  if (!fs.existsSync(buildPath)) {
    console.error('❌ Build not found. Run "npm run build" first.');
    return;
  }

  // Analyze HTML files
  analyzeHTMLFiles(buildPath);

  // Analyze JavaScript bundles
  analyzeJSBundles(buildPath);

  // Analyze images
  analyzeImages(buildPath);

  // Performance recommendations
  printRecommendations();
}

function analyzeHTMLFiles(buildPath) {
  console.log('\n📄 HTML Analysis:');
  console.log('-'.repeat(40));

  const emergencyPath = path.join(buildPath, 'emergency', 'index.html');
  const emergencyOptPath = path.join(buildPath, 'emergency-optimized', 'index.html');

  if (fs.existsSync(emergencyPath)) {
    const htmlContent = fs.readFileSync(emergencyPath, 'utf8');
    const size = Buffer.byteLength(htmlContent, 'utf8');

    console.log(`• Emergency page HTML: ${formatBytes(size)}`);

    // Check for performance issues
    const issues = [];
    if (!htmlContent.includes('rel="preload"')) {
      issues.push('  ⚠️  Missing preload hints');
    }
    if (!htmlContent.includes('rel="preconnect"')) {
      issues.push('  ⚠️  Missing preconnect hints');
    }
    if (htmlContent.includes('fonts.googleapis.com') && !htmlContent.includes('display=swap')) {
      issues.push('  ⚠️  Fonts may not be using display:swap');
    }

    if (issues.length > 0) {
      console.log('\n  Issues found:');
      issues.forEach(issue => console.log(issue));
    } else {
      console.log('  ✅ HTML optimizations in place');
    }
  }

  if (fs.existsSync(emergencyOptPath)) {
    const htmlContent = fs.readFileSync(emergencyOptPath, 'utf8');
    const size = Buffer.byteLength(htmlContent, 'utf8');
    console.log(`• Optimized emergency page HTML: ${formatBytes(size)}`);
  }
}

function analyzeJSBundles(buildPath) {
  console.log('\n📦 JavaScript Bundle Analysis:');
  console.log('-'.repeat(40));

  const jsPath = path.join(buildPath, '_next', 'static');

  if (fs.existsSync(jsPath)) {
    let totalSize = 0;
    const bundles = [];

    // Recursively find all JS files
    function findJSFiles(dir) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          findJSFiles(filePath);
        } else if (file.endsWith('.js')) {
          const size = stat.size;
          totalSize += size;
          bundles.push({ name: file, size });
        }
      });
    }

    findJSFiles(jsPath);

    // Sort by size and show top 5
    bundles.sort((a, b) => b.size - a.size);
    console.log('\nTop 5 largest bundles:');
    bundles.slice(0, 5).forEach((bundle, i) => {
      const status = bundle.size > 50000 ? '⚠️ ' : '✅';
      console.log(`${i + 1}. ${status} ${bundle.name}: ${formatBytes(bundle.size)}`);
    });

    console.log(`\nTotal JS size: ${formatBytes(totalSize)}`);

    if (totalSize > PERFORMANCE_TARGETS.bundleSize.firstLoad) {
      console.log(`⚠️  Total JS exceeds target of ${formatBytes(PERFORMANCE_TARGETS.bundleSize.firstLoad)}`);
    } else {
      console.log(`✅ Total JS within target of ${formatBytes(PERFORMANCE_TARGETS.bundleSize.firstLoad)}`);
    }
  }
}

function analyzeImages(buildPath) {
  console.log('\n🖼️  Image Analysis:');
  console.log('-'.repeat(40));

  const imagePath = path.join(buildPath, 'images');

  if (fs.existsSync(imagePath)) {
    const images = [];
    let totalSize = 0;

    function findImages(dir) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          findImages(filePath);
        } else if (/\.(jpg|jpeg|png|gif|webp|avif)$/i.test(file)) {
          const size = stat.size;
          totalSize += size;
          images.push({ name: file, size, path: filePath });
        }
      });
    }

    findImages(imagePath);

    // Check for optimization opportunities
    const unoptimized = images.filter(img => {
      const isLarge = img.size > PERFORMANCE_TARGETS.bundleSize.image;
      const isPNG = img.name.toLowerCase().endsWith('.png') && img.size > 50000;
      const isJPG = (img.name.toLowerCase().endsWith('.jpg') ||
                     img.name.toLowerCase().endsWith('.jpeg')) && img.size > 70000;
      return isLarge || isPNG || isJPG;
    });

    if (unoptimized.length > 0) {
      console.log('\nImages needing optimization:');
      unoptimized.forEach(img => {
        console.log(`⚠️  ${img.name}: ${formatBytes(img.size)}`);

        // Suggest format
        if (img.name.toLowerCase().endsWith('.png')) {
          console.log(`    → Consider converting to WebP or AVIF`);
        } else if (img.name.toLowerCase().endsWith('.jpg') || img.name.toLowerCase().endsWith('.jpeg')) {
          console.log(`    → Consider optimizing or converting to WebP`);
        }
      });
    } else {
      console.log('✅ All images are optimized');
    }

    console.log(`\nTotal image size: ${formatBytes(totalSize)}`);
    console.log(`Images found: ${images.length}`);
  }
}

function printRecommendations() {
  console.log('\n🎯 Performance Optimization Recommendations:');
  console.log('=' .repeat(60));

  const recommendations = [
    {
      category: 'Critical Rendering Path',
      items: [
        'Inline critical CSS for above-fold content',
        'Defer non-critical JavaScript',
        'Preload critical fonts with font-display: swap',
        'Use resource hints (preconnect, prefetch, preload)',
      ]
    },
    {
      category: 'Images',
      items: [
        'Convert images to WebP or AVIF format',
        'Implement responsive images with srcset',
        'Lazy load below-fold images',
        'Use next/image component for automatic optimization',
      ]
    },
    {
      category: 'JavaScript',
      items: [
        'Code split large bundles',
        'Dynamic import for below-fold components',
        'Remove unused dependencies',
        'Minify and compress JavaScript files',
      ]
    },
    {
      category: 'Caching',
      items: [
        'Implement service worker for offline support',
        'Set proper cache headers for static assets',
        'Use CDN for asset delivery',
        'Implement stale-while-revalidate strategy',
      ]
    },
    {
      category: 'Mobile Performance',
      items: [
        'Reduce JavaScript execution time',
        'Minimize main thread work',
        'Avoid layout shifts (reserve space for dynamic content)',
        'Optimize for slow network conditions',
      ]
    }
  ];

  recommendations.forEach(rec => {
    console.log(`\n${rec.category}:`);
    rec.items.forEach(item => {
      console.log(`  • ${item}`);
    });
  });

  console.log('\n' + '=' .repeat(60));
  console.log('📊 Target Core Web Vitals:');
  console.log(`  • LCP: < ${PERFORMANCE_TARGETS.LCP}ms`);
  console.log(`  • FID: < ${PERFORMANCE_TARGETS.FID}ms`);
  console.log(`  • CLS: < ${PERFORMANCE_TARGETS.CLS}`);
  console.log(`  • FCP: < ${PERFORMANCE_TARGETS.FCP}ms`);
  console.log(`  • TTI: < ${PERFORMANCE_TARGETS.TTI}ms`);
  console.log('=' .repeat(60));
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run the audit
analyzeBuildOutput();