
import LinkIconMD from "../text-com/link-icon-md";
import "../../css/right-area/functional-menu.css";

function FunctionalMenu(){
    return (<div className="functional-menu">
        <LinkIconMD value={{ title: "Thông tin", icon: "fa-solid fa-circle-info", link: "/react-page/#/info", color: "black" }} />
        <LinkIconMD value={{ title: "Học vấn", icon: "fa-solid fa-book-open", link: "/react-page/#/education", color: "black" }} />
        <LinkIconMD value={{ title: "Kỹ năng", icon: "fa-solid fa-wrench", link: "/react-page/#/ability", color: "black" }} />
        <LinkIconMD value={{ title: "Sản phẩm", icon: "fa-brands fa-product-hunt", link: "/react-page/#/products", color: "black" }} />
    </div>);
}

export default FunctionalMenu;