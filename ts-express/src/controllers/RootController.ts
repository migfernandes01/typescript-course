import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

// middleware to check user's authentication
function requireAuth(req: Request, res: Response, next: NextFunction): void {
    // if user is logged in
    if(req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403);
    res.send('Not allowed');
}

@controller('')
class RootController {
    // GET to /
    @get('/')
    getRoot(req: Request, res: Response) {
        // person is logged in
        if(req.session && req.session.loggedIn) {
            res.send(`
                <div>
                    <div>You are logged in</div>
                </div>
                <a href="/auth/logout">Logout</a>
            `);
        } else {
            res.send(`
                <div>
                    <div>You are logged out</div>
                </div>
                <a href="/auth/login">Login</a>
            `);
        }
    }

    // GET to /protected, passing on requireAuth middleware first
    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send('Welcome to protected route!');
    }
}