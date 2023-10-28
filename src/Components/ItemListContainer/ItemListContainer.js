import {useState, useEffect} from "react"
import "./ItemListContainer.css"
import Products from "../Json/Products.json"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


function ItemListContainer() {

  const [item, setItem] = useState ([])
  const {id} = useParams ()


  useEffect ( () =>{
    const fetchData = async () =>{
      try{
        const data = await new Promise ((resolve)=>{
          setTimeout (()=>{
            resolve (id ? Products.filter((item) => item.categoria === id) : Products )
          },2000)
        })
        setItem (data)
      } catch (error){
        console.log ("Existe un error", error)
      }
    }

    fetchData ()

  }, [id] )


  return (
    <div>
      <div>

    <ItemList item = {item}/>

      </div>

    </div>
  )
}

export default ItemListContainer
