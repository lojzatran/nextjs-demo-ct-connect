import {getApiRoot} from '../../lib/ctp/client.js'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const body = req.body
    const apiRoot = await getApiRoot()
    const ctpResponse = await apiRoot.login().post({
      body: {
        email: body.username,
        password: body.password
      }
    }).execute()
    res.status(ctpResponse.statusCode).json(ctpResponse.body)
  } else {
    res.status(405).send('')
  }
}
