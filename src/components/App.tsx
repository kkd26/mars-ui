import React, { useEffect, useState } from "react";
import API from "../Api";
import "../styles/App.scss";
import CameraSelect from "./CameraSelect";
import Gallery from "./Gallery";
import RoverSelect from "./RoverSelect";
import { PhotoProp } from "./Photo";

const App = () => {
  const [selectedRover, setSelectedRover] = useState("");

  const handleRoverSelect = (rover: { label: string; value: string }) => {
    setSelectedRover(rover.value);
  };

  const [cameraPromise, setCameraPromise] = useState<string[]>([]);

  useEffect(() => {
    if (selectedRover) {
      API.getRoverCameras(selectedRover).then((c) => setCameraPromise(c));
      console.log("new promise");
      setSelectedCamera([]);
    }
  }, [selectedRover]);

  const [selectedCamera, setSelectedCamera] = useState<
    { value: string; label: string }[]
  >([]);

  const handleCameraSelect = (camera: { label: string; value: string }[]) => {
    setSelectedCamera(camera);
  };

  useEffect(() => {
    getPhotos();
  }, [selectedCamera]);

  const [photos, setPhotos] = useState<PhotoProp[]>([]);

  const getPhotos = () => {
    console.log("fetch photos");
    setPhotos([]);
    selectedCamera.forEach((camera) => {
      API.getRoverPhotos(selectedRover, camera.value).then((newPhotos) => {
        setPhotos([...photos, ...newPhotos]);
      });
    });
  };

  return (
    <>
      <RoverSelect callOnChange={handleRoverSelect} />
      {selectedRover && (
        <CameraSelect
          callOnChange={handleCameraSelect}
          cameraPromise={cameraPromise}
          selectedCamera={selectedCamera}
        />
      )}
      <Gallery photos={photos} />
    </>
  );
};

export default App;
