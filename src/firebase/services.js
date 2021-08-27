import firebase, { firestore } from "./config";

const formRef = firestore.collection("forms");

export const addForm = async (data) => {
  let id;
  await formRef
    .add({
      firstname: data.firstname,
      lastname: data.lastname,
      age: data.age,
      content: data.content,
      tc: data.tc,
      adress: data.adress,
      cover: data.cover[0],
      status: "Pending",
      createdDate: firebase.firestore.Timestamp.now(),
    })
    .then((docs) => {
      id = docs.id;
    });

  return id;
};
