import { useState } from "react";

import "../../css/presentation-block/image-slide.css";
import hinh1 from "../../img/hufi/1.png";
import hinh2 from "../../img/hufi/2.jpg";
import hinh3 from "../../img/hufi/3.jpg";
import hinh4 from "../../img/hufi/4.jpg";

function prevBtnClick(image,listImage){
    let index = listImage.indexOf(image);
    if(index === 0){
        return listImage[listImage.length-1];
    }
    return listImage[index-1];
}

function nextBtnClick(image,listImage){
    let index = listImage.indexOf(image);
    if(index === listImage.length){
        return listImage[0];
    }
    return listImage[index+1];
}

function ImageSlideCom() {
    const listImage = [hinh1,hinh2,hinh3,hinh4]
    const [image,changeImage] = useState(hinh1);
    return (<div class="image-slide">
        <div className="btn" onClick={()=>changeImage(prevBtnClick(image,listImage))}><i class="fas fa-chevron-left"></i></div>
        <div className="slide-show">
            <img className="image-in-slide" src={image} alt=""/>
        </div>
        <div className="btn" onClick={()=>changeImage(nextBtnClick(image,listImage))}><i class="fas fa-chevron-right"></i></div>
    </div>);
}

export default ImageSlideCom;