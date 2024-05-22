import React from "react";
import style from "./FilterOptions.module.css";
const FilterOptions = ({ filterOptions, handleCheckboxChange }) => {
  return (
    <div className={style.surveyDetails}>
      <div>
        <div className={style.heading}>FILTERS</div>
        <label>
          <input
            type="checkbox"
            name="gatesurvey"
            checked={filterOptions.gatesurvey}
            onChange={(e) =>
              handleCheckboxChange(e, filterOptions.setFilterOptions)
            }
          />
          Gatesurvey
        </label>

        <label>
          <input
            type="checkbox"
            name="Fraud_detection"
            checked={filterOptions.Fraud_detection}
            onChange={(e) =>
              handleCheckboxChange(e, filterOptions.setFilterOptions)
            }
          />
          Fraud_detection
        </label>
      </div>
    </div>
  );
};

export default FilterOptions;
