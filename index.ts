import express, { Request, Response } from "express";

import Email from  "./Routes/Email"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/email" , Email)

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({message:  "App Running written in Ts"});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
