import Avatar from "../../img/avatar.png";
import "../../css/left-area/avatar-area.css";


function AvatarArea(){
    return(<div className="avatar-area">
        <img 
        className="avatar-image"
        src={Avatar}
        alt=""/>
    </div>);
}

export default AvatarArea;