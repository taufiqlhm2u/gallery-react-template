import InfiniteGallery from '@/components/ui/3d-gallery-photography';
import { galleryImages } from '@/services/Gallery';

const randomImages = galleryImages
  .sort(() => 0.5 - Math.random())
  .slice(0, 8)
  .map((item) => ({ src: item.src, alt: item.title }));

interface HeaderProps {
  onComplete: () => void;
  isDone: boolean;
  onScrollToBody: () => void;
}

export default function Header({ onComplete, isDone, onScrollToBody }: HeaderProps) {
  return (
    <section className="relative h-screen w-full">
      {/* 3D Gallery Canvas */}
      <InfiniteGallery
        images={randomImages}
        speed={1.0}
        visibleCount={12}
        falloff={{ near: 0.8, far: 14 }}
        className="h-screen w-full overflow-hidden"
        style={{ background: '#f5f5f5' }}
        onComplete={onComplete}
      />

      {/* Headline overlay */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  {/* Subtle vignette effect */}
  <div
    className="absolute inset-0"
    style={{
      background:
        'radial-gradient(ellipse 55% 35% at center, rgba(245,245,245,0.15) 0%, transparent 70%)',
    }}
  />

  <h1
    className="relative text-center px-6 leading-[1.15] text-[#1a1209]"
    style={{
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontSize: 'clamp(2rem, 7vw, 5rem)',
      letterSpacing: '-0.02em',
      textShadow: `
        0 0 8px rgba(255,255,255,0.6),
        0 0 16px rgba(255,255,255,0.4),
        0 0 28px rgba(255,255,255,0.25)
      `,
    }}
  >
    Your Gallery
  </h1>
</div>

      {/* Hint bar */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
        {!isDone ? (
          <p
            className="text-[#4a3f35] pointer-events-none uppercase"
            style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}
          >
            Keep scrolling to see more
            <br />
          </p>
        ) : (
          <div
            className="flex flex-col items-center gap-2 animate-fade-up cursor-pointer"
            onClick={onScrollToBody}
          >
            <p
              className="text-[#4a3f35] uppercase"
              style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}
            >
              Click the arrow to explore more
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="animate-bounce-arrow"
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
  );
}