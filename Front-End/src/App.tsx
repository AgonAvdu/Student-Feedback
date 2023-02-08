import { RouterProvider } from "react-router-dom"
import Loading from "./components/UIElements/Loader";
import useUser from "./hooks/useUser";
import { router } from "./routes"

function App() {
  const {isLoading} = useUser();

  return (
    <>
    <Loading loading={isLoading} />
    <RouterProvider router={router} />
    </>
  )
}

export default App
