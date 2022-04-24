"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
// middleware to validate request body
function bodyValidators(keys) {
    return function (req, res, next) {
        // if no req.body
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        // iterate through all keys and check if they're present on req.body
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send('Invalid request');
                return;
            }
        }
        // if body is valid
        next();
    };
}
// decorator factory function to look up metadata in every method 
// and handle it using a route prefix
function controller(routePrefix) {
    // target = constructor
    return function (target) {
        // create or get express router
        var router = AppRouter_1.AppRouter.getInstance();
        // for every method (route handler) in class look up path metadata
        for (var key in target.prototype) {
            // get route handler
            var routeHandler = target.prototype[key];
            // extract path, method, middlewares, bodyValidator metadata from each method (route hadler)
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];
            var requiredBodyProps = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, target.prototype, key) || [];
            var validator = bodyValidators(requiredBodyProps);
            // if a path is found call router.method(routePrefix + path, middlwares, validator, routeHandler)
            if (path) {
                router[method].apply(router, __spreadArray(__spreadArray(["".concat(routePrefix).concat(path)], middlewares, false), [validator, routeHandler], false));
            }
        }
    };
}
exports.controller = controller;
