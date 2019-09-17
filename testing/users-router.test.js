const request= require('supertest');
const usersRouter= require('../api/server');
const db= require('../database/dbConfig');

// describe('userRouter', () => {

//     describe('get request', () => {

        //test 1
        // it('should return status 200 response', () => {
        //     const expectedStatusCode= 200;

        //     const response= await request(usersRouter).get('/api/users');

        //     expect(response.status).toEqual(expectedStatusCode);
        // })

        // //test 2
        // it('should return list of users', () => {
        //     const users= await db('users') 
        //     return request(usersRouter)
        //     .get('/')
        //     .then(res => {
        //         expect(res.type).toBe('application/json');
        //         expect(res.body).toEqual(users)
        //     })
//         })
//     })
// })