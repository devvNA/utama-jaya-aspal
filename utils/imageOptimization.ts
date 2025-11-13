export interface OptimizedImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  title,
  className = '',
  loading = 'lazy',
  width,
  height,
}) => {
  const aspectRatio = width && height ? `${width / height}` : undefined;

  return (
    <img
      src={src}
      alt={alt}
      title={title || alt}
      className={`${className} transition-opacity duration-300`}
      loading={loading}
      width={width}
      height={height}
      style={aspectRatio ? { aspectRatio } : undefined}
      decoding="async"
    />
  );
};

export const getResponsiveImageSrcSet = (baseSrc: string): string => {
  const baseWithoutExt = baseSrc.substring(0, baseSrc.lastIndexOf('.'));
  const ext = baseSrc.substring(baseSrc.lastIndexOf('.'));
  return `${baseWithoutExt}-small${ext} 600w, ${baseWithoutExt}-medium${ext} 1024w, ${baseWithoutExt}${ext} 1920w`;
};

export const getImageLQIP = (src: string): string => {
  const baseWithoutExt = src.substring(0, src.lastIndexOf('.'));
  return `${baseWithoutExt}-lqip.jpg`;
};
