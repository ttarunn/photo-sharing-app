import './App.css';
import { AiOutlineCamera } from 'react-icons/ai';
import Routers from './Routers';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs'

function App() {

  return (
    <div>
        <Routers>
          <div className='wrapper'>
            <h1 style={{ marginLeft: "2rem" }}><Link to={'/'} className='link'><BsInstagram fontSize={"1.5rem"}/>Insta Clone</Link></h1>
            <div>
              <Link to={'/createPost'} className='link'><AiOutlineCamera className='icon' /></Link>
            </div>
          </div>
        </Routers>      
    </div>
  );
}

export default App;