// const request= require('supertest');
// const jokesRouter= require('../api/server');
// const authRouter= require('../api/server');
// const db= require('../database/dbConfig');

// beforeEach(async () => {
//     await db('users').truncate();
//   });


// describe('jokesRouter', () => {

//     describe('get request', () => {

//         //test 1
//         it('should return success status', async () => {
//             const expectedStatusCode= 200;

//             //receives 401 error due to no user login
            
//             const response = await request(jokesRouter).get('/api/jokes');

//             expect(response.status).toEqual(expectedStatusCode);
//         })


//         //test 2
//         it('should return jokes', async () => {
//             const jokes=(data.results)  //data.results?

//             const response= await request(jokesRouter).get('/api/jokes');

//             expect(response.body).toEqual(jokes)
//         })
//      })
// })