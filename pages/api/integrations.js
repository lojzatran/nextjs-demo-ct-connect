// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  const response = await fetch(`${process.env.CONNECT_API_URL}/integrations`)
  const responseJson = await response.json()
  res.status(200).json(responseJson)
}
