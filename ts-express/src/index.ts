import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

// initialize express
const app = express();

// body-parser middleware (adds a body to the request object)
app.use(bodyParser.urlencoded({ extended: true }));

// cookieSession middleware (adds  to the request body)
app.use(cookieSession({ keys: ['key'] }))

// user AppRouter
app.use(AppRouter.getInstance());

// listen on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});