import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Home from "./crudPages/Home";
import {Routes, Route } from "react-router-dom";
import AddUser from "./crudPages/AddUser";
import UpdateUser from "./crudPages/UpdateUser";
// import CakeContainer from './components/CakeContainer'
// import HooksCakeContainer from './components/HooksCakeContainer'
// import IceCreamContainer from './components/IceCreamContainer'
// import NewCakeContainer from './components/NewCakeContainer'
// import ItemContainer from './components/ItemContainer'
// import UsersContainer from './components/UsersContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UsersContainer /> */}
        {/* <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}

        {/* components for crud operation */}


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/editUser/:id" element={<UpdateUser />} />
          </Routes>
      </div>
    </Provider>
  );
}

export default App;
