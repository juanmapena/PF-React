import React from 'react'
import Item from '../Item/Item'
import "../NavBar.css"

function ItemList({ item }) {
    return (
        <div >
            <div >

                {
                    item.map(item =>

                        <div
                        
                            key={item.id}>

                            <Item item={item} />


                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ItemList