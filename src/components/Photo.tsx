import React from "react";

export interface PhotoProp {
  img_src: string;
  earth_date: string;
  sol: number;
  id: number;
}

const Photo = ({ img_src, earth_date, sol, id }: PhotoProp) => {
  return <img src={img_src} alt={"id-" + id} />;
};

export default Photo;
