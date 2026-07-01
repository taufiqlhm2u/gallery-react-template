import "./Gallery.css";

interface GalleryHeroProps {
    title: string;
    subtitle: string;
}

export default function GalleryHero({ title, subtitle }: GalleryHeroProps) {
    return (
        <section className="gallery-hero">
            {/* Divider line - subtle separator from header */}
            <div className="w-20 h-px bg-linear-to-r from-transparent via-neutral-300 to-transparent mx-auto mb-8" />
            
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 font-sans">
                {title}
            </h1>
            <p className="mt-3 text-base text-neutral-500 font-sans">
                {subtitle}
            </p>
        </section>
    );
}