import React, { useState } from "react";
import API from "../Api";
import "../styles/App.scss";
import CameraSelect from "./CameraSelect";
import Gallery from "./Gallery";
import RoverSelect from "./RoverSelect";

const App = () => {
  const [selectedRover, setSelectedRover] = useState("");

  const handleRoverSelect = (rover: { label: string; value: string }) => {
    setSelectedRover(rover.value);
  };

  const [selectedCamera, setSelectedCamera] = useState<string[]>([]);

  const handleCameraSelect = (camera: { label: string; value: string }[]) => {
    const cameras = camera.map((c) => c.value);
    setSelectedCamera(cameras);
    getPhotos();
  };

  const [photos, setPhotos] = useState([]);

  const getPhotos = () => {
    API.getRoverPhotos(selectedRover, selectedCamera[0]).then((photos) => {
      setPhotos(photos);
    });
  };

  // useEffect(() => {
  //   return;
  // }, [selectedRover]);

  return (
    <>
      <RoverSelect callOnChange={handleRoverSelect} />
      {selectedRover && (
        <CameraSelect callOnChange={handleCameraSelect} rover={selectedRover} />
      )}
      <Gallery photos={photos} />
    </>
  );
};

export default App;
