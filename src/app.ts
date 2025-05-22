import express, { NextFunction } from "express";
import userRoutes from "@routes/user.routes";
import { errorHandler } from "@middlewares/errorMiddleware";
import { ApiError } from "@middlewares/ApiError";
import httpCode from "http-status-codes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.use((req, res, next: NextFunction) => {
  next(new ApiError(httpCode.NOT_FOUND, `${req.originalUrl} route not found!`));
});

app.use(errorHandler);

export default app;
