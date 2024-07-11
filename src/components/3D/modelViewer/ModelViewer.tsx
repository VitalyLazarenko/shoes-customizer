import {Suspense} from "react"
import {Canvas} from "@react-three/fiber"
import styles from './styles.module.scss'
import {OrbitControls, useGLTF} from "@react-three/drei"
import useConfiguratorStore from "../../../store/configuratorStore.ts";

const Model = () => {
  // const { scene } = useGLTF('/models/Adidas_Stan_Smith.glb');
  const {scene} = useGLTF('/models/scene_1.glb');
  return <primitive position={[0, -0.2, 0]} object={scene}/>;
};

const ModelViewer = () => {
  const {isShowSidebar, setIsShowSidebar} = useConfiguratorStore()
  return (
    <div className={styles.modelViewerWrapper}>
      <div className={styles.modelTitleContainer} onClick={() => setIsShowSidebar(!isShowSidebar)}>
        <h1>
          Sneakers configurator
        </h1>
      </div>
      <div className={styles.sceneContainer}>
        <Canvas camera={{position: [0, 0, 0.2]}}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3}/>
            <pointLight position={[-1, 0, -4]} intensity={10}/>
            <pointLight position={[0, 5, 2]} intensity={25}/>
            <pointLight position={[0, 3, -2]} intensity={25}/>
            <pointLight position={[2, 0, 4]} intensity={10}/>
            <Model/>
            {/*<OrbitControls autoRotate autoRotateSpeed={0.5}/>*/}
            <OrbitControls/>
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default ModelViewer
