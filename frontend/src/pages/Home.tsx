import * as React from 'react';
import { Component } from 'react';

import EmployeeTable from '../components/EmployeeTable';

class Home extends Component {
  constructor(props: unknown | Readonly<unknown>) {
    super(props);
  }

  render() {
    return (
      <div>
        <EmployeeTable />
      </div>
    );
  }
}

export default Home;
