import { Request } from 'express';
import { InvalidParameterError } from '../error/InvalidParameterError';

export const testInvalidParameters = (parameters: Array<string>, request: Request) => {
    parameters.forEach(parameter => {
        if(!request.body[parameter])
            throw new InvalidParameterError(parameter);
    });
}