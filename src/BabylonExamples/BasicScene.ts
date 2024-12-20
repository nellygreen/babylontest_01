
import {
    Scene, 
    Engine, 
    FreeCamera, 
    Vector3, 
    HemisphericLight, 
    MeshBuilder, 


    } from "@babylonjs/core";

export class BasicScene {

    //Declare Properties
    scene: Scene;
    engine: Engine; 
    
    
    //Create Basic Constructor Method (Basic Enviroment/Canvas Setup)
    constructor(private canvas: HTMLCanvasElement) {

    //Create the Enviroment/Canvas (antializing = true)   
    this.engine = new Engine(this.canvas, true);

    //Place the Scene inside the Canvas
    this.scene = this.CreateScene();

    //Render the Scene (Stert render Loop)
    this.engine.runRenderLoop(() => {

        this.scene.render();

    });

    }    
    // Basic Constructor Ends Here
    


    //Create Scene 
    CreateScene():Scene {

        //instantiate the Scene        
        const scene = new Scene(this.engine);

        //create the Camera, set up its Parameters, position the Camera
        const camera = new FreeCamera("camera", new Vector3(0,1,-3.5), this.scene);

        //create Camera Controlls
        camera.attachControl();

        //create the Lighting
        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0,1,0), this.scene);

        //setup Lighting Intensity
        hemiLight.intensity = 0.5;

        //create the Ground Plane
        const ground = MeshBuilder.CreateGround("ground", {width:10, height:10}, this.scene);

        //create the Mesh
        const ball = MeshBuilder.CreateSphere("ball", { diameter: 1 }, this.scene);

        //position the Mesh
        ball.position  = new Vector3(0,1,0);


        //return the result
        return scene;
    }
}