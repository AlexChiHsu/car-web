import { apolloClient } from "../../graphql";
import { GET_ALL_CARS } from "./queries";

class CarService {
  public async getCars() {
    const response = await apolloClient
      .query({ query: GET_ALL_CARS })
      .catch((err) => {
        throw err;
      });

    if (response && response.data) {
      return response.data;
    }

    return [];
  }
}

export default new CarService();
