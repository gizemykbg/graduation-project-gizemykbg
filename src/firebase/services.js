import firebase, { firestore } from "./config";

const formRef = firestore.collection("forms");

export const addForm = async (data) => {
  let applyId; // id
  console.log(applyId);

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
      adminMessage: "",
      createdDate: firebase.firestore.Timestamp.now(),
    })
    .then((docs) => {
      applyId = docs.id;
    });

  return applyId;
};

export const getData = async (applyId) => {
  let formData;

  await formRef
    .doc(applyId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        formData = doc.data();
      } else {
        formData = "";
      }
    })
    .catch((error) => {
      console.log("Error", error);
    });

  return formData;
};

export const adminFormList = (res) => {
  const formList = [];
  formRef
    .get()
    .then((snapShot) => {
      snapShot.forEach((formDoc) => {
        formList.push({ id: formDoc.id, ...formDoc.data() });
      });
      res(formList);
    })

    .catch((error) => {
      console.log(error);
    });
};

export const updateForm = async (id, data) => {
  const editFormRef = formRef.doc(id);
  await editFormRef
    .update({
      status: data,
      adminMessage: data,
    })
    .then((doc) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};
