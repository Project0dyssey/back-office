import { FilterProducts } from "@/mongodb/curd";
import { NextApiRequest, NextApiResponse } from "next";
const cors = require('cors')
cors({origin: true, credentials: true})

export default async(req: NextApiRequest, res: NextApiResponse) => {
  const {category, collection} = req.body
    try {
        const result = await FilterProducts(category, collection)
        res.status(200).json({result: result})
    } catch (error) {
        res.status(400).json({result: 'Error'})
    }
}