import "../../css/text-com/link-com.css";

function LinkIconMD(props) {
    return (<div className="link-icon-md">
        <a href={props.value.link} className="link-text">
            <p className="link-label font-courier size-md mouse-click"
                style={{color:props.value.color}}>
                <i className={props.value.icon} />
                &nbsp;{props.value.title}
            </p>
        </a>
    </div>);
}

export default LinkIconMD;