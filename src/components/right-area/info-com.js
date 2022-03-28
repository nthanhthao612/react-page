

import "../../css/right-area/info-com.css";
import TextBlockMD from "../text-com/text-block-md";

function InfoCom(){
    return(<div className="info-com">
        <TextBlockMD value={{name:"Họ và Tên: ",icon:"fa-solid fa-file-signature",content:"Nguyễn Thanh Thao"}}/>
        <TextBlockMD value={{name:"Điện thoại: ",icon:"fa-solid fa-phone",content:"0389440893"}}/> 
        <TextBlockMD value={{name:"Email: ",icon:"fa-solid fa-envelope-open-text",content:"nthanhthao612@gmail.com"}}/>  
        <TextBlockMD value={{name:"Địa chỉ: ",icon:"fa-solid fa-file-signature",content:"72 Trần Văn Ơn, phường Tân Sơn Nhì, quận Tân Phú, tp. Hồ Chí Minh"}}/> 
    </div>);
}

export default InfoCom;