import React from "react";
import CarLogoImg from "../../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";
import { styled, css } from "styled-components";
import tw from "twin.macro";

interface ILogoProp {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContaineer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `}

  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`}
  img {
    width: auto;
    height: 100%;
  }
`;

export default function Logo(props: ILogoProp) {
  const { color, bgColor } = props;
  return (
    <LogoContaineer>
      <Image>
        <img src={bgColor === "dark" ? CarLogoDarkImg : CarLogoImg} />
      </Image>
      <LogoText color={color || "dark"}>Yourcar</LogoText>
    </LogoContaineer>
  );
}
