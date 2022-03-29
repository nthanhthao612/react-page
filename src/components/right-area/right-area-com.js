import {Route } from 'react-router-dom';

import "../../css/right-area/right-area.css";
import FunctionalMenu from "./functional-menu";
import InfoCom from "./info-com";
import EducationCom from "./education-com";
import ProductsCom from "./products-com";
import AbilityCom from './ability-com';

function RightArea() {
    return (
        <div className="right-area">
            <FunctionalMenu />
            <Route path="/" exact component={InfoCom} />
            <Route path="/info" exact component={InfoCom} />
            <Route path="/education" exact component={EducationCom} />
            <Route path="/products" exact component={ProductsCom} />
            <Route path="/ability" exact component={AbilityCom} />
        </div>
    );
}

export default RightArea;