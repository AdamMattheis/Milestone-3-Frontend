import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import Paypal from "./purchase";


const Items = () => {

    const navigate = useNavigate()
    
    const [items, setItems] = useState([])

    const [checkout, setCheckOut] = useState(false)

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`https://prime-picks.herokuapp.com/items`)
            const resData = await response.json()
            setItems(resData)
        }
        fetchData()
    }, [])

    let itemsFormatted = items.map((item) => {
		return (
			<div className='flex' key={item.id}>
                
                <div className='itemsPage'>
                    <img src={item.picture} width="200" height="200"/>
                </div>
				

				<h2>
                    <div className='detailsButton'>
                        <button className='detailsButton' onClick={() => navigate(`/items/${item._id}`)} > 
                            {item.name}
                        </button> 
                    </div>
				</h2>
                
				<p className='itemsPage'>
					<b>$ {item.price}</b>
				</p>
                <p className='text-center'>
				   <b> Description: </b> {item.description}
				</p>
				<p className='text-center'>
				    <b>Seller: </b>{item.user}
                    
				</p>
                <div className='itemsPage'>
						{checkout ? (
							<Paypal />
						) : (
						<button className="NewMovieButton"
							onClick={() => {
								setCheckOut(true);
							}}
							>
							Purchase
						</button>
						)}
				</div>
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
            {/* <div>
                <a href='/user/login' >
                    <button className='NewMovieButton'>
                        Login
                    </button>
                </a>
            </div>  */}
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