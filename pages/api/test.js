const date = "2022-02-28T11:10:00";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-cache");
  const shouldError = new Date() - date >= 2 * 60 * 1000;
  res.status(shouldError ? 500 : 200).json({
    date: new Date().toISOString(),
  });
}
