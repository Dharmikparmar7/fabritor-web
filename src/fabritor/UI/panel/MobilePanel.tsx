import { GlobalStateContext } from "@/context";
import { Trans } from "@/i18n/utils";
import {
  AlertOutlined,
  AppstoreOutlined,
  BorderOutlined,
  BulbOutlined,
  FileTextOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Drawer, Flex } from "antd";
import { useContext, useState } from "react";
import AppPanel from "./AppPanel";
import DesignPanel from "./DesignPanel";
import ImagePanel from "./ImagePanel";
import PaintPanel from "./PaintPanel";
import ShapePanel from "./ShapePanel";
import TextPanel from "./TextPanel";

const iconStyle = { fontSize: 18 };

const OBJECT_TYPES = [
  {
    label: <Trans i18nKey="panel.design.title" />,
    value: "design",
    icon: <AlertOutlined style={iconStyle} />,
  },
  {
    label: <Trans i18nKey="panel.text.title" />,
    value: "text",
    icon: <FileTextOutlined style={iconStyle} />,
  },
  {
    label: <Trans i18nKey="panel.image.title" />,
    value: "image",
    icon: <PictureOutlined style={iconStyle} />,
  },
  {
    label: <Trans i18nKey="panel.material.title" />,
    value: "shape",
    icon: <BorderOutlined style={iconStyle} />,
  },
  //   {
  //     label: <Trans i18nKey="panel.paint.title" />,
  //     value: "paint",
  //     icon: <BulbOutlined style={iconStyle} />,
  //   },
  //   {
  //     label: <Trans i18nKey="panel.app.title" />,
  //     value: "app",
  //     icon: <AppstoreOutlined style={iconStyle} />,
  //   },
];

export default function MobilePanel() {
  const { editor } = useContext(GlobalStateContext);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabChange = (key: string) => {
    if (editor?.canvas) {
      editor.canvas.isDrawingMode = key === "paint";
    }
    setActiveTab(key);
  };

  function closeDrawer() {
    setActiveTab(null);
  }

  const renderPanel = (value: string) => {
    switch (value) {
      case "design":
        return <DesignPanel />;
      case "text":
        return <TextPanel closeDrawer={closeDrawer} />;
      case "image":
        return <ImagePanel closeDrawer={closeDrawer} />;
      case "shape":
        return <ShapePanel closeDrawer={closeDrawer} />;
      case "paint":
        return <PaintPanel />;
      case "app":
        return <AppPanel />;
      default:
        return null;
    }
  };

  const renderLabel = (item: any) => (
    <Flex vertical justify="center" align="center">
      <div>{item.icon}</div>
      <div style={{ fontSize: 12 }}>{item.label}</div>
    </Flex>
  );

  return (
    <>
      {/* Mobile Footer Tabs */}
      <div className="fabritor-mobile-footer">
        {OBJECT_TYPES.map((item) => (
          <div
            key={item.value}
            className="fabritor-tab-item"
            onClick={() => handleTabChange(item.value)}
          >
            {renderLabel(item)}
          </div>
        ))}
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        open={!!activeTab}
        onClose={() => setActiveTab(null)}
        title={OBJECT_TYPES.find((item) => item.value === activeTab)?.label}
        placement="bottom"
        height="80vh"
      >
        {activeTab && renderPanel(activeTab)}
      </Drawer>
    </>
  );
}
