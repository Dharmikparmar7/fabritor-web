import { createFImage } from "@/editor/objects/image";
import { useContext } from "react";
import ImageSelector from "@/fabritor/components/ImageSelector";
import { GlobalStateContext } from "@/context";

export default function ImagePanel({
  closeDrawer,
}: {
  closeDrawer?: () => void;
}) {
  const { editor } = useContext(GlobalStateContext);

  const addImage = async (url) => {
    closeDrawer && closeDrawer();
    await createFImage({
      imageSource: url,
      canvas: editor.canvas,
    });
  };

  return (
    <div className="fabritor-panel-wrapper">
      <ImageSelector onChange={addImage} />
    </div>
  );
}
