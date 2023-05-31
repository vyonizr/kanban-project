import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SideMenuLayout from "./layouts/SideMenuLayout";
import TaskSummary from "./features/tasks/components/TaskSummary";
import TaskList from "./features/tasks/components/TaskList/TaskList";
import TaskProgress from "./features/tasks/components/TaskProgress/TaskProgress";

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
        element: <TaskList />,
      },
    ],
  },
  {
    path: "task-progress",
    element: <SideMenuLayout />,
    children: [
      {
        path: "/task-progress",
        element: <TaskProgress />,
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
