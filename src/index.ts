import express, { Request, Response } from "express";

const application = express();

application.get("/", (_request: Request, response: Response) => {
  return response.json({
    message: "OK",
  });
});

application.listen(3000, () => console.log("c'est good !"));
