import {
	RouterProvider,
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/home";
import RootLayout from "./layout/client/rootLayout";

const clientRoute = createBrowserRouter(
<<<<<<< Updated upstream
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
=======
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<HomePage />} />
			<Route path="/services" element={<ServicesPage />} />
			<Route path="/about-us" element={<AboutPage />} />
		</Route>
	)
>>>>>>> Stashed changes
);

function App() {
	return <RouterProvider router={clientRoute} />;
}

export default App;
