import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import './App.css'



function App() {

	const [ items, setItems ] = useState([]);

	function handleAddItems(newitem) {
        setItems(prevItems => [...prevItems, newitem]);
    }

	function handleDeleteItem(itemId) {
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    }

	function handleToggleCheck(itemId) {
		setItems(prevItems => prevItems.map( item => item.id === itemId ? {...item, packed: !item.packed} : {...item}))
	}

	function handleReset() {
		
		const confirmed = window.confirm("Are you sure you want to delete all items?");

		if (confirmed) setItems([]);
	}

	return (
		<div className='app'>
			<Logo />
			<Form onAddItems={handleAddItems}/>
			<PackingList items={items} onDeleteItem={handleDeleteItem} onToggleCheck={handleToggleCheck} handleReset={handleReset}/>
			<Stats items={items}/>
		</div>
	)	
}

export default App;


