import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { getData } from '../firebase/services';

function Success() {
  const { id } = useParams();
  // const location = useLocation();
  const history = useHistory();
  const [info, setInfo] = useState({});

  useEffect(() => {
    getData(id).then((data) => {
      setInfo(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const id = location.state.applyId;
  const buttonId = id;
  // console.log(info);

  const handleClick = (e) => {
    history.push({
      pathname: `/basvuru-sorgula`,
      state: { id },
    });
  };
  return (
    <>
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
              <li>Ad: {info.firstname}</li>
              <li>Soyad: {info.lastname}</li>
              <li>Tc: {info.tc}</li>
              <li>Adres: {info.adress}</li>
              <li>Açıklama: {info.content}</li>
              <li>Durum: {info.status}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
