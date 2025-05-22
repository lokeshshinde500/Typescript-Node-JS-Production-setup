import { Request, Response } from "express";
import httpCode from "http-status-codes";
import * as userService from "@services/user.service";
import catchAsync from "@middlewares/asyncHandler";

export const createUser = catchAsync(async (req: Request, res: Response) => {
  const data = await userService.CreateUserService(req.body.name);
  res.status(httpCode.CREATED).json(data);
});
