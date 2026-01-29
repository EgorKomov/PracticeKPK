import { createBrowserRouter } from "react-router";
import { AuthPage } from "../../pages/Auth/AuthPage";
import { RegPage } from "../../pages/Reg/RegPage";
import { DashboardPage } from "../../pages/Dashboard/DashboardPage";
import { CreatedDashboardPage } from "../../pages/CreatedDashboard/CreatedDashboardPage";

export const routesConfig = createBrowserRouter([
    {
        children:[
            {
                path: '/',
                element: <AuthPage/>
            },
            {
                path: '/test',
                element: <div>test</div>
            },
            {
                path: '/register',
                element: <RegPage/>
            },
            {
                path: '/dashboard',
                element: <DashboardPage/>
            },
            {
                path: '/createddashboard',
                element: <CreatedDashboardPage/>
            }
        ]
    }
]);