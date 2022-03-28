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
            <Route path="/info" exact component={InfoCom} />
            <Route path="/education" exact component={EducationCom} />
            <Route path="/products" exact component={ProductsCom} />
        </div>
    </Router>);
}

export default RightArea;