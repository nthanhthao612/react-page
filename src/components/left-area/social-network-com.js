import LinkIconLG from "../text-com/link-icon-lg";
import "../../css/left-area/social-network-com.css";

const SocialNetwork = {
    listSocialNetwork:[
        { title: "github", icon: "fa-brands fa-github", link: "https://github.com/nthanhthao612", color: "black" },
        { title: "facebook", icon: "fa-brands fa-facebook", link: "https://www.facebook.com/Killer.use/", color: "blue" },
        { title: "instagram", icon: "fa-brands fa-instagram", link: "https://www.instagram.com/_11du.crist/", color: "pink" }
    ]   
}

function SocialNetworkCom() {
    const {listSocialNetwork} = SocialNetwork;
    return (<div className="social-network-com">
        {
            listSocialNetwork.length && listSocialNetwork.map((item,index)=><LinkIconLG value={item}/>)
        }
    </div>);
}
export default SocialNetworkCom;