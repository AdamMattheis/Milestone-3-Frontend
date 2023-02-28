import { useState } from "react"
import { useNavigate } from "react-router"

function NewItemForm() {

	const navigate = useNavigate()

	const [item, setItem] = useState({
		name: '',
		price: '',
		picture: '',
		user: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/items`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
		})

		navigate('/items')
	}

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
			<h1 className="moviesPage">Add a New Item</h1>
			<form onSubmit={handleSubmit}>
				<div className="moviesPage2">
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
				<div className="moviesPage2">
					<label htmlFor="price">Price</label>
					<input
						value={item.price}
						onChange={e => setItem({ ...item, price: e.target.value })}
						className="form-control"
						id="price"
						name="price"
					/>
				</div>
				<div className="moviesPage2">
					<label htmlFor="picture">Picture</label>
					<input
						value={item.picture}
						onChange={e => setItem({ ...item, picture: e.target.value })}
						className="form-control"
						id="picture"
						name="picture"
					/>
				</div>
				<div className="moviesPage2">
					<label htmlFor="user">User</label>
					<input
						value={item.user}
						onChange={e => setItem({ ...item, user: e.target.value })}
						className="form-control"
						id="user" name="user" />
				</div>
                <div className="moviesPage2">
                    <input className="NewMovieButton" type="submit" value="Add Item" />
                </div>
			</form>
		</main>
	)
}

export default NewItemForm