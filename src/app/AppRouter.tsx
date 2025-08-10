import MainLayout from '@app/layouts/MainLayout';
import { QuizPage } from '@pages/QuizPage';
import { ResultsPage } from '@pages/ResultPage';
import { StartPage } from '@pages/StartPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: 'home',
        element: <StartPage />,
      },
      {
        path: 'quiz',
        element: <QuizPage />,
      },
      {
        path: 'results',
        element: <ResultsPage />,
      },
    ],
  },
]);

export default router;
