"use client"

import Link from "next/link";
import { useAuth } from "../../../../lib/contexts/AuthContexts";


const LoginButton = () => {

  const {user, isLoading, error, handleSigninWithGoogle, handleSignOut } = useAuth()
console.log(user)
  if(isLoading){
    return <span> Loading... </span>
  }
  if(user){
    return <div className="flex gap-4 items-center   ">
      <button onClick={()=> handleSignOut()} className="btn btn-active btn-secondary"> Log out </button>
       <Link href={"/admin"}>
      <div className=" flex gap-4 items-center border-2 border-blue-500 bg-blue-200 rounded-lg p-2  ">
        <div className="avatar ">
        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
      </div>

        <div className=" ">
        <p className=" font-extrabold  ">{user.displayName}</p>
        <p>{user.email}</p>
        </div>   
      </div>
      </Link>
    </div>

    

  }


    return (
       <button onClick={()=>{
        handleSigninWithGoogle()
        
       }}  className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
    );
};

export default LoginButton;