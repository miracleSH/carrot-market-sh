import client from '@libs/server/client'
import withHandler, {ResponseType} from '@libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'

const confirm = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const { token } = req.body
  // let  dbToken = await client.token.findUnique({
  //   where : {
      
  //   }
  // })
  console.log("token : " + token)
  res.status(200).end()
}
export default withHandler('POST', confirm)
