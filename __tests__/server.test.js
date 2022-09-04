'use strict';

const supertest = require('supertest');
const server = require('../server');
const req = supertest(server.app);

describe( 'Server Live', () => {
    it( 'Hello Page', async () => {
        const res = await req.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello World');
    
    });


    it('Person Info', async () => {
        const res = await req.post('/person').query({
            name: 'hamzah', age: 22,
            gender: 'male'
        });


        expect(res.status).toEqual(200);
        expect(res.text).toEqual('27');
    });
}
)