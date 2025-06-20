import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import Main from "./main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-50 font-mono">
            <Header />
            <Main />
            <Footer />
          </div>
        }>
        <Route path="about" element={<Main />} />
        <Route path="projects" element={<Main />} />
        <Route path="contact" element={<Main />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
