import { Request, Response } from "express";
import { get, controller, post, bodyValidator } from './decorators';


@controller('/auth')
class LoginController {
    // GET to /login
    @get('/login')
    getLogin(req: Request, res: Response): void {
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
    }

    // POST to /login
    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
        const { email, password } = req.body;
        if(email === 'hi@hi.com' && password === 'pw') {
            // mark person as logged in. Have a session with the value of loggedIn as true
            req.session = { loggedIn: true }
            // redirect to root dir
            res.redirect('/');

        } else {
            res.send('Invalid credentials');
        }
    }

    // GET to /logout
    @get('/logout')
    getLogout(req: Request, res: Response) {
        // reset session
        req.session = undefined;
        // redirect to root dir
        res.redirect('/');
    }
}