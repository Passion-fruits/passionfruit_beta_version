import styled from "styled-components";
import { WrapperProps } from "../../lib/interface";
import { MAIN_COLOR, MAX_WIDTH } from "../../lib/style";

export const InformationSong = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CoverContainer = styled.div`
  width: 500px;
  height: 500px;
  background-image: ${(props: WrapperProps) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 25%;
  @media screen and (max-width: ${MAX_WIDTH}) {
    width: 300px;
    height: 300px;
  }
`;

const WordContainer = styled.div`
  background-color: ${MAIN_COLOR};
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

export const ProfileContainer = styled.div`
  height: 50px;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 80%;
  object-fit: cover;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
  @media screen and (max-width: ${MAX_WIDTH}) {
    width: 30px;
    height: 30px;
  }
`;

export const ProfileName = styled.p`
  padding: 0 20px;
  color: whitesmoke;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 1.8vmin;
`;
