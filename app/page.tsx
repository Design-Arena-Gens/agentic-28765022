'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [ncLevel, setNcLevel] = useState(80)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      title: 'Adaptive ANC',
      description: 'AI-powered noise cancellation that adapts to your environment in real-time',
      icon: '🎯'
    },
    {
      title: 'Hi-Res Audio',
      description: '40mm drivers delivering studio-quality sound with deep bass and crystal clear highs',
      icon: '🎵'
    },
    {
      title: '60H Battery',
      description: 'Extended playtime with fast charging - 10 minutes charge = 5 hours playback',
      icon: '⚡'
    },
    {
      title: 'Premium Comfort',
      description: 'Memory foam ear cushions and adjustable headband for all-day comfort',
      icon: '☁️'
    }
  ]

  const specs = [
    { label: 'Noise Cancellation', value: 'Up to 45dB' },
    { label: 'Frequency Response', value: '20Hz - 40kHz' },
    { label: 'Battery Life', value: '60 hours (ANC on)' },
    { label: 'Bluetooth', value: '5.3 with multipoint' },
    { label: 'Weight', value: '250g' },
    { label: 'Charging', value: 'USB-C Fast Charge' }
  ]

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero} style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <nav className={styles.nav}>
          <div className={styles.logo}>ProSound Elite</div>
          <div className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#specs">Specs</a>
            <a href="#demo">Demo</a>
          </div>
        </nav>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Silence.<br/>
            <span className={styles.gradient}>Perfected.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Experience the world's most advanced noise cancelling technology
          </p>

          {/* 3D Headphone Visualization */}
          <div className={styles.headphoneContainer}>
            <div className={styles.headphone}>
              <div className={styles.headband}></div>
              <div className={styles.earCupLeft}>
                <div className={styles.speaker}></div>
                <div className={styles.cushion}></div>
              </div>
              <div className={styles.earCupRight}>
                <div className={styles.speaker}></div>
                <div className={styles.cushion}></div>
              </div>
            </div>
            <div className={styles.soundWaves}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className={styles.wave} style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>

          <button className={styles.ctaButton}>
            Pre-Order Now - $399
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <h2 className={styles.sectionTitle}>Revolutionary Features</h2>
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.featureCard} ${activeFeature === index ? styles.active : ''}`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className={styles.demo}>
        <h2 className={styles.sectionTitle}>Active Noise Cancellation Demo</h2>
        <div className={styles.demoContainer}>
          <div className={styles.visualizer}>
            <div className={styles.noiseInput}>
              <div className={styles.waveform}>
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className={styles.bar}
                    style={{
                      height: `${Math.random() * (100 - ncLevel)}%`,
                      animationDelay: `${i * 0.02}s`
                    }}
                  ></div>
                ))}
              </div>
              <label>Ambient Noise</label>
            </div>

            <div className={styles.arrow}>→</div>

            <div className={styles.noiseOutput}>
              <div className={styles.waveform}>
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className={styles.bar}
                    style={{
                      height: `${Math.random() * (100 - ncLevel) * 0.2}%`,
                      animationDelay: `${i * 0.02}s`
                    }}
                  ></div>
                ))}
              </div>
              <label>What You Hear</label>
            </div>
          </div>

          <div className={styles.controls}>
            <div className={styles.sliderContainer}>
              <label>Noise Cancellation Level: {ncLevel}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={ncLevel}
                onChange={(e) => setNcLevel(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.sliderLabels}>
                <span>Transparency</span>
                <span>Max ANC</span>
              </div>
            </div>

            <button
              className={`${styles.playButton} ${isPlaying ? styles.playing : ''}`}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? '⏸ Pause' : '▶ Play Demo'}
            </button>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className={styles.specs}>
        <h2 className={styles.sectionTitle}>Technical Specifications</h2>
        <div className={styles.specGrid}>
          {specs.map((spec, index) => (
            <div key={index} className={styles.specCard}>
              <div className={styles.specLabel}>{spec.label}</div>
              <div className={styles.specValue}>{spec.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready to Experience Silence?</h2>
        <p>Join thousands of audio enthusiasts who've made the switch</p>
        <div className={styles.ctaButtons}>
          <button className={styles.primaryButton}>Pre-Order Now</button>
          <button className={styles.secondaryButton}>Learn More</button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3>ProSound Elite</h3>
            <p>Premium audio technology</p>
          </div>
          <div className={styles.footerLinks}>
            <div>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#specs">Specifications</a>
              <a href="#demo">Demo</a>
            </div>
            <div>
              <h4>Support</h4>
              <a href="#">Documentation</a>
              <a href="#">Contact</a>
              <a href="#">Warranty</a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2025 ProSound Elite. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
