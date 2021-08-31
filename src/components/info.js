import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../firebase/services';
import styled from 'styled-components';
import '../styles/admin-app-detail.scss';

const Info = () => {
  const { id } = useParams();
  const [fdata, setFdata] = useState({});

  useEffect(() => {
    getData(id).then((data) => {
      if (data) setFdata(data);
    });
  }, []);
  const Styles = styled.div`
  {
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
    <div>
      {' '}
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
  );
};

export default Info;
