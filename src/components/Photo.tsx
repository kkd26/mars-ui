import React from "react";
import "../styles/Photo.scss";

export interface PhotoI {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
}


const Photo = ({ img_src, earth_date, sol, id }: PhotoI) => {
  return <img className="photo" src={img_src} alt={"id-" + id} />;
};

export default Photo;
