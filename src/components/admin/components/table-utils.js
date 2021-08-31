/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTable, usePagination } from 'react-table';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ResolveButton, RejectButton } from './status-button';

function TableC({ columns, data, updateMyData }) {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } = useTable(
    {
      columns,
      data,
      updateMyData,
    },
    usePagination,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'action',
          Header: 'Action',
          accessor: 'status',
          Cell: ({ row }) => <ResolveButton {...row} updateMyData={updateMyData} />,
        },
        {
          id: 'action2',
          Header: 'Action',
          accessor: 'status',
          Cell: ({ row }) => <RejectButton {...row} updateMyData={updateMyData} />,
        },
        ...columns,
      ]);
    }
  );
  return (
    <>
      <Container>
        <Table bordered {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {/* <th>CheckIn/Out</th> */}
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr id={`${row.id}_row`} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
export default TableC;
