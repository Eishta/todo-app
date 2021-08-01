import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className='page home' style={{ textAlign: "left" }}>
            <img className='home-background' src={`${process.env.PUBLIC_URL}/images/todo.png`} alt='ddkj' />
            <div className='home-text'>
                <div className='welcome-text'>Organize it all with <br /><span className='heading'>Todolist</span></div>
                <Link to='/class'><button className=' add-todo'>Get Started</button></Link>
            </div>
        </div>
    )
}

export default Home;