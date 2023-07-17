import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

interface IListProp {
  linkList: {
    title: string;
    url: string;
  }[];
}

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `};

  & > a {
    ${tw`
      text-sm
    text-white
      transition-all
      hover:text-gray-200
    `};
  }
`;

export default function List(props: IListProp) {
  const { linkList } = props;
  return (
    <LinksList>
      {linkList.map((item) => (
        <ListItem>
          <a href={item.url}>{item.title}</a>
        </ListItem>
      ))}
    </LinksList>
  );
}
