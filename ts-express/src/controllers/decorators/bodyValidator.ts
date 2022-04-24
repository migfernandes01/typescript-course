import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

// factory decorator function to add metadata for body validation
export function bodyValidator(...keys: string[]) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        // define new metadata 'validator' with array of keys to validate
        Reflect.defineMetadata(
            MetadataKeys.validator,
            keys,
            target,
            key
        );
    }
}
