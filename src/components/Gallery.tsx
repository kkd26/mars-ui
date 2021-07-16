import React, { FunctionComponent } from "react";
import Photo, { PhotoI } from "./Photo";
import "../styles/Gallery.scss";

interface GalleryProp {
  photos: PhotoI[];
}

const Gallery = ({ photos }: GalleryProp) => {



  return (
    <div id="gallery">
      {photos.slice(0, 10).map((photo, i) => (
        <Photo key={i} {...photo} />
      ))}
    </div>
  );
};

export default Gallery;
