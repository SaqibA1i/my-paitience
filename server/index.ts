import express, { Express, Request, Response } from 'express';
const dotenv = require('dotenv');
import dao from './repositories/dao';
import routes from './routes/routes';

dotenv.config();

const app: Express = express();
const port = 8000;

app.get("/", (req: Request, res: Response, next) => {
  res.json({ "message": "Ok" });
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

//  Script to setup sqlite DB in memory //
dao.setupDbForDev();
////////////////////////////////////

app.use('/api', routes);

// Default response for any other request
app.use(function (req, res) {
  res.status(404);
});

