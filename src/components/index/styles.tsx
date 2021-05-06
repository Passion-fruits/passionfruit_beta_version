import styled from "styled-components";
import { WrapperProps } from "../../lib/interface";

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: ${(props: WrapperProps) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -1;
  filter: blur(0.5rem);
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
`;
