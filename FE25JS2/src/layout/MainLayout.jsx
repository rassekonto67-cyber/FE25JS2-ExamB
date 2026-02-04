import Navigation from "../navigation/Navigation"
import { Outlet } from "react-router-dom"

function MainLayout() {
    return (
       <>
       <Navigation  />
         <main>
           <Outlet />
         </main>
       </>
    )
}

export default MainLayout

