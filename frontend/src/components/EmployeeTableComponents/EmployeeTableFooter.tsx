import * as React from 'react';
import { Component, Dispatch, SetStateAction } from 'react';

import { Employee } from '../../graphql/types/employeeType';
import Button from '../Button';
import '../../styles/EmployeeTableFooter.scss';

interface EmployeeTableFooterProps {
  employeeData: Array<Array<Employee>>;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

class EmployeeTableFooter extends Component<EmployeeTableFooterProps> {
  constructor(props: EmployeeTableFooterProps | Readonly<EmployeeTableFooterProps>) {
    super(props);
  }

  render() {
    return (
      <tfoot>
        <tr>
          <td colSpan={7} id="tableButtonContainer">
            <Button
              handleClick={() => this.props.setPageNumber(this.props.pageNumber - 1)}
              text="<"
              disabled={this.props.pageNumber <= 0}
            />
            {/* Create buttons based on number of pages */}
            {this.props.employeeData.map((_employee, key) => {
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
