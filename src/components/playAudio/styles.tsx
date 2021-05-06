import styled from "styled-components";
import { WrapperProps } from "../../lib/interface";

const width = "500px";

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

export const InformationSong = styled.div`
  width: ${width};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CoverContainer = styled.div`
  width: ${width};
  height: ${width};
  background-image: ${(props: WrapperProps) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WordContainer = styled.div`
  background-color: black;
  color: white;
  letter-spacing: 2px;
`;

export const Title = styled(WordContainer)`
  text-align: center;
  font-weight: bold;
  padding: 10px 20px;
`;

export const RapperName = styled(WordContainer)`
  font-size: 14px;
  margin-top: 20px;
  padding: 5px 10px;
`;
