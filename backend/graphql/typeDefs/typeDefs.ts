import { DocumentNode } from 'graphql';
import { TypeSource } from '@graphql-tools/utils';

// Imports for model type definitions
import { modelTypeDefs } from './modelTypeDefs';

// Imports for query definitions
import { queryTypeDefs } from './queryTypeDefs';

export const typeDefs: TypeSource = [
  ...queryTypeDefs,
  ...modelTypeDefs,
] as Array<DocumentNode>;
