import { useMemo, useState, useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { galleryImages } from "@/services/Gallery";
import { useMediaDimensions, getDefaultDimensions } from "../hooks/useMediaDimensions";

import GalleryHero from "../components/GalleryHero";
import GalleryCard from "../components/GalleryCard";
import GalleryLightbox from "../components/GalleryLightbox";
import "../components/Gallery.css";

export interface GalleryPhoto {
    key: string;
    src: string;
    width: number;
    height: number;
    id: number;
    title: string;
}

const PAGE_SIZE = 10;
const PRELOAD_THRESHOLD = "600px";

export default function Gallery() {
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [renderedCount, setRenderedCount] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState(-1);

    const visibleItems = useMemo(() => galleryImages.slice(0, visibleCount), [visibleCount]);
    const dimensions = useMediaDimensions(visibleItems);

    useEffect(() => {
        if (visibleItems.every((item) => dimensions[item.id]?.loaded)) {
            setRenderedCount(visibleCount);
        }
    }, [visibleItems, dimensions, visibleCount]);

    const renderedItems = useMemo(() => galleryImages.slice(0, renderedCount), [renderedCount]);

    const photos: GalleryPhoto[] = useMemo(
        () =>
            renderedItems.map((item) => {
                const resolved = dimensions[item.id] ?? getDefaultDimensions();
                return {
                    key: String(item.id),
                    src: item.src,
                    width: resolved.width,
                    height: resolved.height,
                    id: item.id,
                    title: item.title,
                };
            }),
        [renderedItems, dimensions]
    );

    const hasMore = visibleCount < galleryImages.length;
    const isLoadingMore = renderedCount < visibleCount;

    const { ref: sentinelRef } = useInView({
        threshold: 0,
        rootMargin: PRELOAD_THRESHOLD,
        skip: !hasMore || isLoadingMore,
        onChange: (inView) => {
            if (inView && hasMore && !isLoadingMore) {
                setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, galleryImages.length));
            }
        },
    });

    const handleOpen = useCallback((index: number) => {
        setLightboxIndex(index);
    }, []);

    const handleClose = useCallback(() => {
        setLightboxIndex(-1);
    }, []);

    return (
        <main className="gallery-page">
            <GalleryHero
                title="Memory Archive"
                subtitle="A place where every story lives on."
            />

            <div className="gallery-container">
                {renderedCount > 0 && (
                    <div className="gallery-masonry">
                        {photos.map((photo, index) => (
                            <GalleryCard
                                key={photo.key}
                                photo={photo}
                                index={index}
                                onOpen={handleOpen}
                            />
                        ))}
                    </div>
                )}

                {hasMore && !isLoadingMore && (
                    <div ref={sentinelRef} className="gallery-sentinel" aria-hidden="true" />
                )}
            </div>

            {lightboxIndex >= 0 && (
                <GalleryLightbox photos={photos} index={lightboxIndex} onClose={handleClose} />
            )}
        </main>
    );
}
