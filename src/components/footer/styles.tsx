import styled from "styled-components";
import { MAX_WIDTH } from "../../lib/style";

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: blue;
  position: absolute;
  bottom: 0;
  background-color: black;
  @media screen and (max-width:${MAX_WIDTH}){
      height:50px;
  }
`;
