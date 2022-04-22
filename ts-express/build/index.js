"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
// initialize express
const app = (0, express_1.default)();
// body-parser middleware (adds a body to the request object)
app.use(body_parser_1.default.urlencoded({ extended: true }));
// cookieSession middleware (adds  to the request body)
app.use((0, cookie_session_1.default)({ keys: ['key'] }));
// user router
app.use(routes_1.router);
// listen on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
