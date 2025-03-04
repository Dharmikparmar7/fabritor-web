import { Popover } from "antd";
import { SketchPicker } from "react-color";

export default function ColorSetter(props) {
  const {
    defaultColor = "rgba(255, 255, 255, 1)",
    trigger,
    type,
    value,
    onChange,
  } = props;

  const handleChange = (color) => {
    if (!color) return;
    onChange?.({
      color: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
      type: "solid",
    });
  };

  return (
    <Popover
      content={
        <SketchPicker
          color={value?.color || defaultColor}
          onChange={handleChange}
        />
      }
      trigger="click"
      overlayStyle={{ zIndex: 9999 }}
    >
      <div
        className="fabritor-toolbar-item"
        style={{
          borderRadius: 4,
          backgroundColor: "#ccc",
        }}
      >
        {trigger || (
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 20,
              background: value?.color || defaultColor,
            }}
          />
        )}
      </div>
    </Popover>
  );
}
