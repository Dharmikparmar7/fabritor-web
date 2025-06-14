import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { GlobalStateContext } from "@/context";
import "./index.scss";

export default function CanvasSizeController() {
  const { editor } = useContext(GlobalStateContext);

  const zoomCanvas = (zoomIn: boolean) => {
    if (!editor?.canvas) return;

    const canvas = editor?.canvas;
    let zoom = canvas.getZoom();
    zoom = zoomIn ? Math.min(zoom + 0.1, 3) : Math.max(zoom - 0.1, 0.2); // Lowered zoom-out limit to 0.1

    // Get the center of the canvas
    const center = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    // Apply zoom from the center
    canvas.zoomToPoint(center, zoom);
    canvas.renderAll();
  };

  return (
    <div className="canvas_size">
      <button onClick={() => zoomCanvas(true)}>
        <PlusOutlined />
      </button>
      <button onClick={() => zoomCanvas(false)}>
        <MinusOutlined />
      </button>
    </div>
  );
}
