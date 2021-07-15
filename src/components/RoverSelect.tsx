import React from "react";
import Select from "react-select/async";
import API from "../Api";

const p = API.getRoverNamesList();

const RoverSelect = ({ callOnChange }: { callOnChange?: any }) => {
  const roverNameFetch = (roverName: string) =>
    p.then((res) =>
      res
        .filter((rover) =>
          rover.toLocaleLowerCase().includes(roverName.toLocaleLowerCase())
        )
        .map((rover) => {
          return { value: rover, label: rover };
        })
    );

  return (
    <Select
      cacheOptions
      defaultOptions
      loadOptions={roverNameFetch}
      onChange={callOnChange}
    />
  );
};

export default RoverSelect;
