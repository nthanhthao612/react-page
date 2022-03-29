import { BrowserRouter as Router, Route } from 'react-router-dom';

import "../../css/right-area/right-area.css";
import FunctionalMenu from "./functional-menu";
import InfoCom from "./info-com";
import EducationCom from "./education-com";
import ProductsCom from "./products-com";

function RightArea() {
    return (<Router>
        <div className="right-area">
            <FunctionalMenu />
            <Route path="/react-page/info" exact component={InfoCom} />
            <Route path="/react-page/education" exact component={EducationCom} />
            <Route path="/react-page/products" exact component={ProductsCom} />
        </div>
    </Router>);
}

export default RightArea;