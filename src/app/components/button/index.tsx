import React from "react";
import { css, styled } from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
    w-36
  `};
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-red-500
  `};
  &:hover {
    background-color: transparent;
    border-color: rgb(239, 68, 68, 1);
    color: rgb(239, 68, 68, 1);
  }
`;

const FilledButton = styled(BaseButton)`
  &:hover {
    background-color: rgb(239, 68, 68, 1);
    border-color: transparent;
    color: white;
  }
  ${tw`
    border-red-500
    text-red-500
    bg-transparent
  `};
`;

export default function Button(props: IButtonProps) {
  const { theme, text, className } = props;

  if (theme === "filled") {
    return <FilledButton className={className}>{text}</FilledButton>;
  } else {
    return <OutlinedButton className={className}>{text}</OutlinedButton>;
  }
}
