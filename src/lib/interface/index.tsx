export interface Data{
    title? : string;
    name : string;
    profileImg : string;
    coverImg? : string;
}

export interface WrapperProps{
    imgUrl : string | undefined;
}

export interface PlayAudioParam{
    fileData : Data;
}