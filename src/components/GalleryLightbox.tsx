import { useMemo, memo } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import type { GalleryPhoto } from "../pages/Gallery";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "./Gallery.css";

interface GalleryLightboxProps {
    photos: GalleryPhoto[];
    index: number;
    onClose: () => void;
}

function GalleryLightbox({ photos, index, onClose }: GalleryLightboxProps) {
    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
    };

    // Memoize slides to prevent recreation on every render
    const slides = useMemo(
        () =>
            photos.map((photo) => ({
                src: photo.src,
                alt: photo.title,
                width: photo.width,
                height: photo.height,
                title: photo.title,
            })),
        [photos]
    );

    return (
        <div onContextMenu={handleContextMenu}>
            <Lightbox
                open={index >= 0}
                close={onClose}
                index={index >= 0 ? index : 0}
                slides={slides}
                plugins={[Captions]}
                carousel={{ 
                    finite: false,
                    preload: 2,
                }}
                animation={{ fade: 250, swipe: 250 }}
                controller={{ 
                    closeOnBackdropClick: true, 
                    closeOnPullUp: true 
                }}
                render={{
                    slide: ({ slide }) => (
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            loading="eager"
                            decoding="async"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                            }}
                        />
                    ),
                }}
            />
        </div>
    );
}

// Memoize to prevent unnecessary re-renders when parent updates
export default memo(GalleryLightbox, (prevProps, nextProps) => {
    return (
        prevProps.index === nextProps.index &&
        prevProps.photos === nextProps.photos &&
        prevProps.onClose === nextProps.onClose
    );
});
