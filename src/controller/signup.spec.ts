import app from '../app';
import { InvalidParameterError } from '../error/InvalidParameterError';
import { post } from '../helper/httpTestingRequest';

describe('signup controller', () => {
    
    it('should return a status code when call a route', async () => {
    
        const body = {
            email: 'any@mail.com',
            password: 'Str0ngP4sSworD',
        }
        
        const response = await post(app, '/signup', body);
        expect(response).toHaveProperty('statusCode');
    });


    it('should return error when call with empty email', async () => {
    
        const body = {
            password: 'Str0ngP4sSworD',
        }

        const response = await post(app, '/signup', body);
        const error = new InvalidParameterError('email'); 

        expect(response.error.status).toBe(error.getStatusCode());
        expect(response.error.text).toBe(JSON.stringify(error.getBody()));
    });


    it('should return error when call with empty password', async () => {
    
        const body = {
            email: 'any@mail.com'
        }

        const response = await post(app, '/signup', body);
        const error = new InvalidParameterError('password'); 

        expect(response.error.status).toBe(error.getStatusCode());
        expect(response.error.text).toBe(JSON.stringify(error.getBody()));
    });

    
    it('should return error when call with an invalid email', async () => {
    
        const body = {
            email: 'invalid.email.com',
            password: 'Str0ngP4sSworD',
        }

        const response = await post(app, '/signup', body);
        const error = new InvalidParameterError('invalid email format'); 

        expect(response.error.status).toBe(error.getStatusCode());
        expect(response.error.text).toBe(JSON.stringify(error.getBody()));
    });

});
