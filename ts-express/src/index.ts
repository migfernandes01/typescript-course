import express, { Request, Response } from 'express';
import { router } from './routes/routes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

// initialize express
const app = express();

// body-parser middleware (adds a body to the request object)
app.use(bodyParser.urlencoded({ extended: true }));

// cookieSession middleware (adds  to the request body)
app.use(cookieSession({ keys: ['key'] }))

// user router
app.use(router);

// listen on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});