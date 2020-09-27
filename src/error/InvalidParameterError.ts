import { BaseError } from "./BaseError";

export class InvalidParameterError extends BaseError {

    constructor(parameter: string) {
        super(400, `Invalid Parameter: ${parameter}`)
    }

}