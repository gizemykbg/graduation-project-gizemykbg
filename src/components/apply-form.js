import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { TextField } from "./textfield";
import * as Yup from "yup";

import { addForm } from "../firebase/services";
export const ApplyForm = ({}) => {
  const [loading, setLoading] = useState("");
  const history = useHistory();

  const validate = Yup.object().shape({
    firstname: Yup.string()
      .matches(/^([^0-9]*)$/, "First name should not contain numbers")
      .required(),
    lastname: Yup.string()
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .required(),
    age: Yup.number().required(),
    content: Yup.string().required(),
    tc: Yup.number().min(11, "Must be 11 characters").required(), // ??? salladm.
    adress: Yup.string().required().max(45, ".."),
    cover: Yup.mixed().test(
      "cover",
      "the file must be jpeg,jgp or pdf",
      (values) => {
        if (values[0]) {
          return values && values[0].type === "image/jpeg", "image/png", "/pdf";
        }
      }
    ),
  });

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastName: "",
        age: "",
        content: "",
        tc: "",
        adress: "",
        cover: [],
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        addForm(values)
          .then((values) => {
            console.log("sıkujd");
            history.push({
              pathname: "/basvuru-basarili",
              state: { values, dataid: values },
            });
          })
          .catch((error) => {
            alert(error);
          });
      }}
    >
      {(formik) => (
        <div>
          <h1>Başvuru Formu</h1>
          <Form>
            <TextField label="First Name" name="firstname" type="text" />
            <TextField label="Last Name" name="lastname" type="text" />
            <TextField label="Age" name="age" type="number" />
            <TextField label="Açıklama" name="content" type="text" />
            <TextField label="Tc No:" name="tc" type="number" />
            <TextField label="Adress" name="adress" type="text" />
            <TextField label="dosya" type="file" name="cover" />
            <button className="btn" type="submit">
              Gönder
            </button>
            <button className="btn" type="reset">
              Sıfırla
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
