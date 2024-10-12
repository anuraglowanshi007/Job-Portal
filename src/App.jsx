import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/AppLayout'; 
import LandingPage from './pages/LandingPage'; 
import SavedJobs from './pages/SavedJobs';
import PostJob from './pages/PostJob';
import MyJobs from './pages/MyJobs';
import JobListing from './pages/JobListing';
import Jobs from './pages/Jobs';
import Onboarding from './pages/Onboarding';
import { ThemeProvider } from "./components/theme-provider";




const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/onboarding',
        element: <Onboarding />,
      },
      {
        path: '/saved-jobs',
        element: <SavedJobs />,
      },
      {
        path: '/post-job',
        element: <PostJob />,
      },
      {
        path: '/my-jobs',
        element: <MyJobs />,
      },
      {
        path: '/job-listing',
        element: <JobListing />,
      },
      {
        path: '/jobs',
        element: <Jobs />,
      }
    ],
  },
]);

function App() {
  return(

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>

  ) 
}
export default App;
