import DEMOJSON from "@/assets/demo.json";
import { GlobalStateContext } from "@/context";
import ContextMenu from "@/fabritor/components/ContextMenu";
import { useTranslation } from "@/i18n/utils";
import { SKETCH_ID } from "@/utils/constants";
import { GroupOutlined, HeartTwoTone, MoreOutlined } from "@ant-design/icons";
import { Button, Divider, Empty, Flex, List } from "antd";
import { useContext, useEffect, useState } from "react";

export default function Layer() {
  const {
    isReady,
    setReady,
    object: activeObject,
    setActiveObject,
    editor,
  } = useContext(GlobalStateContext);
  const [layers, setLayers] = useState([]);
  const { t } = useTranslation();

  const getCanvasLayers = (objects) => {
    const _layers: any = [];
    const { length } = objects;
    if (!length) {
      setLayers([]);
      return;
    }
    const activeObject = editor?.canvas.getActiveObject();
    for (let i = length - 1; i >= 0; i--) {
      let object = objects[i];
      if (object && object.id !== SKETCH_ID) {
        if (activeObject === object) {
          object.__cover = object.toDataURL();
        } else {
          if (!object.__cover) {
            object.__cover = object.toDataURL();
          }
        }

        _layers.push({
          cover: object.__cover,
          group: object.type === "group",
          object,
        });
      }
    }
    setLayers(_layers);
  };

  const loadDemo = async () => {
    setReady(false);
    await editor.loadFromJSON(DEMOJSON, true);
    editor.fhistory.reset();
    setReady(true);
    setActiveObject(null);
    editor.fireCustomModifiedEvent();
  };

  const handleItemClick = (item) => {
    editor.canvas.discardActiveObject();
    editor.canvas.setActiveObject(item.object);
    editor.canvas.requestRenderAll();
  };

  useEffect(() => {
    let canvas;
    const initCanvasLayers = () => {
      getCanvasLayers(canvas.getObjects());
    };

    if (isReady) {
      setLayers([]);
      canvas = editor?.canvas;
      initCanvasLayers();

      canvas.on({
        "object:added": initCanvasLayers,
        "object:removed": initCanvasLayers,
        "object:modified": initCanvasLayers,
        "object:skewing": initCanvasLayers,
        "fabritor:object:modified": initCanvasLayers,
      });
    }

    return () => {
      if (canvas) {
        canvas.off({
          "object:added": initCanvasLayers,
          "object:removed": initCanvasLayers,
          "object:modified": initCanvasLayers,
          "object:skewing": initCanvasLayers,
          "fabritor:object:modified": initCanvasLayers,
        });
      }
    };
  }, [isReady]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault(); // Prevent default left-click behavior

    const targetElement = event.currentTarget; // Get the clicked element
    const rect = targetElement.getBoundingClientRect(); // Get position

    // Use a short delay to prevent immediate closure
    setTimeout(() => {
      const rightClickEvent = new MouseEvent("contextmenu", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: rect.left + rect.width / 2, // Center X
        clientY: rect.top + rect.height / 2, // Center Y
      });

      targetElement.dispatchEvent(rightClickEvent); // 🚀 Dispatch right-click event
    }, 50); // Small delay to avoid closing immediately
  };

  return (
    <div className="fabritor-panel-wrapper">
      {layers.length ? (
        <List
          dataSource={layers}
          renderItem={(item: any) => (
            <ContextMenu object={item.object} noCareOpen>
              <List.Item
                className="fabritor-list-item"
                style={{
                  border:
                    activeObject === item.object
                      ? " 2px solid #ff2222"
                      : "2px solid transparent",
                  padding: "10px 16px",
                }}
                onClick={() => {
                  handleItemClick(item);
                }}
              >
                <Flex
                  justify="space-between"
                  align="center"
                  style={{ width: "100%", height: 40 }}
                >
                  <img
                    src={item.cover}
                    style={{ maxWidth: 200, maxHeight: 34 }}
                  />
                  {item.group ? (
                    <GroupOutlined
                      style={{ fontSize: 18, color: "rgba(17, 23, 29, 0.6)" }}
                    />
                  ) : null}
                  <MoreOutlined
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                    }}
                    onClick={handleClick}
                  />
                </Flex>
              </List.Item>
            </ContextMenu>
          )}
        />
      ) : (
        <Empty
          image={null}
          description={
            <div>
              <HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: 40 }} />
              <p style={{ color: "#aaa", fontSize: 16 }}>
                {t("panel.design.start")}
              </p>
              <Divider />
              <Button onClick={loadDemo}>{t("panel.design.start_demo")}</Button>
            </div>
          }
        />
      )}
    </div>
  );
}
