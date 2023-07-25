import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

export interface IStepCardProp {
  icon: IconDefinition;
  description: string;
  title: string;
}

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:w-96
    items-center
    transition-colors
    hover:text-red-500
    m-3
  `};
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6
  `};
`;

const StepTitle = styled.h4`
  ${tw`
    text-black
    text-lg
    font-semibold
    mt-4
  `};
`;

const StepDescription = styled.p`
  ${tw`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
  `};
`;

const StepIcon = styled.span`
  ${tw`
    text-red-500
    text-3xl
  `};
`;

export default function StepCard(props: IStepCardProp) {
  const { icon, description, title } = props;
  return (
    <StepContainer>
      <Step>
        <StepIcon>
          <FontAwesomeIcon icon={icon} />
        </StepIcon>
      </Step>
      <StepTitle>{title}</StepTitle>
      <StepDescription>{description}</StepDescription>
    </StepContainer>
  );
}
