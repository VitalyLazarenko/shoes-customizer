import classNames from "classnames";
import {Suspense, useMemo} from "react"
import {Canvas} from "@react-three/fiber"
import styles from './styles.module.scss'
import {AroundArrowIcon} from "../../icons";
import * as THREE from 'three';
import {OrbitControls, useGLTF} from "@react-three/drei"
import useConfiguratorStore from "../../../store/configuratorStore.ts";

const textureLoader = new THREE.TextureLoader();

const Model = () => {
  const {activeModel, setIsLoading, selectedOptions} = useConfiguratorStore();
  if (!activeModel) return
  
  const {scene} = useGLTF(activeModel.modelUrl);
  
  useMemo(() => {
    if (scene) {
      setTimeout(() => setIsLoading(false), 1000);
      
      const uniqueCategoryNames = [...new Set(selectedOptions.map(option => option.categoryName))];
      
      const optionsByCategory = uniqueCategoryNames.map(category => (
        {
          category,
          color: selectedOptions.find(option => option.categoryName === category && option.subCategories === 'Color'),
          material: selectedOptions.find(option => option.categoryName === category && option.subCategories === 'Material'),
        }
      ))
      
      optionsByCategory.map(async (category) => {
        const materialNames = [...new Set(category?.material?.materialNames), ...new Set(category?.color?.materialNames)];
        const decalNames = [...new Set(category?.material?.decalNames), ...new Set(category?.color?.decalNames)];
        const color = category?.color?.option.color;
        const newMaterialSettings = category?.material?.option.setting;
        
        console.log('decalNames', decalNames);
        
        if (newMaterialSettings) {
          const {normalMap, roughnessMap} = newMaterialSettings; // Підставте правильні шляхи до текстур
          
          // Завантажуємо текстури
          const normalMapTexture: THREE.Texture | null | undefined = await new Promise((resolve, reject) => {
            textureLoader.load(
              normalMap.toString(),
              (data) => resolve(data),
              undefined,
              (err) => reject(err))
          });
          const roughnessMapTexture: THREE.Texture | null | undefined = await new Promise((resolve, reject) => {
            textureLoader.load(
              roughnessMap.toString(),
              (data) => resolve(data),
              undefined,
              (err) => reject(err)
            )
          })
          
          // Застосовуємо новий матеріал до об'єктів сцени
          materialNames.forEach(materialName => {
            const object = scene.getObjectByName(materialName);
            if (object && object instanceof THREE.Mesh) {
              object.material = new THREE.MeshStandardMaterial({
                ...object.material,
                ...newMaterialSettings,
                color,
                normalMap: normalMapTexture,
                roughnessMap: roughnessMapTexture,
              });
            }
          });
          decalNames.forEach(objName => {
            const object = scene.getObjectByName(objName);
            if (object && object instanceof THREE.Mesh) {
              object.material = new THREE.MeshStandardMaterial({
                ...object.material,
                color,
              });
            }
          })
        } else {
          materialNames.forEach(materialName => {
            const object = scene.getObjectByName(materialName);
            if (object && object instanceof THREE.Mesh) {
              object.material = new THREE.MeshStandardMaterial({
                ...object.material,
                color,
              });
            }
          })
          decalNames.forEach(materialName => {
            const object = scene.getObjectByName(materialName);
            if (object && object instanceof THREE.Mesh) {
              object.material = new THREE.MeshStandardMaterial({
                ...object.material,
                color,
              });
            }
          })
        }
      });
    }
  }, [scene, selectedOptions]);
  
  return <primitive position={activeModel.modelPosition} rotation={activeModel.modelRotation} object={scene}/>;
};

const ModelViewer = () => {
  const {isRotation, setIsRotation} = useConfiguratorStore()
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
            
            <ambientLight intensity={0.35}/>
            <pointLight position={[-1, 0, -4]} intensity={15}/>
            <pointLight position={[-4, -1, -1]} intensity={25}/>
            <pointLight position={[0, 3, -2]} intensity={35}/>
            <pointLight position={[0, 3, 2]} intensity={35}/>
            <pointLight position={[2, 0, 4]} intensity={15}/>
            <Model/>
            <OrbitControls autoRotate={isRotation} autoRotateSpeed={0.5} minDistance={0.8} maxDistance={2.0}/>
          </Suspense>
        </Canvas>
        <div className={classNames(styles.rotateIcon, isRotation && styles.animate)}
             onClick={() => setIsRotation(!isRotation)}>
          <AroundArrowIcon/>
        </div>
      </div>
    </div>
  )
}

export default ModelViewer
