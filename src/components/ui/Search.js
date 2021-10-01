import React,{useState} from 'react'

const Search = ({getQuery}) => {
    const[text,setText] =useState('')


    const onChange=(e) =>{
        e.preventDefault()
        const event =e.target.value
        setText(event)
        getQuery(event)
    }


    return (
        <section className='search'>
                <input type='text' className='form-control' 
                placeholder='Search characters'
                value={text}
                onChange={(e) =>onChange(e)}
                autoFocus     
                />    
        </section>
    )
}

export default Search
