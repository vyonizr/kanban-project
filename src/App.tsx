import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SideMenuLayout from "./layouts/SideMenuLayout";
import TaskSummary from "./features/tasks/components/TaskSummary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideMenuLayout />,
    children: [
      {
        path: "/",
        element: <TaskSummary />,
      },
    ],
  },
  {
    path: "task-list",
    element: <SideMenuLayout />,
    children: [
      {
        path: "/task-list",
        element: <h1>Task List</h1>,
      },
    ],
  },
  {
    path: "task-progress",
    element: <SideMenuLayout />,
    children: [
      {
        path: "/task-progress",
        element: <h1>Task Progress</h1>,
      },
    ],
  },
]);

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />;
    </RecoilRoot>
  );
}

export default App;
