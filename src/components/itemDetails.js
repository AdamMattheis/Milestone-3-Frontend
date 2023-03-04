import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Paypal from "./purchase";

function ItemDetails() {

	const { id } = useParams()

	const navigate = useNavigate()

	const [item, setItem] = useState(null)

	const [checkout, setCheckOut] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`https://prime-picks.herokuapp.com/items/${id}`)
			const resData = await response.json()
			setItem(resData)
		}
		fetchData()
	}, [id])

	if (item === null) {
		return <h1>Loading</h1>
	}

	function editItem() {
		navigate(`/items/${id}/edit`)
	}

	async function deleteItem() {
		await fetch(`https://prime-picks.herokuapp.com/items/${id}`, {
			method: 'DELETE'
		})
		navigate('/items')
	}

	return (
		<main className="iPage">
			<div className="text-center" >
				<div className="iPage">
                    <h1>
                        <img src={item.picture} width="200" height="200"/>
                    </h1>
					<h1>
					    {item.name}
					</h1>
				</div>
				<div className="iPage3" >
					<p>
						Price:   {item.price}
					</p>
					
					<br />
					<p>
						Description:   {item.description}
					</p>
					<br />
                        Seller:   {item.user}
					<br />
					<br />
					<div>
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
					<br />
					<br />
					<button className="NewMovieButton" onClick={editItem}>
						Edit
					</button>
					<button type="submit" className="NewMovieButton" onClick={deleteItem}>
						Delete
					</button>
				</div>
			</div>
			<hr />
            <div>
                <a href='/items' >
                    <button className='NewMovieButton'>
                        Back
                    </button>
                </a>
            </div>
		</main>
	)
}

export default ItemDetails