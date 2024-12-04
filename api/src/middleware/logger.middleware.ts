import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const methodColor = "\x1b[34m"; // blue
  const urlColor = "\x1b[32m"; // green
  const resetColor = "\x1b[0m"; // reset

  console.log(
    `${methodColor}${req.method}${resetColor} ${urlColor}${req.url}${resetColor}`
  );

  next();
};
