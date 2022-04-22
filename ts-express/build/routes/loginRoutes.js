"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
// router for a get to /login (render a login form)
router.get('/login', (req, res) => {
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
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'pw') {
        // mark person as logged in. Have a session with the value of loggedIn as true
        req.session = { loggedIn: true };
        // redirect to root dir
        res.redirect('/');
    }
    else {
        res.send('Invalid credentials');
    }
});
// GET to /
router.get('/', (req, res) => {
    // person is logged in
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You are logged in</div>
            </div>
            <a href="/logout">Logout</a>
        `);
    }
    else {
        res.send(`
            <div>
                <div>You are logged out</div>
            </div>
            <a href="/login">Login</a>
        `);
    }
});
