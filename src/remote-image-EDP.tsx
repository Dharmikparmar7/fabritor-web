import React, { useEffect } from "react";
import { createFImage } from "./editor/objects/image";
import Editor from "./editor";

export default function RemoteImageEDP({
  defaultImageUrl,
  editor,
  finishLoading,
}: {
  defaultImageUrl: string;
  editor: Editor;
  finishLoading: (d: boolean) => void;
}) {
  useEffect(() => {
    const addImage = async () => {
      finishLoading(false);
      if (defaultImageUrl && editor?.canvas) {
        try {
          await createFImage({
            imageSource: defaultImageUrl,
            canvas: editor.canvas,
          });
          finishLoading(true);
        } catch (error) {
          console.error("Error adding image:", error);
        }
      }
    };

    addImage();
  }, [defaultImageUrl, editor?.canvas]);

  return <></>;
}
