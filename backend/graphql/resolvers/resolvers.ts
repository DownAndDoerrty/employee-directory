// Import for model resolvers
import { modelResolvers } from './modelResolvers';

// Import for query resolvers
import { QueryResolvers } from './queryResolvers';

// Import for mutation resolvers
import { MutationResolvers } from './mutationResolvers';

export const resolvers = {
  Query: QueryResolvers,
  Mutation: MutationResolvers,
  ...modelResolvers,
};
