import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";

import Product from "./pages/Product";
import Pricing from "./pages/pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
            <Route path="jonas" element={<h1>Fuck Jonas SChemedtmann</h1>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;

//THE route lineuo yuo there is our router. A router is just like in our timbu is ided to swith through differebt pages without necesssarily reloafing the site or page, it just renders the code?function when its clled upon. Then notice we use The "*" path to specify a not found page ie,  a url that is not found

// Routes that we defined with the index tag in them are used as dfault routes incase y9ou lke cleared the url or like from /app/countries, you changed it to /app ,

//<Route index element={<Navigate replace to="cities" />} />
//initially, this index route was pointing to an element which was aupposed to be stored in a url aswell, but once we go to the app, it will go to the index route(default) which is the a component that is supposed to ve stored under its own url, so therefore to fix this we had to use the <Navigate to> to navigate there instead of just loading the component like that. DOnt forget the replace keyword in it. its used like to replace that url in the browser history stack to avoid confflicting when trying to acess the stack for example when going back.
