import { createSelector } from "@reduxjs/toolkit";
import React, { Dispatch, useEffect, useState } from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Car from "../../components/car";
import { ICar } from "../../../typings/car";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import carService from "../../services/carService";
import { useQuery } from "@apollo/client";
import { GET_ALL_CARS } from "../../services/carService/queries";

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

// const actionDispatch = (dispatch: Dispatch) => ({
//   setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
// });

// const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
//   topCars,
// }));

const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));

export default function TopCars() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const { loading, error, data } = useQuery(GET_ALL_CARS);
  // const { topCars } = useSelector(stateSelector);
  // const { setTopCars } = actionDispatch(useDispatch());
  const testCar: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "HONDA CITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  const cars = [
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
  ];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  console.log(data, loading, error);
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>

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
    </TopCarsContainer>
  );
}