import firebase, { firestore } from "./config";
//import { useCollectionData } from "react-firebase-hooks/firestore";

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
      adminMessage: "",
      createdDate: firebase.firestore.Timestamp.now(),
    })
    .then((docs) => {
      id = docs.id;
    });

  return id;
};

export const getData = async (formId) => {
  let formData;
  console.log(formData);
  await formRef
    .doc(formId)
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

export const updateForm = (formId, data, res) => {
  console.log(data);
  const editFormRef = formRef.doc(formId);
  editFormRef
    .update({
      status: data.status,
      adminMessage: data.adminMessage,
    })
    .then((doc) => {
      console.log(doc);
      res(doc);
    });
};

/* export const updateForm = async (formId, data) => {
  await formRef
    .doc(formId)
    .update({
      status: data.status,
      adminMessage: data.adminMessage,
    })
    .catch((err) => {
      console.log(err);
    });
}; 
export async function createForm(url, form) {
  const fileRef = await storage.refFromURL(url);
  var d;
  var newForm = {
    firstname: form.firstname,
    lastname: form.lastname,
    age: form.age,
    tc: form.tc,
    adress: form.adress,
    cover: url,
    fileRef: fileRef.location.path,
  };
  return firestore.collection("forms").add(newForm);
}
export const AddForm = async (data) => {
  console.log(data);
  // history.push({ });success yap
  let d;
  let form = {
    firstname: data.firstname,
    lastname: data.lastname,
    age: data.age,
    tc: data.tc,
    adress: data.adress,
    cover: data.cover[0],
  };

  var storageRef = firebase.storage().ref();
  var storageChild = storageRef.child(form.cover.name);
  var formCover = storageChild.put(form.cover);

  await new Promise((resolve) => {
    formCover.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //setLoading(Math.trunc(progress));
      },
      (error) => {
        console.log(error);
      },
      async () => {
        var dowloadURL = await storageChild.getDownloadURL();
        d = dowloadURL;
        console.log(d);
        resolve();
      }
    );
  });

  firebase
    .createForm(d, form)
    .then((form) => {
      console.log("form created succesfully", form); //success page
      getForms();
    })
    .catch((err) => {
      console.log(err);
    });
};
/* 
export async function AddRes(formId, message) {
  const formRef = db.collection("forms");
  await formRef
    .docRef(formId)
    .collection("messages")
    .add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      message,
      //senderID: admin,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
} */

/* 
export function getFormData(adminName) {
  const formRef = db.collection("forms"); //admin

  return formRef
    .where("name", "==", adminName)
    .get()
    .then((querySnapshot) => querySnapshot.docs.map((doc) => doc.data())[0]);
}

export function updateForm(formId, setter, adminId) {
  const formRef = db.collection("forms");
  const resRef = formRef.doc(adminId).collection("messages");
}
  */
/*export async function getAllForms() {
  return firestore.collection("forms").get();
}*/
