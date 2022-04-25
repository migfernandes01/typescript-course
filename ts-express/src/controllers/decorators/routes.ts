import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

// new interface to make sure the descriptor is applied in a method that has
// an optional property descriptor value of RequestHandler
interface RouteHandlerDescriptor extends PropertyDescriptor {
    value?: RequestHandler;
}

// function to bind methods to each decorator function
function routeBinder(method: string) {
    // factory decorator to associate path of GET using metadata 
    return function (path: string) {
        return function(target: any, key: string, desc: RouteHandlerDescriptor) {
            // define a 'path' metadata with value of path arg, on the method 'key' of class 'target'
            Reflect.defineMetadata(MetadataKeys.path, path, target, key);
            // define a 'method' metadata with value of method arg, on the method 'key' of class 'target'
            Reflect.defineMetadata(MetadataKeys.method, method, target, key);
        };
    }
}

// export pre configured functions with method names
export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
