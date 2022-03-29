import "../../css/text-com/link-com.css";
import "../../css/text-com/text-block-inline-md.css";

function TextBlockInlineMD(props) {
    const { title, content } = props.value;
    return (<div className="text-block-inline-md">
        <div className="size-sm font-arial-narrow"
            style={{ marginLeft: "10px" }}
        >
            <p>{title}</p><p>:</p><p style={{paddingLeft:"30px"}}>{content}</p>
        </div>
    </div >);
}

export default TextBlockInlineMD;