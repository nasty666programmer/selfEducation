import React from 'react';
import Navigation from './Navigation';
import ProjectName from './ProjectName';
import '../css/Main.css';
import TargetProject from './TargetPrject';

function Main() {
    return(
        <div>
            <ProjectName />
            <Navigation/>
            <TargetProject />
        </div>
    )
}

export default Main;