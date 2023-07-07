import { Environment, PresentationControls, useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";

const Laptop = () => {
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="warehouse" />;
      <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.4, 0.2]}>
        <primitive object={laptop.scene} position-y={-1.2} />;
        <Html
          wrapperClass="laptop"
          position={[0, 0.3, -1.5]}
          transform
          distanceFactor={1.16}
          rotation-x={-0.25}
        >
          <iframe
            title="myFrame"
            src="https://2023dennislee3dportfolio.netlify.app/"
          ></iframe>
        </Html>
      </PresentationControls>
    </>
  );
};
export default Laptop;
