// import Avatar from "../../img/avatar.png";
import "../../css/left-area/avatar-area.css";
import NameCom from "./name-com";

const Avatar = "https://i.imgur.com/9zYzp4s.png"

function AvatarArea(){
    return(<div className="avatar-area">
        <img 
        className="avatar-image"
        src={Avatar}
        alt=""/>
        <NameCom/>
    </div>);
}

export default AvatarArea;