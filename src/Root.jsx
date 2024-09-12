import { Outlet } from 'react-router-dom';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';
const Root = () => {
    return (
        <div className="w-full">  
            <Navbar></Navbar>
            <div className="my-16 px-5 md:px-24 flex gap-14">
            {/* Sidebar */}
            <div className="w-1/4  sticky top-0">
                <SideNavbar />
            </div>
            
            {/* Main Content */}
            <div className="w-3/4">
                <Outlet />
            </div>
            </div>
           <ToastContainer position="top-center" />
           
        </div>
    );
};

export default Root;