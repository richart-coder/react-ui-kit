import React, { memo, useState } from "react";
import placeholders from "../../data/placeholders.json";
import styles from "./style.module.css";
type Placeholder = "empty" | "blur";
type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  placeholder?: Placeholder;
  loading?: "eager" | "lazy";
};

const Image = ({
  src,
  alt,
  fill = false,
  width,
  height,
  placeholder = "empty",
  loading = "eager",
  ...props
}: ImageProps) => {
  if (!fill && (!width || !height)) {
    throw new Error("必須提供 fill 或 width+height 其中一種");
  }
  if (fill && (width || height)) {
    throw new Error("不能同時使用 fill 和 width+height");
  }

  const [isLoaded, setIsLoaded] = useState(false);
  const [placeholderURL] = useState<string | null>(() => {
    if (placeholder === "blur" && placeholders[src]) {
      return placeholders[src];
    }
    return null;
  });

  return (
    <div
      className={`${styles.imageContainer} ${isLoaded ? styles.loaded : ""} ${
        fill ? styles.fill : ""
      }`}
      style={{
        width: fill ? undefined : width,
        height: fill ? undefined : height,
        backgroundImage:
          !isLoaded && placeholderURL ? `url(${placeholderURL})` : "none",
      }}
    >
      <img
        className={styles.image}
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};

Image.displayName = "Image";
export default memo(Image);
