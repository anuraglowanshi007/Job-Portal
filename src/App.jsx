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
import ProtectedRoute from "./components/ProtectedRoute";




const router = createBrowserRouter([

  // All the OpenRoute are Pending 
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/onboarding',
        element:(
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: '/saved-jobs',
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: '/post-job',
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: '/my-jobs',
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: '/job-listing',
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: '/job:id',
        element: (
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        ),
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
