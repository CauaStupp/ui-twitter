import { createBrowserRouter } from 'react-router-dom';
import Status from '../pages/Status/Status';
import Timeline from '../pages/Timeline/Timeline';
import Default from '../layouts/Default';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />,
      },
      {
        path: '/status',
        element: <Status />
      }
    ]
  }
])

export default Router;