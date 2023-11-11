import {
	RouterProvider,
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/home";
import RootLayout from "./layout/client/rootLayout";
import ServicesPage from "./pages/services";
import AboutPage from "./pages/about";
import Contact from "./pages/contact";
const clientRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

function App() {
	return <RouterProvider router={clientRoute} />;
}

export default App;
