import { ApiError } from "@middlewares/ApiError";
import httpCode from "http-status-codes";

export const CreateUserService = async (name: string) => {
  if (!name) {
    throw new ApiError(httpCode.NOT_FOUND, "Name required!");
  }

  return {name};
};
