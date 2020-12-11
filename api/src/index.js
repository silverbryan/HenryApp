import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './schema';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import models from './models';

dotenv.config();

const { DATABASE_URL, ACCESS_TOKEN_SECRET } = process.env;

mongoose.connect(DATABASE_URL, {
    useFindAndModify: false ,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then( _ => console.log('Database is running'));

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: {
        models,
        ACCESS_TOKEN_SECRET,
        user: {
            _id: 1, username: "Bob"
        }
    } 
})

const app = express();

server.applyMiddleware({ app });

app.listen(5000, () => console.log(`🚀 Server ready at port 5000`));
