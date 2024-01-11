import React from "react"
import MyDiary from '../../views/my-diary/MyDiary.jsx'
import AboutDiary from '../../views/about-diary/AboutDiary.jsx'
import ForAlexithymitists from '../../views/for-alexithymitists/ForAlexithymitists.jsx'
import { Route, Routes } from "react-router-dom";

function MainComponent() {
    return ( 
        <div className="page-content">
            <Routes>
                <Route exact path="/" element={<MyDiary />} /> 
                <Route exact path="/about-diary" element={<AboutDiary />}/>
                <Route exact path="/for-alexithymitists" element={<ForAlexithymitists />}/>
            </Routes>
            {console.log('Created routes')}
        </div>
     );
}

export default MainComponent;