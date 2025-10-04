import './App.css'
import image from './assets/IMG_1283.PNG'

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={image} width="100" height="100"></img>
            </div>
            <div className='links'>
                <h3 className='link'>Studio</h3>
                <h3 className='link'>Portfolio</h3>
                <h3 className='link'>Mutus</h3>
                <h3 className='link'>Crotali</h3>
            </div>
        </div>
    )
}

export default Header