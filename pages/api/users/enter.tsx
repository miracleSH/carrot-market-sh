import client from '@libs/server/client'
import withHandler from '@libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body
  const payload = phone? {phone : Number(phone)}: {email}
  try {
    const token = await client.token.create({
      data : {
        payload : "4567",
        user : {
          connectOrCreate: {
            where : {
              ...payload
            },
            create : {
              ...payload,
              name : "Anonymous"
            }
          }
        }
      }
    })
  } catch (error) {
    console.log(error)
  }
  return res.status(200).json({ ok: true })
}

export default withHandler('POST', handler)
