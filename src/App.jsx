import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import './App.css'

function App() {

	const [ description, setDescription ] = useState("");
    const [ quantity, setQuantity ] = useState(1);
	const [ items, setItems ] = useState([]);

	function handleSubmit(e) {
        e.preventDefault();

        if(!description) return;

        const newitems = {description, quantity, packed: false, id: Date.now()}

		setItems(prevItems => [...prevItems, newitems]);

        setDescription("");
        setQuantity(1);
    }

	return (
		<div className='app'>
			<Logo />
			<Form description={description} quantity={quantity} handleSubmit={handleSubmit} setQuantity={setQuantity} setDescription={setDescription}/>
			<PackingList items={items}/>
			<Stats />
		</div>
	)	
}

export default App;


