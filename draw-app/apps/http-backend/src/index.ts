import { CreateUserSchema } from "@repo/common/types";
import { JWT_SECRET } from "@repo/backend-common/config";
import express, { json } from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";

const app = express();

app.post("/signup", (req, res) => {
  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  //db call
  res.json({
    userId: "123",
  });
});

app.post("/signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({ token });
});

app.post("/room", middleware, (req, res) => {
  //db call
  res.json({ roomId: 123 });
});

app.listen(3001);
