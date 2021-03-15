import express, { Response, Request } from 'express';


const app = express();

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'hello world'})
})


app.listen(3334, () => {
  console.log('app rolando');
});

