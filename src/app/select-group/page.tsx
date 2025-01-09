'use client'
import { useEffect, useState } from "react";
import API from "../API";


export default function SelectGroup (){
    const [loading, setLoading] = useState(true)
    const [groups, setGroups] = useState([])
    const [selectedGroups, setSelectedGroups] = useState([])
    
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    useEffect(()=>{
        API.get('auth/callback?code=' + code)
        .then((response) =>
            {
                localStorage.setItem(response.data.access_token, 'access_token')
                API.get('get-groups').then((response)=>{
                    setGroups(response.data.groups)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error('Error fetching groups for user:', error);
                });
            } 
        )
        .catch((error) => {
            console.error('Error exchanging code for token:', error);
        });
    }, [])

    useEffect(()=>{
        if(selectedGroups.length > 0)
        {
            localStorage.setItem("selectedGroups", JSON.stringify(selectedGroups))
        }
    },[selectedGroups])

    return(
        <div className="">
            {
                loading ?
                <div className="">
                    Cargando...
                </div>
                :
                <div className="">
                    {
                        groups.map((gr:{id:string, name:string})=>(
                            <p key={gr.id}>
                                {
                                    gr.name
                                }
                            </p>
                        ))
                    }
                </div>
            }
        </div>
    )
}