/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { adminFormList, getData } from '../firebase/services';

export default function ApplySearch() {
  const [value, setValue] = useState(' ');
  const [data, setData] = useState({});
  const history = useHistory();

  const inputRef = useRef();

  const handleClick = () => {
    history.push(`/basvuru-sorgula/${value}`);
    setValue(inputRef.current.value);
    getData(value).then((data) => {
      setData(data);
      console.log(data);
      console.log('lalalalla');
    });
  };

  console.log(value);

  const Styles = styled.div`
     {
      width: 80%;
      height: 500px;
      display: table;
      margin-top: 5%;
      margin-left: auto;
      margin-right: auto;
      background-color: rgba(0, 0, 0, 0.1);
      padding: 5px;
      border-radius: 20px;
    }
    input {
      width: 50%;
      margin-bottom: 25px;
      border-radius: 20px;
      padding: 10px;
      border: 3px;
      background-color: white;
    }
    button {
      height: 40px;
      width: 80px;
      box-sizing: border-box;
      background: #db98e9;
      border: 1px solid #d0d0d0;
      border-radius: 15px;
      cursor: pointer;
      color: #fff;
      margin: 20px;
      margin-top: 0px;
    }
    button:hover {
      box-shadow: 0px 25px 90px #a65ac4;
    }
    h2 {
      font-family: helvetica, arial, sans-serif;
      font-szie: 20px;
      color: #000;
      padding: 20px;
    }
    ul {
      list-style: none;
      width: 300px;
      padding: 20px;
      margin-top: 50px;
      margin-left: 50px;
    }
    li {
      text-decoration: none;
      font: 24px helvetica, arial, sans-serif;
      border-bottom: 1px solid #999;
    }
    li:first-child {
      border-top: 1px solid #999;
    }
    li {
      text-decoration: none;
      color: #999;
      display: block;
      width: 200px;
      height: 40px;
      line-height: 40px;
      -webkit-transition: font-size 0.3s ease, background-color 1s ease;
      -moz-transition: font-size 0.3s ease, background-color 1s ease;
      -ms-transition: font-size 0.3s ease, background-color 1s ease;
      -o-transition: font-size 0.3s ease, background-color 1s ease;
      transition: font-size 0.3s ease, background-color 1s ease;
    }
    li a:hover {
      font: 26px helvetica, arial, sans-serif;
      line-height: 40px;
      text-decoration: none;
      color: #999;
      background: #e3e3e3;
    }
  `;
  return (
    <Styles>
      <div clasname="body1">
        <h2>Başvuru Sorgula</h2>
        <label htmlFor="id">Başvuru kodu giriniz</label>

        <input type="text" ref={inputRef} />
        <button onClick={() => handleClick()} type="submit">
          Ara
        </button>
        <br />
        <h6>Çözemediğim sorun yüzünden iki kere aratınız.</h6>
        {!data && <div>Bilgileriniz bulunamadı </div>}
        <div>
          <ul>
            <li>{data.firstname}</li>
            <li>{data.lastname}</li>
            <li>{data.tc}</li>
            <li>{data.age}</li>
            <li>{data.adress}</li>
            <li>{data.status}</li>
            <li>{data.adminMessage}</li>
          </ul>
        </div>
      </div>
    </Styles>
  );
}
