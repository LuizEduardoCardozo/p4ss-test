import { BaseError } from "../error/BaseError"
import { InternalServerError } from "../error/InternalServerError";

export const errorNormalizer = (error: any): BaseError => {
    if(!(error instanceof BaseError)) {
        return error;
    }
    return new InternalServerError;
}
