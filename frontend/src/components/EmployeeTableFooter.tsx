import * as React from 'react';
import { Component } from 'react';

import { Employee } from '../utils/employeeType';
import Button from './Button';

interface EmployeeTableFooterProps {
  employeeData: Array<Array<Employee>>;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

class EmployeeTableFooter extends Component<EmployeeTableFooterProps> {
  constructor(props: EmployeeTableFooterProps | Readonly<EmployeeTableFooterProps>) {
    super(props);
  }

  render() {
    return (
      <tfoot>
        <tr>
          <td colSpan={6} id="tableButtonContainer">
            <Button
              handleClick={() => this.props.setPageNumber(this.props.pageNumber - 1)}
              text="<"
              disabled={this.props.pageNumber <= 0}
            />
            {this.props.employeeData.map((object, key) => {
              return (
                <Button
                  key={key}
                  text={(key + 1).toString()}
                  disabled={key === this.props.pageNumber ? true : false}
                  handleClick={() => this.props.setPageNumber(key)}
                />
              );
            })}
            <Button
              handleClick={() => this.props.setPageNumber(this.props.pageNumber + 1)}
              text=">"
              disabled={this.props.pageNumber >= this.props.employeeData.length - 1}
            />
          </td>
        </tr>
      </tfoot>
    );
  }
}

export default EmployeeTableFooter;
