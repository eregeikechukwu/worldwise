import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>Default Route</p>} />
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<CityList />} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//THE route lineuo yuo there is our router. A router is just like in our timbu is ided to swith through differebt pages without necesssarily reloafing the site or page, it just renders the code?function when its clled upon. Then notice we use The "*" path to specify a not found page ie,  a url that is not found

// Routes that we defined with the index tag in them are used as dfault routes incase y9ou lke cleared the url or like from /app/countries, you changed it to /app ,
