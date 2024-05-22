import React from "react";
import ReactSelect from "react-select";
import style from "./Specifications.module.css";

const Specifications = ({
  rows,
  countryOptions,
  languageOptions,
  handleInputChangeTable,
  handleDropdownChangeTable,
  handleCloneRow,
  handleRemoveRow,
}) => {
  return (
    <div className={style.container}>
      <div>
        <div className={style.heading}>
          SPECIFICATIONS <span style={{ color: "red" }}>*</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Select</th>
              <th>Country</th>
              <th>Language</th>
              <th>Target Group</th>
              <th>Actions</th>
              <th>CPI</th>
              <th>LOI</th>
              <th>IR</th>
              <th>Completes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr className={style.tblBody} key={index}>
                <td>
                  <input
                    type="checkbox"
                    name="select"
                    checked={row.select}
                    onChange={(e) => handleInputChangeTable(index, e)}
                  />
                </td>
                <td>
                  {countryOptions.find((option) => option.value === row.country)
                    ?.label || ""}
                </td>
                <td>
                  <ReactSelect
                    value={languageOptions.find(
                      (option) => option.value === row.language
                    )}
                    onChange={(selectedOption) =>
                      handleDropdownChangeTable(
                        index,
                        "language",
                        selectedOption ? selectedOption.value : ""
                      )
                    }
                    options={languageOptions}
                    classNamePrefix="select"
                  />
                </td>
                <td>
                  <input
                    className={style.tblInput}
                    type="text"
                    name="targetGroup"
                    value={row.targetGroup}
                    onChange={(e) => handleInputChangeTable(index, e)}
                  />
                </td>
                <td style={{ display: "flex" }}>
                  <button
                    style={{
                      backgroundColor: "green",
                      borderRadius: "50%",
                      color: "white",
                      border: "none",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      marginRight: "20px",
                    }}
                    onClick={() => handleCloneRow(index)}
                  >
                    +
                  </button>
                  <button
                    style={{
                      backgroundColor: "red",
                      borderRadius: "50%",
                      color: "white",
                      border: "none",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => handleRemoveRow(index)}
                  >
                    x
                  </button>
                </td>
                <td>
                  <input
                    className={style.tblInput}
                    type="text"
                    name="cpi"
                    value={row.cpi}
                    onChange={(e) => handleInputChangeTable(index, e)}
                  />
                </td>
                <td>
                  <input
                    className={style.tblInput}
                    type="text"
                    name="loi"
                    value={row.loi}
                    onChange={(e) => handleInputChangeTable(index, e)}
                  />
                </td>
                <td>
                  <input
                    className={style.tblInput}
                    type="text"
                    name="ir"
                    value={row.ir}
                    onChange={(e) => handleInputChangeTable(index, e)}
                  />
                </td>
                <td>
                  <input
                    className={style.tblInput}
                    type="text"
                    name="completes"
                    value={row.completes}
                    onChange={(e) => handleInputChangeTable(index, e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Specifications;
