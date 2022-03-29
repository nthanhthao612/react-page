import "../../css/right-area/education-com.css";
import PresentationBlock1 from "../presentation-block/presentation-block-1";

const Hinh1 = "https://i.imgur.com/Qt2UIWW.png";
const Hinh2 = "https://i.imgur.com/7unjRJQ.jpg";
const Hinh3 = "https://i.imgur.com/9ieUL1t.jpg";

const listInfo = [{
    info: [
        {
            title: "Thời gian",
            content: "8/2018 - Nay"
        },
        {
            title: "Trường",
            content: "Đại học Công nghiệp thực phẩm TP. Hồ Chí Minh"
        },
        {
            title: "Ngành học",
            content: "An toàn thông tin"
        },
        {
            title: "Tiến độ",
            content: "Hiện đang là sinh viên năm 4, đã làm xong khoá luận tốt nghiệp"
        }
    ],
    image: [Hinh1, Hinh2, Hinh3, Hinh1]
}]
    
function EducationCom(){
    return(<div className="eduction-com">
        {
            listInfo.length && listInfo.map((item,index)=><PresentationBlock1 value={item} index={index+1}/>)
        }
    </div>);
}

export default EducationCom;