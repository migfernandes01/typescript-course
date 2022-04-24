import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { NextFunction, RequestHandler, Request, Response } from 'express';

// middleware to validate request body
function bodyValidators(keys: string): RequestHandler {
    return function(req: Request, res: Response, next: NextFunction) {
        // if no req.body
        if(!req.body) {
            res.status(422).send('Invalid request');
            return;
        }

        // iterate through all keys and check if they're present on req.body
        for (let key of keys) {
            if(!req.body[key]) {
                res.status(422).send('Invalid request');
                return;
            }
        }

        // if body is valid
        next();
    }
}

// decorator factory function to look up metadata in every method 
// and handle it using a route prefix
export function controller(routePrefix: string) {
    // target = constructor
    return function(target: Function) {
        // create or get express router
        const router = AppRouter.getInstance();

        // for every method (route handler) in class look up path metadata
        for (let key in target.prototype) {
            // get route handler
            const routeHandler = target.prototype[key];
            // extract path, method, middlewares, bodyValidator metadata from each method (route hadler)
            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];

            const validator = bodyValidators(requiredBodyProps);

            // if a path is found call router.method(routePrefix + path, middlwares, validator, routeHandler)
            if(path) {
                router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
            }
        }
    };
}