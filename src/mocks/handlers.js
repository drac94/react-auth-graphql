import jwt from 'jsonwebtoken';
import { graphql } from 'msw';

const api = graphql.link('https://api.mysite.com');

const PK = process.env.REACT_APP_USERFRONT_PUBLIC_KEY;

const getDecodedToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, PK, (error, decoded) => {
      if (error) {
        reject(error);
      }

      resolve(decoded);
    });
  });

export const handlers = [
  api.query('GetTodos', async (req, res, ctx) => {
    const authHeader = req.headers._headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      // 401
      return res(
        ctx.errors([
          {
            message: 'No access (401).',
          },
        ])
      );
    }
    // Verify the token using the Userfront public key
    try {
      await getDecodedToken(token);
      return res(
        ctx.data({
          getTodos: [{ id: '1', title: 'hello world' }],
        })
      );
    } catch (error) {
      return res(
        ctx.errors([
          {
            message: 'No access (403).',
          },
        ])
      );
    }
  }),
];
