import { errorNormalizer } from "../helper/errorNormalizer";
import { Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, nxt: any) => {

    if(res.headersSent) {
        return nxt(err);
    }

    const error = errorNormalizer(err);

    const statusCode = error.getStatusCode();
    const body = error.getBody();

    res.status(statusCode).send(body);

}