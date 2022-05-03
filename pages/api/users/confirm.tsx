import client from '@libs/server/client'
import { withIronSessionApiRoute } from 'iron-session/next'
import withHandler, { ResponseType } from '@libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'

async function confirm (req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { token } = req.body
  let result = await client.token.findUnique({
     where : {
        payload : token
     },
     //include : {user : true} // --> token과 user가 연관관계에 있기 때문에 token과 연결된 user 객체를 불러올 수 있음.
   })
   if(result){
     req.session.user = {
       id : result?.userId
     }
     await req.session.save()
     
     res.status(200).json({ok : true})
   }else{
     res.status(404).json({ok : false})
   }
   console.log(req.session)
}
export default withIronSessionApiRoute(withHandler('POST', confirm), {
  cookieName : "carrotSession",
  password : "789456123asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasfsafasdfas44564564s65d4a6s4d56s4d654a56sd4as564d654"
})
