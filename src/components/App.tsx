import React, { useEffect, useState } from "react";
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
  };

  const [cameraPromise, setCameraPromise] = useState<{name: string, full_name:string}[]>([]);

  useEffect(() => {
    if (selectedRover) {
      API.getRoverCameras(selectedRover).then((c) => setCameraPromise(c));
      console.log("new promise");
      setSelectedCamera([]);
    }
  }, [selectedRover]);

  const [selectedCameraList, setSelectedCamera] = useState<
    { value: string; label: string }[]
  >([]);

  const handleCameraSelect = (camera: { label: string; value: string }[]) => {
    setSelectedCamera(camera);
  };

  useEffect(() => {
    getPhotos();
  }, [selectedCameraList]);

  const [photos, setPhotos] = useState<PhotoI[]>([]);

  useEffect(()=>{

  }, [photos])

  const getPhotos = () => {
    console.log("fetch photos");
    setPhotos([]);
    selectedCameraList.forEach((selectedCamera) => {
      API.getRoverPhotos(selectedRover, selectedCamera.value).then((newPhotos) => {
        setPhotos(photos => [...photos, ...newPhotos]);
      });
    });
  };
  return (
    <>
      <h1 id="title">Mars App</h1>
      <RoverSelect callOnChange={handleRoverSelect} />
      {selectedRover && (
        <CameraSelect
          callOnChange={handleCameraSelect}
          cameraPromise={cameraPromise}
          selectedCamera={selectedCameraList}
        />
      )}
      <Gallery photos={photos} />
    </>
  );
};

export default App;
