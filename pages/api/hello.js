import { date } from "../../cfg";
export default function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59, stale-if-error=240"
  );
  const shouldError = new Date() - new Date(date) > 3 * 1000 * 60;
  res.status(shouldError ? 404 : 200).json({ name: `John Doe ${shouldError}` });
}
