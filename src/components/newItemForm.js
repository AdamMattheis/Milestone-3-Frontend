import { useState, useEffect } from "react"
import { useNavigate } from "react-router"

function NewItemForm() {

	const navigate = useNavigate()

	const [item, setItem] = useState({
		name: '',
		price: '',
		picture: '',
		user: ''
	})

	const [user, setUser] = useState([])

	useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`https://prime-picks.herokuapp.com/user`)
            const resData = await response.json()
            setUser(resData)
        }
        fetchData()
    }, [])



	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`https://prime-picks.herokuapp.com/items`, {
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
			<h1 className="iPage">Add a New Item</h1>
			<form onSubmit={handleSubmit}>
				<div className="iPage2">
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
				<div className="iPage2">
					<label htmlFor="price">Price</label>
					<input
						value={item.price}
						onChange={e => setItem({ ...item, price: e.target.value })}
						className="form-control"
						id="price"
						name="price"
					/>
				</div>
				<div className="iPage2">
					<label htmlFor="picture">Picture</label>
					<input
						value={item.picture}
						onChange={e => setItem({ ...item, picture: e.target.value })}
						className="form-control"
						id="picture"
						name="picture"
					/>
				</div>
				<div className="iPage2">
					<label htmlFor="description">Description</label>
					<input
						value={item.description}
						onChange={e => setItem({ ...item, description: e.target.value })}
						className="form-control"
						id="description" name="description" />
				</div>
                <div className="iPage2">
					<label htmlFor="user">Seller</label>
						<select 
							onChange={e => setItem({ ...item, user: e.target.value})}>
							{user.map((u) => {
								return(
									<option 
									value={u._id}
									key={u._id}>{u.username}
									</option>
									
								)
							})}
						</select>
				</div>
                <div className="iPage2">
                    <input className="NewMovieButton" type="submit" value="Add Item" />
                </div>
			</form>
		</main>
	)
}

export default NewItemForm