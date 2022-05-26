import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';

import { Employee } from '../../graphql/types/employeeType';
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

class EmployeeTableFooter extends Component<EmployeeTableFooterProps> {
  constructor(props: EmployeeTableFooterProps | Readonly<EmployeeTableFooterProps>) {
    super(props);
  }

  handleButtonClick(key: number) {
    this.props.setOffset(key * this.props.limit);
    this.props.setPageNumber(key);
  }

  render() {
    const numberOfPages = this.props.employeeRecordsCount / this.props.limit;
    const pageButtons = [];
    for (let i = 0; i < numberOfPages; i++) {
      pageButtons.push(
        <Button
          key={i}
          text={(i + 1).toString()}
          disabled={i === this.props.pageNumber ? true : false}
          handleClick={() => this.handleButtonClick(i)}
        />
      );
    }
    return (
      <tfoot>
        <tr>
          <td colSpan={8} id="tableButtonContainer">
            <Button
              handleClick={() => this.handleButtonClick(this.props.pageNumber - 1)}
              text="<"
              disabled={this.props.pageNumber <= 0}
            />
            {/* Create buttons based on number of pages */}
            {pageButtons}
            <Button
              handleClick={() => this.handleButtonClick(this.props.pageNumber + 1)}
              text=">"
              disabled={this.props.pageNumber >= numberOfPages - 1}
            />
          </td>
        </tr>
      </tfoot>
    );
  }
}

export default EmployeeTableFooter;
