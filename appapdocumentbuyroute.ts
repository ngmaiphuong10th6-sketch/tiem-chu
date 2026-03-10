import {connectDB} from "@/lib/mongodb"
import crypto from "crypto"

export async function POST(req){

const {documentId,userId} = await req.json()

const db = await connectDB()

const accessCode = crypto.randomBytes(5)
.toString("hex")

await db.collection("orders").insertOne({

documentId,
userId,
accessCode

})

return Response.json({

accessCode

})

}