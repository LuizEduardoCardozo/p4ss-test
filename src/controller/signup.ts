import { Request, Response } from 'express';
import { testInvalidParameters } from '../helper/testInvalidParameters';

function signup(req: Request, res: Response, nxt: any): any {

    try {
        
        testInvalidParameters(['email', 'password'], req);
        
        const { email, password } = req.body;

        return res.status(200).json({ email, password });

    } catch (err) {
        nxt(err);
    }


}

export default { signup }