import { Data } from '../../lib/interface'
import * as s from './styles'

export default function Profile({name,profileImg} : Data){
    return(
        <s.ProfileContainer>
        <s.ProfileName>{name}</s.ProfileName>
        <s.ProfileImg src={profileImg}/>
    </s.ProfileContainer>
    )
}