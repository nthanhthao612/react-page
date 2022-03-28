import LinkIconLG from "../text-com/link-icon-lg";
import "../../css/left-area/social-network-com.css";

function SocialNetworkCom() {
    return (<div className="social-network-com">
        <LinkIconLG value={{ title: "github", icon: "fa-brands fa-github", link: "https://github.com", color: "black" }} />
        <LinkIconLG value={{ title: "facebook", icon: "fa-brands fa-facebook", link: "https://facebook.com", color: "blue" }} />
        <LinkIconLG value={{ title: "instagram", icon: "fa-brands fa-instagram", link: "https://instagram.com", color: "pink" }} />
    </div>);
}
export default SocialNetworkCom;