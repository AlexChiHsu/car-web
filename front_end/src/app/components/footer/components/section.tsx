import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import List from "./list";
import Horizontal from "./horizontal";

interface ISectionProp {
  title: string;
  linkList?: {
    title: string;
    url: string;
  }[];
  smallText?: string;
  icon?: IconDefinition;
}

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`;

export default function Section(props: ISectionProp) {
  const { title, linkList, icon, smallText } = props;
  return (
    <SectionContainer>
      <HeaderTitle>{title}</HeaderTitle>
      {linkList && <List linkList={linkList} />}

      {smallText !== undefined && icon !== undefined && (
        <Horizontal icon={icon} smallText={smallText} />
      )}
    </SectionContainer>
  );
}
