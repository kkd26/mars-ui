import styled from "styled-components";

export const ColorOnCount = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  transition: all 0.1s;
`;
