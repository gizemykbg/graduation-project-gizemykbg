/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { adminFormList } from '../../../firebase/services';
import EditableCell from './edit-table-cell';
import TableC from './table-utils';
import 'bootstrap/dist/css/bootstrap.min.css';

function TableP() {
  const [data, setData] = useState([]);

  const loadList = () => {
    adminFormList(newList);
  };

  const newList = (data) => {
    setData(data);
  };
  //  console.log(data);
  useEffect(() => {
    if (!data.length) {
      loadList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const UpdateMyData = (rowIndex, columnId, value) => {
    // Mesajımı valueyu updateforma göndererek güncelleyeceğim
    // Statusü de buton tarafında id girerek düzenlemem gerek
    // rowIndex seçili satır, columnId: sütun adı value: mesajım
    // old bütün formlar

    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        // console.log(value);
        return row;
      })
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Lastname',
        accessor: 'lastname',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Tc',
        accessor: 'tc',
      },
      {
        Header: 'Açıklama',
        accessor: 'content',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Message',
        accessor: 'adminMessages',
        Cell: EditableCell,
      },
    ],
    []
  );
  const Styles = styled.div`
    padding: 1rem;
    td {
      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  `;
  return (
    <>
      <Styles>
        <TableC columns={columns} data={data} updateMyData={UpdateMyData} />
      </Styles>
    </>
  );
}

export default TableP;
