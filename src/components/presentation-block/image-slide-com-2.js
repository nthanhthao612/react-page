import "../../css/presentation-block/image-slide-2.css";

function ImageSlideCom2(props) {
    const {listImage} = props;
    return (
        <div id="slideshow">
            <div class="slide-wrapper">
                {
                    listImage.lenght!==0 && listImage.map((item,index)=><div class="slide" ><img alt={index}  src={item}/></div>)
                }
            </div>
        </div>

    );
}

export default ImageSlideCom2;

