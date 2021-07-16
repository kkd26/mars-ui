import React from "react";
import Select from "react-select";
import "../styles/Select.scss";

const CameraSelect = ({
  callOnChange,
  cameraPromise,
  selectedCamera,
}: {
  callOnChange?: any;
  cameraPromise: string[];
  selectedCamera: { value: string; label: string }[];
}) => {
  const cameraFetch = cameraPromise.map((camera) => {
    return { value: camera, label: camera };
  });

  return (
    <Select
      className="cameraSelect select"
      isMulti
      defaultOptions
      cacheOptions
      value={selectedCamera}
      options={cameraFetch}
      onChange={callOnChange}
    />
  );
};

export default CameraSelect;
