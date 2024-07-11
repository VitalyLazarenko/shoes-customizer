import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {OrbitControls, useGLTF} from "@react-three/drei";

const Model = () => {
  // const { scene } = useGLTF('/models/Adidas_Stan_Smith.glb');
  const { scene } = useGLTF('/models/scene_1.glb');
  return <primitive position={[0,0,0]} object={scene} />;
};

const ModelViewer = () => {
  return (
    <div>
      <div style={{ width: '100%', height: '100vh' }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3}/>
            <pointLight position={[-1, 0, -4]} intensity={10}/>
            <pointLight position={[0, 5, 2]} intensity={25}/>
            <pointLight position={[0, 3, -2]} intensity={25}/>
            <pointLight position={[2, 0, 4]} intensity={10}/>
            <Model />
            {/*<OrbitControls autoRotate autoRotateSpeed={0.5}/>*/}
            <OrbitControls/>
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default ModelViewer
