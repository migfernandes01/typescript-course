"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
// middleware to check user's authentication
function requireAuth(req, res, next) {
    // if user is logged in
    if (req.session && req.session.loggedIn) {
        return next();
        return;
    }
    res.status(403);
    res.send('Not allowed');
}
var router = (0, express_1.Router)();
exports.router = router;
// GET to /
router.get('/', function (req, res) {
    // person is logged in
    if (req.session && req.session.loggedIn) {
        res.send("\n            <div>\n                <div>You are logged in</div>\n            </div>\n            <a href=\"/logout\">Logout</a>\n        ");
    }
    else {
        res.send("\n            <div>\n                <div>You are logged out</div>\n            </div>\n            <a href=\"/login\">Login</a>\n        ");
    }
});
// GET to /logout
router.get('/logout', function (req, res) {
    // reset session
    req.session = undefined;
    // redirect to root dir
    res.redirect('/');
});
// GET to /protected, passing on requireAuth middleware first
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route!');
});
