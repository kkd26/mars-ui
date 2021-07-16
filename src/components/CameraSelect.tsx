import React from "react";
import Select from "react-select";
import "../styles/Select.scss";

const CameraSelect = ({
  callOnChange,
  cameraPromise,
  selectedCamera,
}: {
  callOnChange?: any;
  cameraPromise: {name: string, full_name:string}[];
  selectedCamera: { value: string; label: string }[];
}) => {
  const cameraFetch = cameraPromise.map(({name, full_name}) => {
    return { value: name, label: full_name };
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
