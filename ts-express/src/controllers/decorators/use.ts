import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys';

// factory decorator function to add a middleware metadata
export function use(middleware: RequestHandler) {
    return function(target: any, key: string, desc: PropertyDescriptor ) {
        // extract middlewares metadata or start an empty array
        const middlewares = Reflect.getMetadata(
            MetadataKeys.middleware, 
            target,
            key
        ) || [];

        // push new middleware to middlewares array
        middlewares.push(middleware);
        
        // define new middleware metadata with middlewares array
        Reflect.defineMetadata(
            MetadataKeys.middleware,
            middlewares,
            target,
            key
        )
    }
}