import "../../css/presentation-block/presentation-block-1.css";
import ImageSlideCom2 from "./image-slide-com-2";
import TextBlockInlineMD from "../text-com/text-block-inline-md";

function PresentationBlock1(props) {
    const { image, info} = props.value;
    const {index} = props;
    return (<div className="presentation-block-1">
        <h1>{index}</h1>
        {
            info.length && info.map((item, index) => <div>
                <TextBlockInlineMD value={item} /></div>)
        }
        <ImageSlideCom2 listImage={image}></ImageSlideCom2>
        <hr></hr>
    </div>);
}

export default PresentationBlock1;