import React from 'react';
import adidasModel1 from '../../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp';
import adidasModel2 from '../../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp';
import adidasModel3 from '../../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp';
import { Link, Route, Routes } from 'react-router-dom';
import { Model } from './Model';

export type AdidasItem= {
    id: number;
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const adidasArr:AdidasItem[] = [
    {   
        id: 1,
        model: 'TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,

    },
    {
        id: 2,
        model: 'SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {   
        id: 3,
        model: 'SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]

export const PageOne = () => {

    
    return (
        <div>
           <h2> ADIDAS</h2>
            <div style={{display: 'flex', justifyContent: 'space-evenly' , marginTop: '30px'}}>
               
               {adidasArr.map((el) => {
                return(
                    <Link to={`/adidas/${el.id}`} style={{width: '30% ', height: 'auto' }}>
                        <img style={{width: '100% ', height: 'auto' }} 
                         src={el.picture} 
                         alt={el.model} /></Link>
                )
               })}
            </div>
        </div>
    );
};

