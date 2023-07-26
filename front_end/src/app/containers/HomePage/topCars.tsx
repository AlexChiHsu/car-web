import { useEffect, useState } from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Car from "../../components/car";
import { ICar } from "../../../typings/car";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { useQuery } from "@apollo/client";
import { GET_ALL_CARS } from "../../services/carService/queries";
import { createSelector } from "reselect";
import { setTopCars } from "./homeSlice";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopCars } from "./selectors";
import MoonLoader from "react-spinners/MoonLoader";
import { async } from "q";
import carService from "../../services/carService";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: ICar[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));

export default function TopCars() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const { topCars } = useSelector(stateSelector);
  const { setTopCars } = actionDispatch(useDispatch());

  const fetchCars = async () => {
    setLoading(true);
    const cars = await carService.getCars().catch((err) => {
      console.log("Error: ", err);
    });
    await wait(5000);

    if (cars) setTopCars(cars);
    setLoading(false);
  };

  const isEmptyTopCars = !topCars || topCars.length === 0;
  const cars =
    (!isEmptyTopCars && topCars.map((item) => <Car {...item} />)) || [];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  useEffect(() => {
    fetchCars();
  }, []);
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={20}></MoonLoader>
        </LoadingContainer>
      )}
      {isEmptyTopCars && !isLoading && <EmptyCars>No Cars To Show!</EmptyCars>}
      {!isEmptyTopCars && !isLoading && (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots
            value={current}
            onChange={setCurrent}
            number={numberOfDots}
          ></Dots>
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
}
