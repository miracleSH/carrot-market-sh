import client from '@libs/server/client'
import withHandler, { ResponseType } from '@libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import twilio from 'twilio'

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { phone, email } = req.body
  const userInfo = phone ? { phone } : email ? { email } : null
  if (!userInfo) {
    return res.status(400).json({
      ok: false,
    })
  }
  const payload = String(Math.floor(100000 + Math.random() * 900000))
  try {
    const token = await client.token.create({
      data: {
        payload,
        user: {
          connectOrCreate: {
            where: {
              ...userInfo,
            },
            create: {
              ...userInfo,
              name: 'Anonymous',
            },
          },
        },
      },
    })
    /* if (phone) {
      await twilioClient.messages.create({
        messagingServiceSid: process.env.TWILIO_SERVICE_SID,
        to: '+821026747996',
        body: `Your login token is ${payload}`,
      }).then(message => console.log(message))
    } */
  } catch (error) {
    console.log(error)
  }

  return res.json({
    ok: true,
  })
}

export default withHandler('POST', handler)
