import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Success from '../components/success-component';

import { getData } from '../firebase/services';

function SuccessPage() {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <Success />
    </>
  );
}

export default SuccessPage;
