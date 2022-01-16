don't need to use 'graphql-yoga' if you use 'apollo-server'  
'graphql-yoga' run on Apollo Server

## set up

> ##### npm i apollo-server
>
> ##### npm i graphql
>
> ##### npm i nodemon -D
>
> ##### npm i @babel/{core,node,preset-env} -D

### server.js

> ###### https://github.com/apollographql/apollo-server
>
> - create Apollo Server  
>   `import {ApolloServer}, {gql} from 'apollo-server'`
>
> - landing page set up  
>   `import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'`
