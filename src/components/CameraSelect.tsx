import React from "react";
import Select from "react-select";

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
      isMulti
      cacheOptions
      defaultOptions
      value={selectedCamera}
      options={cameraFetch}
      onChange={callOnChange}
    />
  );
};

export default CameraSelect;
