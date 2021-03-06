import React, { useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from "../header/Header";


const Protected = (props) => {
    let component = props.Component;
    const history = useHistory();

    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
          history.push("/Register");
        }
        

     },[])  

    
        return (
            <div>
            {component}
             
            </div>
        )
    
}

export default Protected ;