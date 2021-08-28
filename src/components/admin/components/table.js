import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import EditableCell from "./edit-table-cell";
import TableC from "./table-utils";
import { adminFormList, updateForm } from "../../../firebase/services";

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

function TableP() {
  const [data, setData] = useState([]);

  const loadList = () => {
    adminFormList(newList);
  };
  console.log(data);

  const newList = (data) => {
    setData(data);
  };
  useEffect(() => {
    if (!data.length) {
      loadList();
    }
  }, []);

  const updateMyData = (rowIndex, columnId, value) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          const editForm = (value) => {
            updateForm(newData);
          };
          const newData = (value) => {
            setData(value);
          };
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
          editForm();
        }

        return row;
      })
    );
  };
  const columns = useMemo(
    () => [
      {
        Header: "Lastname",
        accessor: "lastname",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Tc",
        accessor: "tc",
      },
      {
        Header: "Açıklama",
        accessor: "content",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Message",
        accessor: "adminMessages",
        Cell: EditableCell,
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <Styles>
        <TableC columns={columns} data={data} updateMyData={updateMyData} />
      </Styles>
    </React.Fragment>
  );
}

export default TableP;
