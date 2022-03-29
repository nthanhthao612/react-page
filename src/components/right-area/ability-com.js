import AbilityBlock from "../presentation-block/ability-block";

const listInfo = [
    {
        info: [
            {
                title: "quản trị hệ thống mạng",
            },
            {
                title: "Quản trị hệ thống ",
                content: "Linux"
            },
            {
                title: "Quản trị hệ thống mạng",
                content: "Cisco(CCNA)"
            }
        ],
        image: [
            "https://i.imgur.com/d9pu71V.png",
            "https://i.imgur.com/gMJQhhm.jpg"
        ]
    },
    {
        info: [
            {
                title: "Môi trường",
                content: "Web (front-end)"
            },
            {
                title: "Ngôn ngữ",
                content: "Html, Css, Java Script"
            },
            {
                title: "Framework/library được sử dụng",
                content: "ReactJS, Bootstrap"
            }
        ],
        image: ["https://i.imgur.com/mjPItN0.png",
            "https://i.imgur.com/957eqBv.png",
            "https://i.imgur.com/2eyct8W.png",
            "https://i.imgur.com/KCLVzyN.png",
            "https://i.imgur.com/Fx2Y28I.png"
        ]
    }, {
        info: [
            {
                title: "Môi trường",
                content: "Web (back-end)"
            },
            {
                title: "Ngôn ngữ",
                content: "Java Script"
            },
            {
                title: "Framework/library được sử dụng",
                content: "Môi trường NodeJS,ExpressJS"
            }
        ],
        image: ["https://i.imgur.com/wmhiRnZ.png",
            "https://i.imgur.com/PUznBdo.jpg",

        ],
    }, {
        info: [
            {
                title: "Môi trường",
                content: "Mobile"
            },
            {
                title: "Ngôn ngữ",
                content: "Java Script"
            },
            {
                title: "Framework/library được sử dụng",
                content: "React Native"
            }
        ],
        image: ["https://i.imgur.com/4xyFLaP.png",
        ],
    },
    {
        info: [
            {
                title: "Ngôn ngữ lập trình khác",
            },
            {
                title: "C++",
                content: "Có kiến thức cơ bản và nâng cao"
            },
            {
                title: "C#",
                content: "Có kiến thức cơ bản về lập trình hướng đối tượng và WinForm"
            }
        ],
        image: [
            "https://i.imgur.com/gPESwUy.png",
            "https://i.imgur.com/tSHLq37.png"
        ]
    }
];

function AbilityCom() {
    return (<div className="products-com">
        {
            listInfo.length && listInfo.map((item, index) => <AbilityBlock value={item} index={index + 1} />)
        }
    </div>);
}

export default AbilityCom;