const authRouter= require('../api/server');
const request=require('supertest');
const usersModel= require('../users/users-model');
const db= require('../database/dbConfig');

beforeEach(async () => {
    await db('users').truncate();
  });

  
// register

describe('register endpoint', () => {
    describe('post request', () => {

        //test 1
        it('should return successful post response', async () => {
            const expectedStatusCode= 201;

            const response= await request(authRouter).post('/api/auth/register').send({username: "gourd", password: "halloween1"});

            expect(response.status).toEqual(expectedStatusCode);
        })
        
        //test 2
        it('should resolve to new user', async () => {
            const userData= { username: "gourd", password: "halloween1" };
            const newUser= await usersModel.add(userData);
    
            expect(newUser).toEqual([{ id: 1, password: userData.password, username: userData.username}]) 
        })
    })
    })

//login
    
describe('login endpoint', () => {
    describe('post request', () => {

        //test 1
        it('should return successful post response', async () => {
            const expectedStatusCode= 200;
            
            await request(authRouter).post('/api/auth/register').send({username: "gourd", password: "halloween1"});
            const response= await request(authRouter).post('/api/auth/login').send({ username: "gourd", password: "halloween1" });

            expect(response.status).toEqual(expectedStatusCode);

            console.log(response);

        })
        
    //     //test 2
    //     it('should return welcome page', async () => {
    //        return request(authRouter)
    //        .get('/')
    //        .then(res => {
    //            expect(res.type).toBe('application/json');
    //            expect(res.body).toEqual(status(200).json.message) //this feels wrong
    //        })

    //     })
    })
    })