import "../../css/presentation-block/presentation-block-1.css";
import ImageSlideCom from "./image-slide-com";

function PresentationBlock1(props){
    return (<div className="presentation-block-1">
        <span ><p className="time-text">Thời gian: 8/2018 - Nay</p></span>
        <span ><p className="place-text">Trường: Công nghiệp thực phẩm TP. Hồ Chí Minh</p></span>
        <span ><p className="major-text">Ngành học: An toàn thông tin</p></span>
        <ImageSlideCom></ImageSlideCom>
    </div>);
}

export default PresentationBlock1;