import React from "react";
import Header from "../components/demo/header/header"
import Login from "../components/demo/routes/login/login"
import Form from "../components/demo/routes/nutritional_form/form";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Selection from "../components/demo/routes/selection/selection";
function Demo(){
    return (
        <>
            
            <Header/>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/form" element={<Form />} />
                <Route path="/selection" element={<Selection />} />
            </Routes>
        </>
    );
}

export default Demo;