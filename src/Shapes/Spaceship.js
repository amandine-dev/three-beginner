import { useLoader } from 'react-three-fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import spaceship from '../Static/spaceship/scene.gltf'



export function Spaceship() {
  const loader = new GLTFLoader();

  loader.load( spaceship, function ( gltf ) {
  
    scene.add( gltf.scene );
  
  }, undefined, function ( error ) {
  
    console.error( error );
