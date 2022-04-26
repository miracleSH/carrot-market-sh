import { NextApiRequest, NextApiResponse } from "next";
import client from '../../../libs/server/client'
import withHandler from "../../../libs/server/withHandler";

async function handler(
  req: NextApiRequest, res:NextApiResponse
){
  return res.status(200).json({ok :true})
}

export default withHandler("POST", handler)

