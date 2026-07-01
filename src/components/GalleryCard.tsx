import { useState, memo } from "react";
import type { GalleryPhoto } from "../pages/Gallery";
import "./Gallery.css";

interface GalleryCardProps {
    photo: GalleryPhoto;
    wrapperStyle?: React.CSSProperties;
    onOpen: (index: number) => void;
    index: number;
}

function GalleryCard({ photo, wrapperStyle, onOpen, index }: GalleryCardProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = () => {
        onOpen(index);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen(index);
        }
    };

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
    };

    return (
        <div
            className={`gallery-card ${isLoaded ? "gallery-card--loaded" : ""}`}
            style={wrapperStyle}
            role="button"
            tabIndex={0}
            aria-label={`Open ${photo.title}`}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onContextMenu={handleContextMenu}
        >
            <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                decoding="async"
                className="gallery-card__media"
                onLoad={() => setIsLoaded(true)}
                onContextMenu={handleContextMenu}
                draggable={false}
            />

            <div className="gallery-card__overlay">
                <span className="gallery-card__title">{photo.title}</span>
            </div>
        </div>
    );
}

// Memoize to prevent unnecessary re-renders
export default memo(GalleryCard, (prevProps, nextProps) => {
    return (
        prevProps.photo.key === nextProps.photo.key &&
        prevProps.index === nextProps.index &&
        prevProps.wrapperStyle === nextProps.wrapperStyle
    );
});
