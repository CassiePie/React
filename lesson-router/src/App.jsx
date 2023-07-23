import { NavLink, Outlet } from 'react-router-dom';


function App() {


    return (
        <div className="App">
            <div className='container'>
                
                <nav>
                    <NavLink className={({ isActive }) => isActive ? 'active' : '' }to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : '' }to='/about'>About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : '' }to='/contact'>Contact</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : '' }to='/users'>Users</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active' : '' }to='/starwars'>StarWars</NavLink>
                </nav>
                <main>
                    <Outlet />
                </main>
                <footer>
                    Copyright
                </footer>
            </div>
        </div>
    );
}

export default App;