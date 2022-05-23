import { DocumentNode } from 'graphql';
import { TypeSource } from '@graphql-tools/utils';

// Import for model type definitions
import { modelTypeDefs } from './modelTypeDefs';

// Import for query definitions
import { queryTypeDefs } from './queryTypeDefs';

// Import for query definitions
import { mutationTypeDefs } from './mutationTypeDefs';

export const typeDefs: TypeSource = [
  ...queryTypeDefs,
  ...mutationTypeDefs,
  ...modelTypeDefs,
] as Array<DocumentNode>;
