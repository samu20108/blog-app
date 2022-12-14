import express from "express";

export class CustomError extends Error {
  status: number;
  viesti: string;
  constructor(status?: number, viesti?: string) {
    super();
    this.status = status || 500;
    this.viesti = viesti || "Server error";
  }
}
const errorHandler = (
  err: CustomError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.status(err.status).json({ viesti: err.viesti });
};

export default errorHandler;
