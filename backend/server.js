import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import db from './models';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const cors = require('cors');

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: () => ({
        db,
    }),
});

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
server.applyMiddleware({ app });

app.use(express.static('build'));

db.sequelize.sync().then(() => {
    app.listen(PORT, () =>
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`),
    );
});
