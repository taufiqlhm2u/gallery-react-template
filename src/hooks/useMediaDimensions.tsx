import { useEffect, useRef, useState } from "react";
import type { GalleryItem } from "../services/Gallery";

export interface MediaDimensions {
    width: number;
    height: number;
    loaded: boolean;
}

const DEFAULT_IMAGE_DIMENSIONS: MediaDimensions = { width: 4, height: 3, loaded: false };

/**
 * Lazily resolves the natural aspect ratio of every GalleryItem passed to it,
 * without ever mutating Gallery.ts. Until a given item's real dimensions are
 * known, a sensible default ratio is returned so the gallery can still
 * lay out; once resolved, the map updates and the gallery re-flows.
 */
export function useMediaDimensions(items: GalleryItem[]): Record<number, MediaDimensions> {
    const [dimensions, setDimensions] = useState<Record<number, MediaDimensions>>({});
    const resolvedIds = useRef<Set<number>>(new Set());

    useEffect(() => {
        items.forEach((item) => {
            if (resolvedIds.current.has(item.id)) {
                return;
            }
            resolvedIds.current.add(item.id);

            const img = new Image();
            img.onload = () => {
                setDimensions((prev) => ({
                    ...prev,
                    [item.id]: {
                        width: img.naturalWidth || 4,
                        height: img.naturalHeight || 3,
                        loaded: true,
                    },
                }));
            };
            img.onerror = () => {
                setDimensions((prev) => ({
                    ...prev,
                    [item.id]: { ...DEFAULT_IMAGE_DIMENSIONS, loaded: true },
                }));
            };
            img.src = item.src;
        });
    }, [items]);

    return dimensions;
}

export function getDefaultDimensions(): MediaDimensions {
    return DEFAULT_IMAGE_DIMENSIONS;
}
