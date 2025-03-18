import React from "react";

const LazyImage = ({ src, alt, className, style, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy" // Lazy loading natif du navigateur
      {...props}
    />
  );
};

export default LazyImage;
