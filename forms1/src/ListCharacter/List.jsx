import React from 'react'
import "./List.css"
//creo éste componente para que me pinte el listado de personajes 
const List = ({characterList}) => {
    return (

        <div className='box'>
        <h2>Lista de registros</h2>

            {characterList.map((characterItem) => {
                return ( 
                    <div className="list-p">
                        <p>Name: {characterItem.name}</p>
                        <p>SurName: {characterItem.surName}</p>
                        <p>Location: {characterItem.locatiom}</p>
                        {/* <p>Name: {characterItem.name}</p> */}

                    </div> ) 
        })}

        </div>
    )
}

export default List
