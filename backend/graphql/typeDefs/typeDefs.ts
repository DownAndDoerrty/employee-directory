import { DocumentNode } from 'graphql';
import { TypeSource } from '@graphql-tools/utils';

// Imports for model type definitions
import { modelTypeDefs } from './modelTypeDefs';

export const typeDefs: TypeSource = [
  ...modelTypeDefs,
] as Array<DocumentNode>;
