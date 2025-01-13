'use client'

import API from "./API";

export default function Home() {

  const handleLogIn = async () =>{
    const FACEBOOK_APP_ID = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
    const REDIRECT_URI = `${window.origin}/select-group`;
    
    const facebookAuthUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${FACEBOOK_APP_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
    window.location.href = facebookAuthUrl
    API.get('auth/login/')
  }

  return (
    <div className="md:px-[30%]">
      <button 
        onClick={()=>handleLogIn()} 
        className="bg-blue-600 rounded-lg text-white font-bold p-3 md:w-1/2 w-3/4 mx-auto flex justify-center md:my-[50%] my-[70%]"
      >
        Iniciar sesión
      </button>
    </div>
  );
}
