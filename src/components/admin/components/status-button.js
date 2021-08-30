import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import { updateForm } from '../../../firebase/services';

// row props
export const RejectButton = (row) => {
  const [rejectButton, setRejectButton] = useState(' ');

  useEffect(() => {
    if (row.original) {
      const status = row.original.status === 'rejected' ? 'rejected' : 'reject';
      setRejectButton(status);
    }
  }, [row]);

  const handleClick = async () => {
    if (row.original.status === 'rejected') {
      return;
    }
    const status = 'rejected';

    await updateForm(row.original.id, status);
    row.updateMyData(Number(row.id), 'status', status);
  };
  return (
    <Button
      classname="rejectButton"
      key={row.id}
      id={row.id}
      onClick={() => handleClick()}
      value={rejectButton}
    >
      {rejectButton}
    </Button>
  );
};
export const ResolveButton = (row) => {
  const [resolveButton, setResolveButton] = useState(' ');
  useEffect(() => {
    if (row.original) {
      const status = row.original.status === 'resolved' ? 'resolved' : 'resolve';
      setResolveButton(status);
    }
  }, [row]);

  const handleClick = async () => {
    if (row.original.status === 'resolved') {
      return;
    }
    const status = 'resolved';
    await updateForm(row.original.id, status);
    row.updateMyData(Number(row.id), 'status', status);
  };
  return (
    <Button
      className="resolveButton"
      key={row.id}
      id={row.id}
      onClick={() => handleClick()}
      value={resolveButton}
    >
      {resolveButton}
    </Button>
  );
};
