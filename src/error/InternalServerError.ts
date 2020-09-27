import { BaseError } from "./BaseError";

export class InternalServerError extends BaseError {

    constructor() {
        super(500, `Internal Error!`)
    }

}