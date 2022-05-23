// Imports for mutation resolvers
/// Employee mutations
import { MutationCreateEmployeeResolver } from '../employee/mutations/mutationCreateEmployee';
import { MutationDeleteEmployeeResolver } from '../employee/mutations/mutationDeleteEmployee';
import { UpdateEmployeeMutationResolver } from '../employee/mutations/mutationUpdateEmployee';

// ======= Resolvers for mutations =======
export const MutationResolvers = {
  ...MutationCreateEmployeeResolver,
  ...MutationDeleteEmployeeResolver,
  ...UpdateEmployeeMutationResolver,
};
