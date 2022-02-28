export default async function handler(req, res) {
  const response = await fetch(
    "https://next-swr-thiniulian.vercel.app/api/test"
  );
  const data = await response.json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=60, stale-if-error=600"
  );

  res.status(response.ok ? 200 : 500).json(data);
}
