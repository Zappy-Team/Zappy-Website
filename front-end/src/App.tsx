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
import ProjectPage from "./pages/projects";
import Careers from "./pages/careers";
import Events from "./pages/events";
import Blogs from "./pages/blogs";

const clientRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/projects" element={<ProjectPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={clientRoute} />;
}

export default App;
