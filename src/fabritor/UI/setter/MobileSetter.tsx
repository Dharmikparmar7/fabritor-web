import { SETTER_WIDTH } from "@/config";
import { GlobalStateContext } from "@/context";
import { useTranslation } from "@/i18n/utils";
import { SKETCH_ID } from "@/utils/constants";
import { SettingOutlined } from "@ant-design/icons";
import { Divider, Drawer } from "antd";
import { useContext, useState } from "react";
import CommonSetter from "./CommonSetter";
import GroupSetter from "./GroupSetter";
import ImageSetter from "./ImageSetter";
import PathSetter from "./PathSetter";
import RoughSetter from "./RoughSetter";
import { LineSetter, ShapeSetter } from "./ShapeSetter";
import SketchSetter from "./SketchSetter";
import TextSetter from "./TextSetter";

export default function MobileSetter() {
  const { object, isReady } = useContext(GlobalStateContext);
  const { t } = useTranslation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  const objectType = object?.get?.("type") || "";

  const getRenderSetter = () => {
    if (!isReady) return null;
    // @ts-ignore
    if (!object || object.id === SKETCH_ID) return <SketchSetter />;
    switch (objectType) {
      case "textbox":
      case "f-text":
        return <TextSetter />;
      case "rect":
      case "circle":
      case "triangle":
      case "polygon":
      case "ellipse":
        return <ShapeSetter />;
      case "f-line":
      case "f-arrow":
      case "f-tri-arrow":
        return <LineSetter />;
      case "f-image":
        return <ImageSetter />;
      case "path": // @ts-ignore
        if (object?.sub_type === "rough") {
          return <RoughSetter />;
        }
        return <PathSetter />;
      case "group": // @ts-ignore
        if (object?.sub_type === "rough") {
          return <RoughSetter />;
        }
        return <GroupSetter />;
      case "activeSelection":
        return <GroupSetter />;
      default:
        return null;
    }
  };

  const getSetterTitle = () => {
    if (!isReady) return null; // @ts-ignore
    if (!object || object.id === SKETCH_ID) return t("setter.sketch.title");
    switch (objectType) {
      case "textbox":
      case "f-text":
        return t("panel.text.title");
      case "rect":
      case "circle":
      case "triangle":
      case "polygon":
      case "ellipse":
        return t("panel.material.shape");
      case "line":
      case "f-line":
      case "f-arrow":
      case "f-tri-arrow":
        return t("panel.material.line");
      case "f-image":
      case "image":
        return t("panel.image.title");
      case "path": // @ts-ignore
        if (object?.sub_type) {
          // @ts-ignore
          if (object?.sub_type === "rough") {
            return t("panel.material.hand_drawn");
          }
          return t("panel.material.shape");
        }
        return t("panel.paint.title");
      case "group": // @ts-ignore
        if (object?.sub_type === "rough") {
          return t("panel.material.hand_drawn");
        }
        return t("setter.group.title");
      case "activeSelection":
        return t("setter.group.title");
      default:
        return t("setter.sketch.title");
    }
  };

  return (
    <>
      <span
        className="fabritor-toolbar-item"
        style={{
          marginRight: "5px",
          padding: "3px",
        }}
        onClick={toggleDrawer}
      >
        <SettingOutlined style={{ fontSize: "20px" }} />
      </span>

      {/* Drawer */}
      <Drawer
        title={getSetterTitle()}
        placement="right"
        width={SETTER_WIDTH + 30}
        onClose={toggleDrawer}
        open={isDrawerOpen}
        getContainer={false}
        contentWrapperStyle={{ transform: "none !important" }}
      >
        <div style={{ padding: 16 }}>
          {getRenderSetter()}
          <Divider />
          <CommonSetter />
        </div>
      </Drawer>
    </>
  );
}
