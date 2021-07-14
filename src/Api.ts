import axios from "axios";
import getQueryParams from "./utils/queryParams";

const API_URL = `http://localhost:8000`;

export default class API {
  static async getAllRoversData() {
    return await axios.get(`${API_URL}/rovers`);
  }

  static async getRoverNamesList() {
    return await axios.get(`${API_URL}/rovers/names`);
  }

  static async getRoverData(roverName: string) {
    return await axios.get(`${API_URL}/rovers/${roverName}`);
  }

  static async getRoverPhotos(
    roverName: string,
    camera?: string,
    sol?: number
  ) {
    return await axios.get(
      `${API_URL}/rovers/${roverName}/photos?${getQueryParams({ camera, sol })}`
    );
  }
}
