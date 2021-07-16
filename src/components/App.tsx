import React, { useState } from "react";
import API from "../Api";
import "../styles/App.scss";
import CameraSelect from "./CameraSelect";
import Gallery from "./Gallery";
import { PhotoI } from "./Photo";
import RoverSelect from "./RoverSelect";

const App = () => {
  const [selectedRover, setSelectedRover] = useState("");

  const handleRoverSelect = (rover: { label: string; value: string }) => {
    setSelectedRover(rover.value);
    setSelectedCamera("");
    getPhotos();
  };

  const [selectedCamera, setSelectedCamera] = useState("");

  const handleCameraSelect = (camera: { label: string; value: string }) => {
    const camVal = camera.value
    setSelectedCamera(camVal);
    getPhotos();
  };

  const [photos, setPhotos] = useState<PhotoI[]>([]);

  const getPhotos = () => {
    API.getRoverPhotos(selectedRover, selectedCamera).then((photos) => {
      setPhotos(photos);
    });
  };

  // useEffect(() => {
  //   return;
  // }, [selectedRover]);

  return (
    <>
      <h1 id="title">Mars App</h1>
      <RoverSelect callOnChange={handleRoverSelect} />
      {selectedRover && (
        <CameraSelect callOnChange={handleCameraSelect} rover={selectedRover} />
      )}
      <Gallery photos={photos} />
    </>
  );
};

export default App;
