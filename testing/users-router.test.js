const request= require('supertest');
const usersRouter= require('../api/server');
const db= require('../database/dbConfig');

describe('userRouter', async () => {

    describe('get request', async () => {

        // test 1
        it('should return successful status response', () => {
            const expectedStatusCode= 200;

            const response= await request(usersRouter).get('/api/users');

            expect(response.status).toEqual(expectedStatusCode);
        })

        //test 2
        it('should return list of users', async () => {
            const users= await db('users') 
            return request(usersRouter)
            .get('/api/users')
            .then(res => {
                expect(res.body).toEqual(users)
            })
        })
    })
})