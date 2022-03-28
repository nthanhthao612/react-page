import "../../css/text-com/link-com.css";

function LinkIconLG(props) {
    return (<div className="link-icon-md">
        <a href={props.value.link} className="link-text">
            <p className="link-label font-courier size-lg"
                style={{color:props.value.color}}>
                <i className={props.value.icon} />
                &nbsp;{props.value.title}
            </p>
        </a>
    </div>);
}

export default LinkIconLG;