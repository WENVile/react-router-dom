import React from "react"
import { adidasArr } from "./PageOne"
import { useParams } from "react-router-dom"

export const Model = () => {

    
    const {id} = useParams();

    const currentModel = adidasArr.find(el =>  el.id === Number(id));

   
    return (

        
       
        <div style={{display: 'flex',  flexDirection:'column',  justifyContent: 'center', textAlign: 'center'} }>
            {currentModel 
                ? <> 
                    <div style={{alignSelf: 'center', width: '40% '}}><img style={{width: '100%'}} src={currentModel.picture} alt="" /></div>
                    <h3 style={{alignSelf: 'center'}}>{currentModel.model}</h3>
                    <p style={{alignSelf: 'center'}}>{currentModel.price}</p>
                  </> 
                : <>
                    Нет такой модели
                  </>
        }
            

           
        </div>
    )
}
