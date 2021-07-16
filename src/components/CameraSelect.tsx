import React from "react";
import Select from "react-select/async";
import API from "../Api";
import "../styles/Select.scss"

const CameraSelect = ({
  rover,
  callOnChange,
}: {
  rover: string;
  callOnChange?: any;
}) => {
  const p = API.getRoverCameras(rover);

  const cameraFetch = (cameraName: string) =>
    p.then((res) =>
      res
        .filter((camera) =>
          camera.toLocaleLowerCase().includes(cameraName.toLocaleLowerCase())
        )
        .map((camera) => {
          return { value: camera, label: camera };
        })
    );

  return (
    <Select className="cameraSelect select"
      defaultOptions
      loadOptions={cameraFetch}
      onChange={callOnChange}
    />
  );
};

export default CameraSelect;
