import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefs } from './typeDefs/typeDefs';
import { resolvers } from './resolvers/resolvers';

export const graphQLSchema = makeExecutableSchema({ resolvers, typeDefs });
