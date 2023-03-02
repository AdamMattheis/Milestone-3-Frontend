import React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router";

const Items = () => {

    const navigate = useNavigate()
    
    const [items, setItems] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/items`)
            const resData = await response.json()
            setItems(resData)
        }
        fetchData()
    }, [])

    let itemsFormatted = items.map((item) => {
		return (
			<div className='flex' key={item.id}>
                
				<img src={item.picture} width="200" height="200"/>

				<h2>
                    <div className='detailsButton'>
                        <button className='detailsButton' onClick={() => navigate(`/items/${item._id}`)} > 
                            {item.name}
                        </button> 
                    </div>
				</h2>
                
				<p className='text-center'>
					Price: {item.price}
				</p>
                <p className='text-center'>
				    Description: {item.description}
				</p>
				<p className='text-center'>
				    Seller: {item.user}
                    
				</p>
                <a href='/user/purchase' >
                    <button className='NewMovieButton'>
                        Purchase
                    </button>
                </a>
			</div>
		)
	})


  return (
    <main>
        <div className='title'>
            <a href='/'>
                <button className='title'>
                    PRIME PICKS
                </button>
            </a>
        </div>
        <hr />
        <div className='itemsPage'>
            <div>
                <a href='/items/new' >
                    <button className='NewMovieButton'>
                        New Item
                    </button>
                </a>
            </div>
            <div>
                <a href='/user/account' >
                    <button className='NewMovieButton'>
                        Account
                    </button>
                </a>
            </div>
            <div>
                <a href='/user/login' >
                    <button className='NewMovieButton'>
                        Login
                    </button>
                </a>
            </div> 
            <div>
                <a href='/user/signup' >
                    <button className='NewMovieButton'>
                        Sign Up
                    </button>
                </a>
            </div>
            
        </div>
        <div className='itemsPage'>
            {itemsFormatted}
        </div>
    </main>
  )
}

export default Items