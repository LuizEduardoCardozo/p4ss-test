import request from 'supertest';

export function post(app: any, url: string, body: any): any {
  
  const httpRequest = request(app).post(url);

  httpRequest.send(body);
  httpRequest.set('Accept', 'application/json');
  
  return httpRequest;
}