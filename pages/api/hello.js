import { error } from "../../cfg.js";
export default function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  res.status(error ? 500 : 200).json({ name: `John Doe ${error}` });
}
