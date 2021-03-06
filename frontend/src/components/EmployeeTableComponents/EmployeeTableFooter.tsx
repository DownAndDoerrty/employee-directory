import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

import Button from '../Button';
import '../../styles/EmployeeTableFooter.scss';

interface EmployeeTableFooterProps {
  employeeRecordsCount: number;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  limit: number;
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
}

const EmployeeTableFooter = (props: EmployeeTableFooterProps) => {
  // Set offset and page number on button click
  const handleButtonClick = (key: number) => {
    props.setOffset(key * props.limit);
    props.setPageNumber(key);
  };

  const numberOfPages = props.employeeRecordsCount / props.limit;

  const pageButtons = [];

  for (let i = 0; i < numberOfPages; i++) {
    pageButtons.push(
      <Button
        key={i}
        text={(i + 1).toString()}
        disabled={i === props.pageNumber ? true : false}
        handleClick={() => handleButtonClick(i)}
      />
    );
  }

  return (
    <tfoot>
      <tr>
        <td colSpan={4} id="employeeDataContainer">
          <h5 id="employeeCountContainer">Employees: {props.employeeRecordsCount}</h5>
        </td>
        <td colSpan={4} id="tableButtonContainer">
          <Button
            handleClick={() => handleButtonClick(props.pageNumber - 1)}
            text="<"
            disabled={props.pageNumber <= 0}
          />
          {/* Create buttons based on number of pages */}
          {pageButtons}
          <Button
            handleClick={() => handleButtonClick(props.pageNumber + 1)}
            text=">"
            disabled={props.pageNumber >= numberOfPages - 1}
          />
        </td>
      </tr>
    </tfoot>
  );
};

export default EmployeeTableFooter;
