import "../../css/presentation-block/presentation-block-1.css";
import TextBlockInlineMD from "../text-com/text-block-inline-md";
import ImageBlock from "./image-block";

function AbilityBlock(props) {
    const { image, info} = props.value;
    const {index} = props;
    return (<div className="presentation-block-1">
        <h1>{index}</h1>
        {
            info.length && info.map((item, index) => <div>
                <TextBlockInlineMD value={item} /></div>)
        }
        <ImageBlock listImage={image}></ImageBlock>
        <hr></hr>
    </div>);
}

export default AbilityBlock;