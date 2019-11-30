// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//       expect(true).toBe(true)
//     })
//   })

const request = require('supertest');
const app = require('../app');

describe('Insert User EndPoint',() => {

    it('should create a new user',async() => {

        const res = await request(app)
                .post('/user')
                .send({
                    name : 'test',
                    email : 'test@gmail.com',
                    password : '123456'
                })
                .set('Accept', 'application/json');
                
            expect(res.statusCode).toEqual(200);
    })

    it('should fail when insert user field is missing',async() => {
        const res = await request(app)
                        .post('/user')
                        .send({
                            name : 'test',
                            email : 'test@gmail.com'
                        })
                        .set('Accept','application/json')

            expect(res.statusCode).toEqual(422);
            
            expect(res.body.error).toEqual('Invalid Request')
    })


    it('should return list of users',async() => {

        const res = await request(app)
                            .get('/users')

                           
           expect(res.statusCode).toEqual(200);

           expect(res.body.error).toBe(null);
    })
})