import { useState, useEffect } from 'react';
import InfiniteGallery from '@/components/ui/3d-gallery-photography';

const sampleImages = [
  {
    src: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Mountains',
  },
  {
    src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Ocean Waves',
  },
  {
    src: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Forest Road',
  },
  {
    src: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Sand Dunes',
  },
  {
    src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'City Skyline',
  },
  {
    src: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Aurora Borealis',
  },
  {
    src: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Waterfall',
  },
  {
    src: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Beach Sunset',
  },
];

export default function Home() {
  const [isDone, setIsDone] = useState(false);

  // Lock/unlock page scroll based on gallery state
  useEffect(() => {
    if (!isDone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Smooth scroll hint after a short delay
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 50);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDone]);

  return (
    <div style={{ background: '#f5f0eb' }}>
      {/* ── GALLERY SECTION ─────────────────────────────── */}
      <section style={{ position: 'relative', height: '100vh', width: '100%' }}>
        {/* Canvas with a warm translucent overlay so images show on light bg */}
        <InfiniteGallery
          images={sampleImages}
          speed={1.0}
          visibleCount={12}
          falloff={{ near: 0.8, far: 14 }}
          className="h-screen w-full overflow-hidden"
          style={{ background: '#e8e0d5' }}
          onComplete={() => setIsDone(true)}
        />

        {/* Headline overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(2rem, 7vw, 5rem)',
              letterSpacing: '-0.02em',
              color: '#1a1209',
              textAlign: 'center',
              padding: '0 1.5rem',
              mixBlendMode: 'multiply',
              lineHeight: 1.15,
            }}
          >
            <em>Visual Stories</em>
            <br />
            Captured in Time
          </h1>
        </div>

        {/* Hint bar at the bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: 0,
            right: 0,
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          {!isDone ? (
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#4a3f35',
              }}
            >
              Scroll or use arrow keys to explore
              <br />
              <span style={{ opacity: 0.55 }}>
                Auto-play resumes after 3 seconds
              </span>
            </p>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                animation: 'fadeUp 0.8s ease forwards',
              }}
            >
              <p
                style={{
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#4a3f35',
                }}
              >
                All images displayed — scroll down to continue
              </p>
              {/* Animated arrow */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                style={{ animation: 'bounce 1.2s ease-in-out infinite' }}
              >
                <path
                  d="M10 3v14M4 11l6 6 6-6"
                  stroke="#4a3f35"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </section>

      {/* ── CONTENT SECTION ─────────────────────────────── */}
      {isDone && (
        <section
          style={{
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #f5f0eb 0%, #ede4d8 50%, #e0d4c4 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6rem 2rem',
            gap: '3rem',
          }}
        >
          {/* Decorative rule */}
          <div
            style={{
              width: '3rem',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #8b6f47, transparent)',
            }}
          />

          <div style={{ maxWidth: '640px', textAlign: 'center' }}>
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#8b6f47',
              }}
            >
              Photography &amp; Visual Art
            </span>

            <h2
              style={{
                marginTop: '1.5rem',
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.02em',
                color: '#1a1209',
                lineHeight: 1.2,
              }}
            >
              Every image tells
              <br />
              <em>its own story</em>
            </h2>

            <p
              style={{
                marginTop: '1.5rem',
                fontFamily: '"Segoe UI", system-ui, sans-serif',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: '#5a4d42',
              }}
            >
              The universe holds infinite beauty — from mountain peaks
              shrouded in mist to coastlines kissed by sunset light.
              Through the camera lens, we capture moments that often pass
              unnoticed by hurried eyes.
            </p>
          </div>

          {/* Feature cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              width: '100%',
              maxWidth: '700px',
              marginTop: '1rem',
            }}
          >
            {[
              { icon: '🏔', title: 'Wild Nature', description: 'Mountains, forests, and captivating deserts' },
              { icon: '🌊', title: 'Oceans', description: 'The power and serenity of boundless seas' },
              { icon: '🌅', title: 'Golden Light', description: 'When dawn and dusk transform the world into a canvas' },
            ].map(({ icon, title, description }) => (
              <div
                key={title}
                style={{
                  background: 'rgba(255,255,255,0.55)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '1rem',
                  padding: '2rem 1.5rem',
                  border: '1px solid rgba(139,111,71,0.15)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                <div
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#1a1209',
                    marginBottom: '0.5rem',
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontFamily: '"Segoe UI", system-ui, sans-serif',
                    fontSize: '0.875rem',
                    color: '#6b5d52',
                    lineHeight: 1.6,
                  }}
                >
                  {description}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#a08060',
              marginTop: '2rem',
            }}
          >
            &copy; {new Date().getFullYear()} Photography Gallery · Made with ❤
          </p>
        </section>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
      `}</style>
    </div>
  );
}
