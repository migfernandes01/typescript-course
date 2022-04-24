"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
// function to bind methods to each decorator function
function routeBinder(method) {
    // factory decorator to associate path of GET using metadata 
    return function (path) {
        return function (target, key, desc) {
            // define a 'path' metadata with value of path arg, on the method 'key' of class 'target'
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            // define a 'method' metadata with value of method arg, on the method 'key' of class 'target'
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
// export pre configured functions with method names
exports.get = routeBinder(Methods_1.Methods.get);
exports.post = routeBinder(Methods_1.Methods.post);
exports.put = routeBinder(Methods_1.Methods.put);
exports.del = routeBinder(Methods_1.Methods.del);
exports.patch = routeBinder(Methods_1.Methods.patch);
