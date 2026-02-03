import { createBrowserRouter } from "react-router";
import { AuthPage } from "../../pages/Auth";
import { RegPage } from "../../pages/Reg";
import { DashboardPage } from "../../pages/Dashboard";
import { CreateDashboardPage } from "../../pages/CreateDashboard";
import { ENUM_LINK } from "../../shared/constants"

export const routesConfig = createBrowserRouter([
    {
        children:[
            {
                path: ENUM_LINK.MAIN,
                element: <AuthPage/>
            },
            {
                path: ENUM_LINK.REG,
                element: <RegPage/>
            },
            {
                path: ENUM_LINK.DASHBOARD,
                element: <DashboardPage/>
            },
            {
                path: ENUM_LINK.CREATEDASHBOARD,
                element: <CreateDashboardPage/>
            }
        ]
    }
]);