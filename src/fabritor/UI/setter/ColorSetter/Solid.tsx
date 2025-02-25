import { Popover } from "antd";
import { SketchPicker } from "react-color";
// import { Color, ColorPicker } from 'react-colors-beauty';

export default function SolidColorSetter(props) {
  const { value, onChange, trigger } = props;

  const handleChange = (color) => {
    if (!color) return;
    onChange?.(color.hex);
  };

  return (
    <Popover
      content={<SketchPicker color={value || "#fff"} onChange={handleChange} />}
      trigger="click"
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
              background: value,
            }}
          />
        )}
      </div>
    </Popover>
  );
}
