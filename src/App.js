
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './context/Authprovider/AuthContext';
import router from './Routes/Routes';
function App() {
  return (
    <div className='max-w-[1440px] mx-auto bg-base'>
      <AuthProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvider>
    </div >
  );
}

export default App;