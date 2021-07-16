import axios from "axios";
import getQueryParams from "./utils/queryParams";

const API_URL = `http://localhost:8000`;

interface RoverI {
  name: string;
  max_sol: number;
  cameras: { name: string }[];
}

export default class API {
  static async getAllRoversData() {
    return await axios
      .get<RoverI[]>(`${API_URL}/rovers`)
      .then((res) => res.data);
  }

  static async getRoverNamesList() {
    return await axios
      .get<string[]>(`${API_URL}/rovers/names`)
      .then((res) => res.data);
  }

  static async getRoverData(roverName: string) {
    return await axios
      .get<RoverI>(`${API_URL}/rovers/${roverName}`)
      .then((res) => res.data);
  }

  static async getRoverPhotos(
    roverName: string,
    camera?: string,
    sol?: number
  ) {
    return await axios
      .get(
        `${API_URL}/rovers/${roverName}/photos?${getQueryParams({
          camera,
          sol,
        })}`
      )
      .then((res) => res.data);
  }

  static async getRoverCameras(roverName: string): Promise<{name: string, full_name:string}[]> {
    return await axios
      .get(`${API_URL}/rovers/${roverName}/cameras`)
      .then((res) => res.data);
  }
}
