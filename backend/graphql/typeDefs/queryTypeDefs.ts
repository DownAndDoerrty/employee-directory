import { DocumentNode } from 'graphql';

/// Employee query definition imports
import { QueryEmployeeDefinition } from '../employee/queries/queryEmployee';
import { QueryEmployeesDefinition } from '../employee/queries/queryEmployees';

/// Department query definition imports
import { QueryDepartmentDefinition } from '../department/queries/queryDepartment';
import { QueryDepartmentsDefinition } from '../department/queries/queryDepartments';

export const queryTypeDefs = [
  // ======= Type definitions for queries =======
  /// Employee query definitions
  QueryEmployeeDefinition,
  QueryEmployeesDefinition,

  /// Department query definitions
  QueryDepartmentDefinition,
  QueryDepartmentsDefinition,
] as Array<DocumentNode>;
