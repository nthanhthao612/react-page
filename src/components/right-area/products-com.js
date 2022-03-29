import PresentationBlock1 from "../presentation-block/presentation-block-1";

const listInfo = [{
    info: [
        {
            title: "Mục đích",
            content: "Khoá luận"
        },
        {
            title: "Đề tài",
            content: "Xây dựng hệ thống quản lí sức khoẻ cá nhân(WEB)"
        },
        {
            title: "Ngôn ngữ",
            content: "Java Script"
        },
        {
            title: "Framework/library được sử dụng",
            content: "HTML,CSS, ExpressJS, Bootstrap"
        }
    ],
    image: ["https://i.imgur.com/EPZUPgo.png",
        "https://i.imgur.com/HiKwr1h.png",
        "https://i.imgur.com/vZOHG2h.png",
        "https://i.imgur.com/IamsXrJ.png"
    ]
}, {
    info: [
        {
            title: "Mục đích",
            content: "Khoá luận"
        },
        {
            title: "Đề tài",
            content: "Xây dựng hệ thống quản lí sức khoẻ cá nhân(MOBILE)"
        },
        {
            title: "Ngôn ngữ",
            content: "Java Script"
        },
        {
            title: "Framework/library được sử dụng",
            content: "React Native,Bootstrap"
        }
    ],
    image: ["https://i.imgur.com/RKLMQH0.jpg",
        "https://i.imgur.com/j38u5V2.jpg",
        "https://i.imgur.com/sCSSKBy.jpg",
        "https://i.imgur.com/as4cNTn.jpg",
    ],
}]

function ProductsCom() {
    return (<div className="products-com">
        {
            listInfo.length && listInfo.map((item, index) => <PresentationBlock1 value={item} index={index + 1} />)
        }
    </div>);
}

export default ProductsCom;