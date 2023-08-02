import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import PostView from './PostView/PostView'
import CreatePost from './CreatePost'


export default function Routers({ children }){
    return <>
        <BrowserRouter>
            {children}
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/postview' element={<PostView/>}/>
                <Route path='/createPost' element={<CreatePost/>}/>
            </Routes>
        </BrowserRouter>
    </>
}