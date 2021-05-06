import { PlayAudioParam } from "../../lib/interface";
import Profile from "./profile";
import * as s from "./styles";

export default function PlayAudio({ fileData }: PlayAudioParam) {
  const { profileImg, coverImg, title, name } = fileData;
  return (
    <>
      <s.InformationSong>
        <s.CoverContainer imgUrl={coverImg}>
          <s.Title>{title}</s.Title>
          <s.RapperName>{name}</s.RapperName>
        </s.CoverContainer>
        <Profile name={name} profileImg={profileImg} />
      </s.InformationSong>
    </>
  );
}
