const { createContext, useState } = require("react");

const AuthContext = createContext()

export default AuthContextProvider = ({children})=>{

    const [user, setUser]= useState(null)
    const [isLoading, setIsLoaing] = useState(false)
    const [error, setError] = useState(null)

    const handleSigninWithGoogle =()=>{
        // TODO


    }

    const handleSignOut= ()=>{
        // TODO
    }


    return <AuthContextProvider value = {{user, isLoading, error, handleSigninWithGoogle, handleSignOut }}>
        {children}
    </AuthContextProvider>
}


export const useAuth = ()=>useContex(AuthContext)