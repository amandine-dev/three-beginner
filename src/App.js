import React from 'react'
import SceneOne from './Scenes/Scene-exemple1'
import SceneTwo from './Scenes/SceneTwo'
import './App.css'


export default function App(){
  return (
    <div
    className="grid">
    <h1>React with ThreeJS</h1>
    <h2>Differents examples</h2>
    <div className="grid">
      <div>
      <div className="sceneOne">
      <h3>Scene One</h3>
      <SceneOne/>
      </div>
      </div>
      
      <div>
      <div className="sceneOne">
        <h3>Scene Two</h3>
      <SceneTwo/>
      </div>
      </div>
    </div>
     
  </div>)

};
