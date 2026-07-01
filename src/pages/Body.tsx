export default function Body() {
  return (
    <section
      id="body"
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

      {/* Title */}
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
    </section>
  );
}
