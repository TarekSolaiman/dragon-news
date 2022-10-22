import "./App.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
// import { ToastBar } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
