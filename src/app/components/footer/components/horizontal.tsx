import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

interface IHorizontalProp {
  smallText: string;
  icon: IconDefinition;
}

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;

export default function Horizontal(props: IHorizontalProp) {
  const { smallText, icon } = props;
  return (
    <HorizontalContainer>
      <RedIcon>
        <FontAwesomeIcon icon={icon} />
      </RedIcon>
      <SmallText>{smallText}</SmallText>
    </HorizontalContainer>
  );
}
