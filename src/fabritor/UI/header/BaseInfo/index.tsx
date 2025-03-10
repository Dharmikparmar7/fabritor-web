import { useState, useEffect, useContext } from "react";
import { Typography } from "antd";
import { GlobalStateContext } from "@/context";
import { useTranslation } from "@/i18n/utils";

const { Text } = Typography;

export default function BaseInfo() {
  const [desc, setDesc] = useState("");
  const { editor } = useContext(GlobalStateContext);
  const { t } = useTranslation();

  const handleChange = (v) => {
    const _v = v || t("header.fabritor_desc");
    setDesc(_v);
    if (!editor) return;
    const { sketch } = editor;
    // @ts-ignore custom desc
    sketch.set("fabritor_desc", _v);

    editor.fireCustomModifiedEvent();
  };

  useEffect(() => {
    if (!editor) return;
    const { sketch } = editor;
    // @ts-ignore custom desc
    setDesc(sketch.fabritor_desc);
  }, [editor?.sketch]);

  return (
    <Text
      className="baseinfo-text"
      editable={{
        onChange: handleChange,
        autoSize: {
          minRows: 1,
          maxRows: 1,
        },
      }}
      ellipsis={{
        // @ts-ignore
        rows: 1,
      }}
      style={{ margin: 0, width: 200 }}
    >
      {desc || ""}
    </Text>
  );
}
