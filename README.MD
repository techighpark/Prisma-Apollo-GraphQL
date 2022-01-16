don't need to use 'graphql-yoga' if you use 'apollo-server'  
'graphql-yoga' run on Apollo Server

---

# _**# 1.0 Set Up(apollo, graphql, babel)**_

- apollo-server
- apollo-server-core
- graphql
- nodemon -D
- @babel/{core,node,preset-env} -D

### _**server.js**_

: create server {ApolloServer}, {gql} from apollo-server

---

# _**# 2.0 Prisma**_

- prisma -D (@prisma/cli -> prisma)

### _**$ npx prisma init**_

: prisma/schema.prisma

: .env

### _**.env**_

: DATABASE_URL

---

## _**# 3.0 Prisma Migrate**_

### _**schema.prisma**_

: create model Movie

### _**$ npx prisma migrate dev --preview-feature**_

: Generated Prisma Client

---

## _**# 3.1 Prisma Client**_

- @prisma/client

---

## _**# 3.2 Prisma Studio**_

### _**$ npx prisma studio**_

---

- graphql-tools
  - @graphql-tools/merge
  - @graphql-tools/schema
- @graphql-tools/load-files
