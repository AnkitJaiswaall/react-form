import React from "react";
import style from "./Devices.module.css";
const Devices = ({ devices, handleCheckboxChange }) => {
  return (
    <div className={style.surveyDetails}>
      <div>
        <div className={style.heading}>DEVICES</div>
        <label>
          <input
            type="checkbox"
            name="mobile"
            checked={devices.mobile}
            onChange={(e) => handleCheckboxChange(e, devices.setDevices)}
          />
          Mobile
        </label>

        <label>
          <input
            type="checkbox"
            name="tablet"
            checked={devices.tablet}
            onChange={(e) => handleCheckboxChange(e, devices.setDevices)}
          />
          Tablet
        </label>

        <label>
          <input
            type="checkbox"
            name="desktop"
            checked={devices.desktop}
            onChange={(e) => handleCheckboxChange(e, devices.setDevices)}
          />
          Desktop
        </label>
      </div>
    </div>
  );
};

export default Devices;
