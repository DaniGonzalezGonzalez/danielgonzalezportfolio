import { createBrowserRouter } from 'react-router-dom'
import { MainTemplate } from '../templates/MainTemplate'
import { AccesoPrivado } from '../components'
import { ErrorPage } from '../templates/Outlet/AdminPages/ErrorPage'
import { LoginPage } from '../templates/Outlet/AdminPages/LoginPage'
import { AddContent } from '../templates/Outlet/AdminPages/AddContent'
import { ContentList } from '../templates/Outlet/AdminPages/ContentList'
import { HomePage } from '../templates/Outlet/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainTemplate/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: 'login',
        element: <LoginPage/>,
      },
      {
        path: 'nuevo-contenido',
        element: <AccesoPrivado>
                      <AddContent/>
                </AccesoPrivado>,
      },
      {
        path: 'contenido',
        element: <AccesoPrivado>
                      <ContentList />
                  </AccesoPrivado>,
        // children: [
        //   {
        //     path: ':option/:id',
        //     element: <EditarContenido/>,
        //   }
        // ]
      },

    ]
  } 
])
