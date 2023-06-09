import React, { Fragment, useEffect, useState } from "react";
import "./Header.css";

import { downloadLocationDetail, useLocationDetail } from "./CustomeHook";

const Header = function (props) {
  const locationDetail = useLocationDetail();
  const { city, region, country_name } = locationDetail;
  return (
    <Fragment>
      <div className="header">{props.heading}</div>
      <h4>
        welcome user yout current Loaction is {city}-{region} on {country_name}
      </h4>
    </Fragment>
  );
};

export default Header;
