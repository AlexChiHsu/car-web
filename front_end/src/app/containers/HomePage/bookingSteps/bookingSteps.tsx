import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import StepCard from "./stepCard";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
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

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `};
`;

export default function BookingSteps() {
  return (
    <Container>
      <Title>Our Working Steps</Title>
      <StepsContainer>
        <StepCard
          icon={faMapMarkedAlt}
          title="Choose Location"
          description="Find the nearest Yourcar point and book your car."
        />

        <StepCard
          icon={faCalendarAlt}
          title="Pick-Up Date"
          description="Pickup the Best Date to rent a car for you."
        />

        <StepCard
          icon={faCarSide}
          title="Book Your Car"
          description="Book your nice car with ease in one single click."
        />
      </StepsContainer>
    </Container>
  );
}
