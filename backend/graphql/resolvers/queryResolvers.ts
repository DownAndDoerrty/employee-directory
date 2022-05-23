/// Employee query resolver imports
import { QueryEmployeeResolver } from '../employee/queries/queryEmployee';
import { QueryEmployeesResolver } from '../employee/queries/queryEmployees';

/// Department query resolver imports
import { QueryDepartmentResolver } from '../department/queries/queryDepartment';
import { QueryDepartmentsResolver } from '../department/queries/queryDepartments';


// ======= Resolvers for queries =======
export const QueryResolvers = {
  /// Employee query resolvers
  ...QueryEmployeesResolver,
  ...QueryEmployeeResolver,

  /// Department query resolvers
  ...QueryDepartmentResolver,
  ...QueryDepartmentsResolver,
};
