import { useState } from "react"
import { useNavigate } from "react-router"

function NewUserForm() {

	const navigate = useNavigate()

	const [user, setUser] = useState({
		username: '',
		password: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/user`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
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
			<h1 className="moviesPage">SIGN UP</h1>
			<form onSubmit={handleSubmit}>
				<div className="moviesPage2">
					<label htmlFor="username">Username</label>
					<input
                        required
						value={user.username}
						onChange={e => setUser({ ...user, username: e.target.value })}
						className="form-control"
						id="username"
						name="username"
					/>
				</div>
				<div className="moviesPage2">
					<label htmlFor="password">Password</label>
					<input
						value={user.password}
						onChange={e => setUser({ ...user, password: e.target.value })}
						className="form-control"
						id="password"
						name="password"
					/>
				</div>
                <div className="moviesPage2">
                    <input className="NewMovieButton" type="submit" value="SIGN UP" />
                </div>
			</form>
		</main>
	)
}

export default NewUserForm