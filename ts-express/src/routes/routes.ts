import { Router, Request, Response, NextFunction } from "express";

// interface extening Request, with a body property(due to bodyParser middleware)
interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

// middleware to check user's authentication
function requireAuth(req: Request, res: Response, next: NextFunction): void {
    // if user is logged in
    if(req.session && req.session.loggedIn) {
        return next();
        return;
    }

    res.status(403);
    res.send('Not allowed');
}

const router = Router();

// router for a get to /login (render a login form)
router.get('/login', (req: Request, res: Response) => {
    // send html form
    res.send(`
        <form method=POST>
            <div>
                <label>Email: </label>
                <input name="email" />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" />
            </div>
            <button>Submit</button>
        </form>
    `);
});

// POST to /login
router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;
    if(email && password && email === 'hi@hi.com' && password === 'pw') {
        // mark person as logged in. Have a session with the value of loggedIn as true
        req.session = { loggedIn: true }
        // redirect to root dir
        res.redirect('/');

    } else {
        res.send('Invalid credentials');
    }
   
});

// GET to /
router.get('/', (req: Request, res: Response) => {
    // person is logged in
    if(req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You are logged in</div>
            </div>
            <a href="/logout">Logout</a>
        `);
    } else {
        res.send(`
            <div>
                <div>You are logged out</div>
            </div>
            <a href="/login">Login</a>
        `);
    }
});

// GET to /logout
router.get('/logout', (req: Request, res: Response) => {
    // reset session
    req.session = undefined;
    // redirect to root dir
    res.redirect('/');
});

// GET to /protected, passing on requireAuth middleware first
router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send('Welcome to protected route!');
});

export { router };