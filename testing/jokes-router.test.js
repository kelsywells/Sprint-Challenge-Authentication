// const request= require('supertest');
// const jokesRouter= require('../api/server');

// describe('jokesRouter', () => {

//     describe('get request', () => {

//         //test 1
//         it('should return success status', async () => {
//             const expectedStatusCode= 200;

//             const response = await request(jokesRouter).get('/api/jokes');

//             expect(response.status).toEqual(expectedStatusCode);
//         })


//         //test 2
//         it('should return jokes', () => {
//             const jokes=(response.data.results) //jokesRouter response.data.results ?

//             const response= await request(jokesRouter).get('/');

//             expect(response.body).toEqual(jokes)
//         })
//     })
// })