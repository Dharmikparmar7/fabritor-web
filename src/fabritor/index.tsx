import { GlobalStateContext } from "@/context";
import Editor from "@/editor";
import { SKETCH_ID } from "@/utils/constants";
import { Layout, Spin } from "antd";
import { fabric } from "fabric";
import { useContext, useEffect, useRef, useState } from "react";
import rough from "roughjs";
import ContextMenu from "./components/ContextMenu";
import ObjectRotateAngleTip from "./components/ObjectRotateAngleTip";
import Header from "./UI/header";
import Panel from "./UI/panel";
import Setter from "./UI/setter";

import { createFImage, createUrlImage } from "@/editor/objects/image";
import "../font.css";
import RemoteImageEDP from "@/remote-image-EDP";

const { Content } = Layout;

const workspaceStyle: React.CSSProperties = {
  background: "#ddd",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  flex: 1,
};

const contentStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  // height: "100%",
};

export default function Fabritor({
  defaultImageUrl,
}: {
  defaultImageUrl?: string;
}) {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const workspaceEl = useRef<HTMLDivElement>(null);
  const roughSvgEl = useRef(null);
  const [editor, setEditor] = useState<Editor | null>(null);
  const [roughSvg, setRoughSvg] = useState<any>();
  const [activeObject, setActiveObject] = useState<
    fabric.Object | null | undefined
  >(null);
  const [isReady, setReady] = useState(false);
  const contextMenuRef = useRef<any>(null);

  const clickHandler = (opt) => {
    const { target } = opt;
    if (editor.getIfPanEnable()) return;

    if (!target) {
      contextMenuRef.current?.hide();
      return;
    }

    if (opt.button === 3) {
      // 右键
      if (target.id !== SKETCH_ID) {
        editor.canvas.setActiveObject(target);
      }
      setTimeout(() => {
        contextMenuRef.current?.show();
      }, 50);
    } else {
      contextMenuRef.current?.hide();
    }
  };

  const selectionHandler = (opt) => {
    const { selected, sketch } = opt;
    if (selected && selected.length) {
      const selection = editor.canvas.getActiveObject();
      setActiveObject(selection);
    } else {
      // @ts-ignore
      setActiveObject(sketch);
    }
  };

  const groupHandler = () => {
    const selection = editor.canvas.getActiveObject();
    setActiveObject(selection);
  };

  const loadJsonHandler = (opt) => {
    const { lastActiveObject } = opt;
    if (lastActiveObject) {
      editor.canvas.setActiveObject(lastActiveObject);
      setActiveObject(lastActiveObject);
    }
  };

  const initEvent = () => {
    editor.canvas.on("selection:created", selectionHandler);
    editor.canvas.on("selection:updated", selectionHandler);
    editor.canvas.on("selection:cleared", selectionHandler);

    editor.canvas.on("mouse:down", clickHandler);

    editor.canvas.on("fabritor:group", groupHandler);
    editor.canvas.on("fabritor:ungroup", groupHandler);

    editor.canvas.on("fabritor:load:json", loadJsonHandler);
  };

  const initEditor = async () => {
    const _editor = new Editor({
      canvasEl: canvasEl.current,
      workspaceEl: workspaceEl.current,
      sketchEventHandler: {
        groupHandler: () => {
          setActiveObject(_editor.canvas.getActiveObject());
        },
      },
    });

    await _editor.init();

    setEditor(_editor);
    setReady(true);
    setActiveObject(_editor.sketch);
  };

  const initRoughSvg = () => {
    // @ts-ignore rough svg
    setRoughSvg(rough.svg(roughSvgEl.current));
  };

  useEffect(() => {
    if (editor) {
      initEvent();
      initRoughSvg();
    }
  }, [editor]);

  useEffect(() => {
    initEditor();

    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, []);

  function finishLoading(value: boolean) {
    setReady(value);
  }

  return (
    <GlobalStateContext.Provider
      value={{
        object: activeObject,
        setActiveObject,
        isReady,
        setReady,
        editor,
        roughSvg,
      }}
    >
      {defaultImageUrl && (
        <RemoteImageEDP
          defaultImageUrl={defaultImageUrl}
          editor={editor}
          finishLoading={finishLoading}
        />
      )}
      <Layout id={"mainFabritorLayout"} className="fabritor-layout">
        <Spin spinning={!isReady} fullscreen />
        <ObjectRotateAngleTip />
        <Header />
        <Layout className="layout component">
          <Panel />
          <Content style={contentStyle}>
            <ContextMenu ref={contextMenuRef} object={activeObject}>
              <div
                style={workspaceStyle}
                ref={workspaceEl}
                className="fabritor-workspace"
              >
                <canvas ref={canvasEl} />
              </div>
            </ContextMenu>
          </Content>
          <Setter />
        </Layout>

        <svg id="fabritor-rough-svg" ref={roughSvgEl} />
      </Layout>
    </GlobalStateContext.Provider>
  );
}
