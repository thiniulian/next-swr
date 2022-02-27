export default function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  res
    .status(process.env.SHOULD_ERROR ? 500 : 200)
    .json({ name: `John Doe ${process.env.SHOULD_ERROR}` });
}
