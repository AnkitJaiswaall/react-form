import React from "react";
import Menu from "../menu/Menu";
import Form from "../form/Form";
import style from "./CreateProject.module.css";

const CreateProject = () => {
  return (
    <div>
      <div className={style.page}>
        <Menu />
        <Form />
      </div>
    </div>
  );
};

export default CreateProject;
