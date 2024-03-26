import { useEffect, useState } from "react";
import {MENU_URL} from "./contsant";

const useMenuData=(id)=>{
    
    const[resInfo,setresInfo]=useState(null);
    
    useEffect(()=>{
        fetchMenu()
    },[]);
    
    const fetchMenu = async ()=>{
        const val= await fetch(MENU_URL+id);
        const json= await val.json();

        // console.log(json);
        setresInfo(json);
    }
    return resInfo;
}

export default useMenuData;