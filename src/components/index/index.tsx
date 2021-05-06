import { fileData } from "../../lib/data/data";
import Footer from "../footer";
import PlayAudio from "../playAudio";
import * as s from "./styles";

export default function Index() {
  const { profileImg } = fileData;
  return (
    <>
      <s.BackgroundWrapper imgUrl={profileImg} />
      <s.ContainerWrapper>
        <PlayAudio fileData={fileData} />
        <Footer/>
      </s.ContainerWrapper>
    </>
  );
}
