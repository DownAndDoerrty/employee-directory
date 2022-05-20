// For available premade scalars: https://www.graphql-scalars.dev/docs/usage/apollo-server
import { DateTimeResolver } from 'graphql-scalars';

// Imports for model resolvers
import { EmployeeResolver } from '../employee/employeeResolver';
import { DepartmentResolver } from '../department/departmentResolver';

export const modelResolvers = {
  // ======= Resolvers for models =======
  Employee: EmployeeResolver,
  Department: DepartmentResolver,

  // ======= Resolvers for scalars =======
  DateTime: DateTimeResolver,
};
