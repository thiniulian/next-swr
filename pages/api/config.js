import fs from "fs";
import path from "path";
export default function handler(req, res) {
  fs.writeFileSync(
    path.resolve(process.cwd(), "./cfg.js"),
    `export const error=${req.query.erroring}`
  );
  res.status(200).json({ name: "John Doe" });
}
