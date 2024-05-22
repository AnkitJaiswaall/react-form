import React from "react";
import ReactSelect from "react-select";
import style from "./Region.module.css";

const Region = ({
  selectedCountries,
  setSelectedCountries,
  countryOptions,
}) => {
  const handleCountryChange = (selectedOptions) => {
    setSelectedCountries(selectedOptions || []);
  };

  return (
    <div>
      <div className={style.container}>
        <label className={style.heading}>REGION</label>
        <br />
        <div className={style.country}>
          <div>Country</div>

          <ReactSelect
            isMulti
            name="countries"
            options={countryOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            value={selectedCountries}
            onChange={handleCountryChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Region;
