import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


const Layout = ({children}) =>{
    return(
        <div className="d-flex">
            <Sidebar/>

            <div className="flex-grow-1">
                <Navbar/>
                <div className="p-4">{children}</div>
            </div>
     
     
        </div>
    )
};
export default Layout;