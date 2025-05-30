// components/OptimizedImage.tsx
import React from 'react';

type OptimizedImageProps = {
  src: string;
  alt: string;
  width?: number; // Used when fill is false
  height?: number; // Used when fill is false
  quality?: number;
  className?: string;
  fill?: boolean;
  objectFit?: React.CSSProperties['objectFit'];
  objectPosition?: React.CSSProperties['objectPosition'];
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  priority?: boolean;
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  quality,
  className,
  fill = false,
  objectFit = 'cover',
  objectPosition = 'center',
  style,
  onClick,
  priority,
}) => {
  // Prepare the priority attribute (cast so TypeScript accepts our custom attribute)
  const priorityProps = priority
    ? ({ fetchPriority: 'high' } as Partial<React.ImgHTMLAttributes<HTMLImageElement>>)
    : {};

  // Determine if the image is remote (starts with http:// or https://)
  const isRemote = /^https?:\/\//.test(src);
  // Determine if the image is an SVG
  const isSvg = src?.toLowerCase()?.endsWith('.svg');

  // If the image is local (or an SVG), use the provided src directly.
  const finalSrc = !isRemote || isSvg
    ? src
    : (() => {
        // For remote non-SVG images, build query parameters for the optimization API.
        const params = new URLSearchParams({
          url: src,
          ...(width ? { width: width.toString() } : {}),
          ...(height ? { height: height.toString() } : {}),
          ...(quality ? { quality: quality.toString() } : {}),
        });
        return `/api/optimize?${params.toString()}`;
      })();

  if (fill) {
    // In fill mode, return a container that is absolutely positioned.
    // This mimics Next.js's <Image fill /> behavior.
    return (
      <div
        className={className}
        style={{ position: 'absolute', inset: 0, ...style }}
      >
        <img
          src={finalSrc}
          alt={alt}
          onClick={onClick}
          decoding='async'
          loading={priority ? 'eager' : 'lazy'}
          style={{
            width: '100%',
            height: '100%',
            objectFit,
            objectPosition,
          }}
          
          {...priorityProps}
        />
      </div>
    );
  }

  // In regular mode, simply render the image element with provided dimensions.
  return (
    <img
      src={finalSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      decoding='async'
      style={style}
      onClick={onClick}
      loading={priority ? 'eager' : 'lazy'}
      {...priorityProps}
    />
  );
};

export default OptimizedImage;
