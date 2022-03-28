import "../../css/text-com/link-com.css";

function TextBlockMD(props) {
    return (<div className="link-icon-md">
        <span>
            <div className="text-name size-sm font-arial-narrow"
                style={{ marginLeft: "10px" }}
            >
                <p><i className={props.value.icon} />&nbsp;{props.value.name}</p>
            </div>
            <div className="text-content size-sm font-arial-narrow"
                style={{ marginLeft: "50px" }}
                    >
                    <p>{props.value.content}</p>
            </div>
        </span >
    </div >);
}

export default TextBlockMD;