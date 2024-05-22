import React, { useState } from "react";
import Button from "../button/Button";
import style from "./Form.module.css";
import ProjectInformation from "../projectInfo/ProjectInformation";
import Devices from "../devices/Devices";
import FilterOptions from "../filter/FliterOptions";
import Region from "../region/Region";
import Specifications from "../region/specification/Specifications";

const Form = () => {
  const initialRow = {
    select: false,
    country: "",
    language: "",
    targetGroup: "",
    cpi: "",
    loi: "",
    ir: "",
    completes: "",
  };

  const initialDevices = {
    mobile: false,
    tablet: false,
    desktop: false,
  };

  const initialFilterOptions = {
    gatesurvey: false,
    Fraud_detection: false,
  };

  const [inputValue, setInputValue] = useState("");
  const [workOrderNo, setWorkOrderNo] = useState("");
  const [projectType, setProjectType] = useState("");
  const [category, setCategory] = useState("");
  const [client, setClient] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [salesPerson, setSalesPerson] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [devices, setDevices] = useState(initialDevices);
  const [filterOptions, setFilterOptions] = useState(initialFilterOptions);
  const [rows, setRows] = useState([initialRow]);

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  const handleInputChangeTable = (index, event) => {
    const { name, value, type, checked } = event.target;
    const newRows = [...rows];
    newRows[index][name] = type === "checkbox" ? checked : value;
    setRows(newRows);
  };

  const handleDropdownChangeTable = (index, name, value) => {
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  };

  const handleCloneRow = (index) => {
    const newRows = [...rows];
    const rowToClone = { ...newRows[index] };
    newRows.splice(index + 1, 0, rowToClone);
    setRows(newRows);
  };

  const handleRemoveRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const handleCountrySelection = (selectedOptions) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setSelectedCountries(selectedOptions || []);
    const newRows = selectedValues.map((value) => ({
      select: false,
      country: value,
      language: "",
      targetGroup: "",
      cpi: "",
      loi: "",
      ir: "",
      completes: "",
    }));
    setRows(newRows);
  };

  const handleFormSubmit = () => {
    const formData = {
      projectName: inputValue,
      workOrderNo: workOrderNo,
      projectType: projectType,
      category: category,
      client: client,
      clientContact: clientContact,
      salesPerson: salesPerson,
      projectManager: projectManager,
      description: description,
      selectedCountries: selectedCountries.map((country) => country.value),
      devices: devices,
      filterOptions: filterOptions,
      specifications: rows,
    };
    console.log("Form Data:", JSON.stringify(formData, null, 2));
  };

  const handleFormReset = () => {
    setInputValue("");
    setWorkOrderNo("");
    setProjectType("");
    setCategory("");
    setClient("");
    setClientContact("");
    setSalesPerson("");
    setProjectManager("");
    setDescription("");
    setSelectedCountries([]);
    setDevices(initialDevices);
    setFilterOptions(initialFilterOptions);
    setRows([initialRow]);
  };

  const countryOptions = [
    { value: "usa", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "mexico", label: "Mexico" },
    { value: "uk", label: "United Kingdom" },
  ];

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
  ];

  return (
    <div className={style.main}>
      <div>
        <Button
          text="<  Back"
          onClick={handleButtonClick}
          styleClass={style.back}
        />
      </div>
      <div className={style.projectinfo}>
        <div>
          <ProjectInformation
            inputValue={inputValue}
            setInputValue={setInputValue}
            workOrderNo={workOrderNo}
            setWorkOrderNo={setWorkOrderNo}
            projectType={projectType}
            setProjectType={setProjectType}
            category={category}
            setCategory={setCategory}
            client={client}
            setClient={setClient}
            clientContact={clientContact}
            setClientContact={setClientContact}
            salesPerson={salesPerson}
            setSalesPerson={setSalesPerson}
            projectManager={projectManager}
            setProjectManager={setProjectManager}
            description={description}
            setDescription={setDescription}
          />
        </div>
        <div>
          <Devices
            devices={devices}
            handleCheckboxChange={(e) => {
              const { name, checked } = e.target;
              setDevices((prevState) => ({
                ...prevState,
                [name]: checked,
              }));
            }}
          />
          <FilterOptions
            filterOptions={filterOptions}
            handleCheckboxChange={(e) => {
              const { name, checked } = e.target;
              setFilterOptions((prevState) => ({
                ...prevState,
                [name]: checked,
              }));
            }}
          />
        </div>
      </div>

      <Region
        selectedCountries={selectedCountries}
        setSelectedCountries={handleCountrySelection}
        countryOptions={countryOptions}
      />
      <Specifications
        rows={rows}
        countryOptions={countryOptions}
        languageOptions={languageOptions}
        handleInputChangeTable={handleInputChangeTable}
        handleDropdownChangeTable={handleDropdownChangeTable}
        handleCloneRow={handleCloneRow}
        handleRemoveRow={handleRemoveRow}
      />
      <div className={style.btn}>
        <Button text="Submit" onClick={handleFormSubmit} />
        <Button
          styleClass={style.cancel}
          text="Cancel"
          onClick={handleFormReset}
        />
      </div>
    </div>
  );
};

export default Form;
