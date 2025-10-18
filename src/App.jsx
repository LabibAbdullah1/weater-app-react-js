import { Link } from 'react-router'
import './App.css'

function App() {
	return (
		<>
			<div className='flex h-screen items-center justify-center bg-blue-100'>
				<div>
					<h1 className='text-neutral-900 font-bold text-2xl mb-5 text-center'>
						Aplikasi Informasi Cuaca 2025 
					</h1>
					<button type='button'>
						<Link
							to='/dashboard'
							className='bg-blue-500 mx-auto text-white px-3 py-2 rounded hover:bg-blue-600 cursor-pointer transition '
						>
							Dashboard
						</Link>
					</button>

				</div>
			</div>
		</>
	);
}

export default App;
