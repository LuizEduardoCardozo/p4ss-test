import { Request } from 'express';
import { InvalidParameterError } from '../error/InvalidParameterError';
import { isValidEmail } from './isValidEmail';

export const testInvalidParameters = (parameters: Array<string>, request: Request) => {
    parameters.forEach(parameter => {
        if(!request.body[parameter])
            throw new InvalidParameterError(parameter);
    });

    if(!isValidEmail(request.body.email))
        throw new InvalidParameterError('invalid email format');

}