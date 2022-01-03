import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication()


const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    
    //new User
    
    const registerUser = (email, password) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
            setAuthError('')
        })
        .catch(err =>{
            setAuthError(err.message)
        })
        .finally(()=>setIsLoading(false))
    }
    
    //exesting user
        const loginUser = (email, password)=>{
            setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                   console.log(result.user)
                   setAuthError('')
                })
                .catch((error) => {
                    setAuthError(error.message)
                })
                .finally(()=>setIsLoading(false));
        }
    
    //observer
    
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unsubscribe;
    },[])
    
    //logout
        const logOut = () =>{
            setIsLoading(true)
            signOut(auth)
            .then(()=>{
                setAuthError('')
            })
            .catch(err =>{
                setAuthError(err.message)
            })
            .finally(()=>setIsLoading(false))
        }
    
        return{
            user,
            registerUser,
            loginUser,
            authError,
            isLoading,
            logOut
    
        }
}
export default useFirebase