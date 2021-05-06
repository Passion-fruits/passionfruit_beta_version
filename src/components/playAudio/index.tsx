import { fileData } from "../../lib/data/data";
import { Data } from "../../lib/interface";
import * as s from "./styles";

export default function PlayAudio() {
  const data: Data = fileData;
  const { profileImg, coverImg, title, name } = data;
  return (
    <>
      <s.BackgroundWrapper imgUrl={profileImg} />
      <s.ContainerWrapper>
        <s.InformationSong>
          <s.CoverContainer imgUrl={coverImg}>
            <s.Title>{title}</s.Title>
            <s.RapperName>{name}</s.RapperName>
          </s.CoverContainer>
        </s.InformationSong>
      </s.ContainerWrapper>
    </>
  );
}
