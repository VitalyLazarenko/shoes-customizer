import {Suspense, useMemo} from "react"
import {Canvas} from "@react-three/fiber"
import styles from './styles.module.scss'
import {OrbitControls, useGLTF} from "@react-three/drei"
import classNames from "classnames";
import {AroundArrowIcon} from "../../icons";
import useConfiguratorStore from "../../../store/configuratorStore.ts";

const Model = () => {
  const {setIsLoading} = useConfiguratorStore()
  const { scene } = useGLTF('/models/Adidas_Stan_Smith.glb');
  // const {scene} = useGLTF('/models/scene_1.glb');
  
  useMemo(() => {
    if (scene) {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [scene])
  return <primitive position={[0, -0.2, 0]} object={scene}/>;
};

const ModelViewer = () => {
  return (
    <div className={styles.modelViewerWrapper}>
      <div className={styles.modelTitleContainer}>
        <h1>
          Sneakers configurator
        </h1>
      </div>
      <div className={styles.sceneContainer}>
        <Canvas camera={{position: [0, 0.7, 0.65]}}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3}/>
            <pointLight position={[-1, 0, -4]} intensity={10}/>
            <pointLight position={[0, 3, -2]} intensity={25}/>
            <pointLight position={[0, 3, 2]} intensity={25}/>
            <pointLight position={[2, 0, 4]} intensity={10}/>
            <Model/>
            <OrbitControls autoRotate autoRotateSpeed={0.5}/>
          </Suspense>
        </Canvas>
        <div className={classNames(styles.rotateIcon)}>
          <AroundArrowIcon/>
        </div>
      </div>
    </div>
  )
}

export default ModelViewer
