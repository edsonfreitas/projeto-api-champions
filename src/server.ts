import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({player: "Beckham"});
});

app.listen(PORT, () => {
  console.log(`🔥 Server is running on port ${PORT}`);
});
