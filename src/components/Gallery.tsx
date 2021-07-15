import React, { FunctionComponent } from "react";
import Photo, { PhotoProp } from "./Photo";

interface GalleryProp {
  photos: PhotoProp[];
}

const Gallery = ({ photos }: GalleryProp) => {
  return (
    <div>
      {photos.slice(0, 10).map((photo, i) => (
        <Photo key={i} {...photo} />
      ))}
    </div>
  );
};

export default Gallery;
