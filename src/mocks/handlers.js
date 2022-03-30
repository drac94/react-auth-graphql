import jwt from 'jsonwebtoken';
import { graphql } from 'msw';

const api = graphql.link('http://localhost:5000');

const JwtSecret = 'jkdhflkjhsd';
const JwtLifeTime = '20m';

const createToken = (userId) =>
  new Promise((resolve, reject) => {
    jwt.sign(
      {
        userId,
      },
      JwtSecret,
      {
        expiresIn: JwtLifeTime,
      },
      (error, token) => {
        if (error) {
          reject(error);
        }

        resolve(token);
      }
    );
  });

export const handlers = [
  api.mutation('Login', async (req, res, ctx) => {
    const { email, password } = req.variables;

    if (email !== 'john.doe@gmail.com' || password !== '123456') {
      return res(
        ctx.errors([
          {
            message: 'The username and/or password you entered is incorrect.',
          },
        ])
      );
    }

    const userId = '623e4902515ee8bdb4553599';

    const token = await createToken(userId);

    console.log(token);

    return res(
      ctx.data({
        login: {
          user: {
            __typename: 'User',
            id: userId,
            email,
            firstName: 'John',
            lastName: 'Doe',
          },
          token,
        },
      })
    );
  }),
];
