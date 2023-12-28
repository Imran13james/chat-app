import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        dark:bg-gray-900 lg:bg-white 
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 
          className="
          mt-6 
          text-center 
          text-3xl 
          font-bold 
          tracking-tight 
          text-gray-900
          dark:text-gray-100
          bg-white
          dark:bg-gray-900
          hover:text-yellow-500
          hover:bg-gradient-to-r
          hover:from-red-500
          hover:to-yellow-500
          hover:bg-clip-text
          hover:text-transparent

          "
          >
            Sign in to your account
        </h2>
      </div>
      <AuthForm />      
  </div>
  )
}

export default Auth;
