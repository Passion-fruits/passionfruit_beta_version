import { fileData } from "../../lib/data/data";
import Footer from "../footer";
import Profile from "./profile";
import * as s from "./styles";

export default function PlayAudio() {
  const { profileImg, coverImg, title, name } = fileData;
  return (
    <>
      <s.BackgroundWrapper imgUrl={profileImg} />
      <s.ContainerWrapper>
        <s.InformationSong>
          <s.CoverContainer imgUrl={coverImg}>
            <s.Title>{title}</s.Title>
            <s.RapperName>{name}</s.RapperName>
          </s.CoverContainer>
          <Profile name={name} profileImg={profileImg} />
        </s.InformationSong>
        <Footer/>
      </s.ContainerWrapper>
    </>
  );
}
