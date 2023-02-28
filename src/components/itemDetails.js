import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function ItemDetails() {

	const { id } = useParams()

	const navigate = useNavigate()

	const [item, setItem] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/items/${id}`)
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
		await fetch(`http://localhost:3000/items/${id}`, {
			method: 'DELETE'
		})
		navigate('/items')
	}

	return (
		<main className="moviesPage">
			<div className="text-center" >
				<div className="moviesPage">
                    <h1>
                        <img src={item.picture} width="200" height="200"/>
                    </h1>
					<h1>
					    {item.name}
					</h1>
				</div>
				<div className="moviesPage3" >
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