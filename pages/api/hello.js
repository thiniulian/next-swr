export default async function handler(req, res) {
  const response = await fetch(
    "https://next-swr-thiniulian.vercel.app/api/test"
  );
  const data = await response.json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59, stale-if-error=240"
  );

  res.status(response.ok ? 200 : 500).json(data);
}
