import React from 'react';
import { useRoutes } from 'react-router-dom';



import Homepage from "./pages/Homepage";
import Reviewpage from "./pages/ReviewDetails";
import Category from "./pages/Category";
import Sidheader from './component/Sidheader';
// import HomePageA from './pages/HomePageA';














const App = () => {


 

    const routes = useRoutes([

        { path: '/', element: <Homepage /> },
        // { path: '/', element: <HomePageA /> },
        { path: '/review:id', element: <Reviewpage /> },
        { path: '/category/:id', element: <Category /> },
        { path: 'details/:id', element: <Reviewpage /> }

    ]);



    return (
     
                 <div className='App'>
                
               
                    <Sidheader />

                    {routes}
                   
          
                </div>

           

        
    );
};

export default App;
