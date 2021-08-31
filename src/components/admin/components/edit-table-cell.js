import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const EditableCell = ({ row: { index }, column: { id }, updateMyData, value: initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateMyData(index, id, value);
  };
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  return <input value={value} onChange={onChange} onBlur={onBlur} />;
};
export default EditableCell;
