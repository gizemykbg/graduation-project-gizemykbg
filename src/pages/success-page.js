import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import { useHistory, useLocation } from "react-router-dom";
import { getData } from "../firebase/services";

function SuccessPage() {
  const location = useLocation();
  const history = useHistory();
  const id = location.state.applyId;
  const buttonId = id.substring(0, 8);

  const [info, setInfo] = useState({});
  useEffect(() => {
    getData(id).then((data) => {
      if (data) setInfo(data);
    });
  }, []);
  console.log(info);
  const handleClick = (e) => {
    history.push("/basvuru-sorgula/{id}");
  };
  {
    info &&
      info.map((info) => {
        return (
          <div>
            <ul key={info.id}>
              <li>Firstname: {info.firstname}</li>
              <li>Lastname: {info.lastname}</li>
              <li>Tc: {info.tc}</li>
              <li>Content: {info.content}</li>
            </ul>
          </div>
        );
      });
  }
  return (
    <div>
      <Navbar />
      <div className="formSuccess">
        <div className="body1">
          <h2>Başvrunuz Değerlendirmeye alınmıştır.. Bekleyiniz.. </h2>

          <button onClick={handleClick} className="buttonn">
            {buttonId}
          </button>
          <p>Butona tıklayarak başvuru durumuna bakabilirsiniz</p>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;

/*  <ApplyForm applyValue={state.data} /> */
/* {liste.map((formId) => (
        <div>
          {liste === formId ? <label>liste</label> : <label>srjytyuıj</label>}
        </div>
      ))} */
