import React from 'react'
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
import Products from "../Json/Products.json"
import ItemDetail from '../ItemDetail/ItemDetail'


function ItemDetailContainer() {


    const [item, setItem] = useState ([])
    const {id} = useParams ()
  
  
    useEffect ( () =>{
        const promesa = new Promise ((resolve)=>{
            setTimeout (()=>{
                resolve (Products.find (item => item.id === parseInt(id)))
            },1000)
        })
        promesa.then ((data)=>{
            setItem (data)
        })
  
    }, [id] )




  return (



    <div>

    <ItemDetail item = {item} />


    </div>
  )
}

export default ItemDetailContainer