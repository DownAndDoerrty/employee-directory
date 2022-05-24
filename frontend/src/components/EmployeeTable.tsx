import * as React from 'react';
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import DirectoryImage from './DirectoryImage';

const EMPLOYEES_QUERY = gql`
  query EmployeesQuery {
    employees {
      email
      phoneNumber
      forename
      surname
      profileImage
      title
      department {
        name
      }
    }
  }
`;

const EmployeeTable = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [limit, setLimit] = useState(10);

  const { loading, error, data } = useQuery(EMPLOYEES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const employeeData = Array.from({ length: Math.ceil(data.employees.length / limit) }, (_v, i) =>
    data.employees.slice(i * limit, i * limit + limit)
  );

  console.log({ pageNumber });
  return (
    <div>
      <table>
        <tbody>
          {employeeData[pageNumber].map(
            ({ email, forename, surname, profileImage, title, phoneNumber }) => (
              <tr key={email}>
                <td id="directoryImageCell">
                  <DirectoryImage imageSrc={profileImage} />
                </td>
                <td>{forename}</td>
                <td>{surname}</td>
                <td>{title}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
