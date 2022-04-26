import { NextApiRequest, NextApiResponse } from 'next'

export default function withHandler(httpMethodType: 'GET' | 'POST' | 'PUT' | 'DELETE', fn: (req: NextApiRequest, res: NextApiResponse) => void) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== httpMethodType){
      return res.status(405).end()
    }

    try {
      await fn(req, res)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
