import AvatarArea from "./avatar-area-com";
import "../../css/left-area/left-area.css";
import SocialNetworkCom from "./social-network-com";

function LeftArea() {
    return (<div className="left-area">
        <AvatarArea />
        <hr style={{width:"50%",marginTop:"20px"}}></hr>
        <SocialNetworkCom/>
    </div>);
}

export default LeftArea;