import React from "react";
import Input from "../input/Input";
import style from "./ProjectInformaion.module.css";
const ProjectInformation = ({
  inputValue,
  setInputValue,
  workOrderNo,
  setWorkOrderNo,
  projectType,
  setProjectType,
  category,
  setCategory,
  client,
  setClient,
  clientContact,
  setClientContact,
  salesPerson,
  setSalesPerson,
  projectManager,
  setProjectManager,
  description,
  setDescription,
}) => {
  return (
    <div className={style.projectDetails}>
      <div className={style.heading}>Project Information</div>
      <div className={style.name}>
        <div>
          <label className={style.lbl}>
            Project Name
            <span style={{ color: "red" }}>*</span>
          </label>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Project Name"
          />
        </div>
        <div>
          <label className={style.lbl}>Work Order No. #</label>
          <Input
            value={workOrderNo}
            onChange={(e) => setWorkOrderNo(e.target.value)}
            placeholder="Work Order Number"
          />
        </div>
      </div>
      <div className={style.type}>
        <div>
          <label className={style.lbl}>
            Project Type <span style={{ color: "red" }}>*</span>
          </label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="type 1">Type 1</option>
            <option value="type 2">Type 2</option>
            <option value="type 3">Type 3</option>
          </select>
        </div>
        <div>
          <label className={style.lbl}>
            Category <span style={{ color: "red" }}>*</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select</option>
            <option value="category 1">Category 1</option>
            <option value="category 2">Category 2</option>
            <option value="category 3">Category 3</option>
          </select>
        </div>
        <div>
          <label className={style.lbl}>
            Client <span style={{ color: "red" }}>*</span>
          </label>
          <select value={client} onChange={(e) => setClient(e.target.value)}>
            <option value="">Select</option>
            <option value="client 1">Client 1</option>
            <option value="client 2">Client 2</option>
            <option value="client 3">Client 3</option>
          </select>
        </div>
      </div>
      <div className={style.type}>
        <div>
          <label className={style.lbl}>Client's Contact</label>
          <select
            value={clientContact}
            onChange={(e) => setClientContact(e.target.value)}
          >
            <option value="">Select</option>
            <option value="contact 1">Contact 1</option>
            <option value="contact 2">Contact 2</option>
            <option value="contact 3">Contact 3</option>
          </select>
        </div>
        <div>
          <label className={style.lbl}>Sales Person</label>
          <select
            value={salesPerson}
            onChange={(e) => setSalesPerson(e.target.value)}
          >
            <option value="">Select</option>
            <option value="sales person 1">Sales Person 1</option>
            <option value="sales person 2">Sales Person 2</option>
            <option value="sales person 3">Sales Person 3</option>
          </select>
        </div>
        <div>
          <label className={style.lbl}>Project Manager</label>
          <select
            value={projectManager}
            onChange={(e) => setProjectManager(e.target.value)}
          >
            <option value="">Select</option>
            <option value="manager 1">Manager 1</option>
            <option value="manager 2">Manager 2</option>
            <option value="manager 3">Manager 3</option>
          </select>
        </div>
      </div>
      <div style={{ marginLeft: "10px" }}>
        <label>Project Description</label>
        <textarea
          style={{ margin: "20px", marginTop: "10px" }}
          name="description"
          cols="100"
          rows="8"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ProjectInformation;
