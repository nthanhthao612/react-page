import "../../css/presentation-block/image-block.css";

function ImageBlock(props) {
    const { listImage } = props;
    return (
        <div className="image-block">
            {
                listImage.lenght !== 0 && listImage.map((item, index) =>
                    <div class="" ><img alt={index} className="single-image" src={item} /></div>)
            }
        </div>
    );
}

export default ImageBlock;