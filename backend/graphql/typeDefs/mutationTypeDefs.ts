import { DocumentNode } from 'graphql';

/// Employee mutation definition imports
import { MutationCreateEmployeeDefinition } from '../employee/mutations/mutationCreateEmployee';
import { MutationDeleteEmployeeDefinition } from '../employee/mutations/mutationDeleteEmployee';
import { UpdateEmployeeMutationDefinition } from '../employee/mutations/mutationUpdateEmployee';

export const mutationTypeDefs = [
  // ======= Type definitions for queries =======
  /// Employee mutation definitions
  MutationCreateEmployeeDefinition,
  MutationDeleteEmployeeDefinition,
  UpdateEmployeeMutationDefinition,
] as Array<DocumentNode>;
