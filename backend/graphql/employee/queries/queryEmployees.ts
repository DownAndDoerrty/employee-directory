import gql from 'graphql-tag';
import { Employee } from '@prisma/client';
import { Context } from '../../context';


export const QueryEmployeesDefinition = gql`
  type Query {
    employees: [Employee]
  }
`;

export const QueryEmployeesResolver = {
  employees: async (_parent: Employee, _args: undefined, context: Context): Promise<Array<Employee>> =>
    await context.prisma.employee.findMany(),
};
