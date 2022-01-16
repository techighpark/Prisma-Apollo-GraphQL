require('dotenv').config();

import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import schema from './schema';

const PORT = process.env.PORT;

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(PORT).then(() => {
  console.log(`🚀 Server ready at http://localhost:${PORT}✅`);
});
