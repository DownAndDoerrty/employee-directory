import { DocumentNode } from 'graphql';

// For available premade scalars: https://www.graphql-scalars.dev/docs/usage/apollo-server
import { DateTimeTypeDefinition } from 'graphql-scalars';

// Imports for model type definitions
import { EmployeeTypeDefinition } from '../employee/employeeType';
import { DepartmentTypeDefinition } from '../department/departmentType';


export const modelTypeDefs = [
  // ======= Type definitions for models =======
  EmployeeTypeDefinition,
  DepartmentTypeDefinition,

  // ======= Type definitions for scalars =======
  DateTimeTypeDefinition,
] as Array<DocumentNode>;
