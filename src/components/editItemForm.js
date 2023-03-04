import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"

function EditItemForm() {

	const navigate = useNavigate()

    const { id } = useParams()

    const [item, setItem] = useState({
		name: '',
		price: '',
		description: '',
		picture: ''
	})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`https://prime-picks.herokuapp.com/items/${id}`)
			const resData = await response.json()
			setItem(resData)
		}
		fetchData()
	}, [id])

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/items/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
            
		});
        
        

		navigate(`/items/${id}`)
	}

	return (
		<main className="iPage2" >
			<h1>Edit Item</h1>
			<form onSubmit={handleSubmit}>
				<div className="iPage22">
					<label htmlFor="name">Item Name</label>
					<input
						required
						value={item.name}
						onChange={e => setItem({ ...item, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="iPage22">
					<label htmlFor="price">Price</label>
					<input
						required
						value={item.price}
						onChange={e => setItem({ ...item, price: e.target.value })}
						className="form-control"
						id="price"
						name="price"
					/>
				</div>
				<div className="iPage22">
					<label htmlFor="description">Description</label>
					<input
						value={item.description}
						onChange={e => setItem({ ...item, description: e.target.value })}
						className="form-control"
						id="description"
						name="description"
					/>
				</div>
				<div className="iPage22">
					<label htmlFor="picture">Picture</label>
					<input
						value={item.picture}
						onChange={e => setItem({ ...item, picture: e.target.value })}
						className="form-control"
						id="picture"
						name="picture"
					/>
				</div>
				<input className="NewMovieButton" type="submit" value="Save" />
			</form>
		</main>
	)
}

export default EditItemForm