
import { writeFile, readdir} from "fs/promises";
import path from 'path'

const uploadDir = path.join(process.cwd(), "public", "uploads")

export async function GET(){
    try{
        const files = await readdir(uploadDir)
        const urls = files
        .filter(f => /\.(png|jpe?g|webp|gif|avif)$/i.test(f))
        .map(f =>  `/uploads/${f}`)

        return Response.json(urls)
    }
    catch{
        return Response.json([])
    }
}

export async function POST(req){
    try{
        const form = await req.formData()
        const file = form.get("file")
        const type = file.type || ""
        
        // if(!type.startsWith("image/")){
        //     return Response.json({error: "Uploading Invalid Image"})
        // }
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const filepath = path.join(uploadDir, file.name)

        await writeFile(filepath, buffer)
        return Response.json({message: "Image uploaded"})
    }
    catch{
        return Response.json({error: "Uploading Error on Local"}, {status: 400})
    }
}