export default async function handler(req, res) {
  try {
    const data = await (
      await fetch("https://gh-frontend-stg.bmj.com/api/test")
    ).json();

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59, stale-if-error=240"
    );

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ failed });
  }
}
