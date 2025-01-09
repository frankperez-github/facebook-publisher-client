'use client'

import API from "./API";

export default function Home() {

  const handleLogIn = async () =>{
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
