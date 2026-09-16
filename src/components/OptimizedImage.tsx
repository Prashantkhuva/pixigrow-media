"use client";

import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "blurDataURL"> {
  /** Low-quality placeholder (blur) data URL */
  blurPlaceholder?: string;
}

export default function OptimizedImage({
  blurPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      alt={alt}
      placeholder="blur"
      blurDataURL={blurPlaceholder}
      {...props}
    />
  );
}
