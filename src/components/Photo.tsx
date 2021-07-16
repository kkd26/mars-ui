import React, { Component, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "../styles/Photo.scss";

 // This only needs to be imported once in your app

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
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(isOpen => !isOpen);
  
  return <>
    <img className="photo" src={img_src} alt={"id-" + id} onClick={() => setOpen(true)}/>
    {isOpen && (
          <Lightbox
            mainSrc={img_src}
            imageTitle={`ID-${id}, Sol ${sol}, Earth date ${earth_date}`}
            onCloseRequest={toggleOpen}
          />)}
  </>;
};

export default Photo;
