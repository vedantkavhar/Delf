import { useEffect, useState } from "react";
const useOnline=()=>{
    const [isOnline, setIsOnline]=useState(true);
    useEffect(()=>{
        const handlleOnline=()=>{
            setIsOnline(true);
        };
        const handlleOffline=()=>{
            setIsOnline(false);
        };
        window.addEventListener('online',handlleOnline);
        window.addEventListener('offline',handlleOffline);

        return() =>{
            window.removeEventListener('online', handlleOnline);
            window.removeEventListener('offline',handlleOffline);
        }
    },[])
    return isOnline;
}
export default useOnline;