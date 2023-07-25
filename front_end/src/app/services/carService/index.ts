import { ICar } from "../../../typings/car";
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

/* 
export const fetchProductWelab = createAsyncThunk(
  'products/welab/info',
  async (productCode: string, { dispatch }) => {
    const response = callGraphyql<ProductByResellerAndSkuResponse>({
      url: store
        .getState()
        .product.globalConfigParam.get('frontend.welab.graphql.url'),
      query: GET_PRODUCT,
      variables: {
        resellerName: store
          .getState()
          .product.globalConfigParam.get(
            'frontend.welab.graphql.merchantidentifier',
          ),
        sku: productCode,
      },
      // fea-2030 && fea-2012 don't display error
      // setError: (error: AxiosError) => dispatch(setError(error)),
    });

    return response;
  },
);
*/
