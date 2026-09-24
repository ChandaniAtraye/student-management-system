import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


const Layout = ({children}) =>{
    return(
        <div className="d-flex vh-100 overflow-hidden">
            <Sidebar/>

            <div className="flex-grow-1 d-flex flex-column">
                <Navbar/>
                <div className="p-4  overflow-hidden flex-grow-1">{children}</div>
            </div>
     
     
        </div>
    )
};
export default Layout;