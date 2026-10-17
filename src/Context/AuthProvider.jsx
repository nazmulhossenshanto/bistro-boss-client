import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { AuthContext } from "./AuthContext"
import auth from "../firebase/firebase.init"
import { useEffect, useState } from "react"
import useAxiosPublic from "../hooks/useAxiosPublic"

 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);

            if(currentUser){
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res=> {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false)
                    } 
                })
            }
            else{
                // todo remove token
                localStorage.removeItem('access-token');
                setLoading(false)
            }

            
        });
        return ()=> {
            unSubscribe();
        }
    }, [axiosPublic]);


    const authInfo = {
        user,
        loading,
         createUser,
         signInUser, 
         logOutUser
    }
  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider