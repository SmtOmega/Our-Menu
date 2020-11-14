import menuItems from './data'
import Menu from './Menu'
import Category from './Category'
import './App.css';
import { useState } from 'react';



const allCategories = ['all', ...new Set(menuItems.map(menu => menu.category))];

function App() {
  const [menus, setMenus] = useState(menuItems);
  const [categories, setCategories] = useState(allCategories);

  const showMenu = (category) => {
    if(category === "all"){
      setMenus(menuItems)
      return
    }
    const newMenu = menuItems.filter(menu => menu.category === category)
    setMenus(newMenu)
  }
  return (
    <div className="App">
      <div className="Title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <section className="category">
        <Category categories={categories} showMenu={showMenu}/>
      </section>
      <div className='menu-data'>
        <Menu menuItems={menus}/>
      </div>
    </div>
  );
}

export default App;
