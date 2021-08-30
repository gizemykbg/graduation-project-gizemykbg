import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';

import { getData } from '../firebase/services';

function SuccessPage() {
  const location = useLocation();
  const history = useHistory();
  const [info, setInfo] = useState({});

  useEffect(() => {
    getData(id).then((data) => {
      setInfo(data);
    });
  }, []);
  const id = location.state.applyId;
  const buttonId = id;
  console.log(info);

  const handleClick = (e) => {
    history.push('/basvuru-sorgula/{id}');
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="formSuccess">
          <div className="body1">
            <h2>Başvrunuz Değerlendirmeye alınmıştır.. Bekleyiniz.. </h2>
            <button type="button" onClick={handleClick} className="buttonn">
              {buttonId}
            </button>
            <p>Butona tıklayarak başvuru durumuna bakabilirsiniz</p>
            <br />
            <ul>
              <li>Firstname: {info.firstname}</li>
              <li>Lastname: {info.lastname}</li>
              <li>Tc: {info.tc}</li>
              <li>Adres: {info.adress}</li>
              <li>Açıklama: {info.content}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessPage;
