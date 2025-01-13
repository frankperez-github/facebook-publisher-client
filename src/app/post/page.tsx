'use client'
import { useState } from "react"

export default function Post()
{
    const [images, setImages] = useState<File[]>([])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e:any) =>{
        const formData = new FormData(e.currentTarget)
        images.map((img)=>{
            formData.append("images", img)
        })
    }
    return(
        <div className="">
            <form onSubmit={handleSubmit}>
                {
                    new Array(images.length+1).map((x, key)=>(
                        <input type="file" key={key} onChange={(e)=>setImages([...images, e.target.files![0]])}/>
                    ))
                }
                <input type="text" name='message' placeholder="Mensaje del post"/>
                <button 
                    className="bg-blue-600 rounded-lg text-white font-bold p-3 md:w-1/2 w-3/4 mx-auto flex justify-center md:my-[50%] my-[70%]"
                >
                    Crear Posts
                </button>
            </form>
        </div>
    )
}