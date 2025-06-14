import { Slider } from "antd";
import "./index.scss";

// @ts-ignore
import None from '@/assets/effects/None.png';
// @ts-ignore
import Vintage from '@/assets/effects/Vintage.png';
// @ts-ignore
import Film from '@/assets/effects/Film.png';
// @ts-ignore
import OldPhoto from '@/assets/effects/Old Photo.png';
// @ts-ignore
import Polaroid from '@/assets/effects/Polaroid.png';
// @ts-ignore
import Blur from '@/assets/effects/Blur.png';
// @ts-ignore
import Emboss from '@/assets/effects/Emboss.png';
// @ts-ignore
import Pixelate from '@/assets/effects/Pixelate.png';
// @ts-ignore
import BlackAndWhite from '@/assets/effects/Black And White.png';
// @ts-ignore
import HueAdjustment from '@/assets/effects/Hue Adjustment.png';

const COLOR_FILTER_LIST = [
  {
    label: "None",
    value: "none",
    src: None,
  },
  {
    label: "Vintage",
    value: "Sepia",
    src: Vintage,
  },
  {
    label: "Film",
    value: "Kodachrome",
    src: Film,
  },
  {
    label: "Old Photo",
    value: "Vintage",
    src: OldPhoto,
  },
  {
    label: "Polaroid",
    value: "Polaroid",
    src: Polaroid,
  },
  {
    label: "Blur",
    value: "Blur",
    src: Blur,
  },
  {
    label: "Emboss",
    value: "Emboss",
    src: Emboss,
  },
  {
    label: "Pixelate",
    value: "Pixelate",
    src: Pixelate,
  },
  {
    label: "Black & White",
    value: "Grayscale",
    src: BlackAndWhite,
  },
  {
    label: "Hue Adjustment",
    value: "HueRotation",
    src: HueAdjustment,
  },
];

export default function RadioImageGroup(props) {
  const { value, onChange } = props;

  const handleChange = (v, key) => {
    onChange?.({
      ...value,
      [key]: v,
    });
  };

  return (
    <div className="fabritor-radio-image-group">
      {COLOR_FILTER_LIST.map((option) => (
        <div
          className="fabritor-radio-image-group-item"
          onClick={() => {
            handleChange(option.value, "type");
          }}
        >
          <div
            className="fabritor-radio-image-group-img"
            style={{
              borderColor: value?.type === option.value ? "#ff2222" : "#eeeeee",
            }}
          >
            <img src={option.src} />
          </div>
          <span>{option.label}</span>
          {option.value === "Blur" && value?.type === "Blur" ? (
            <Slider
              min={0}
              max={1}
              step={0.01}
              value={value?.param == undefined ? 0.2 : value?.param}
              onChange={(v) => {
                handleChange(v, "param");
              }}
            />
          ) : null}
          {option.value === "Pixelate" && value?.type === "Pixelate" ? (
            <Slider
              min={2}
              max={20}
              step={0.01}
              value={value?.param == undefined ? 4 : value?.param}
              onChange={(v) => {
                handleChange(v, "param");
              }}
            />
          ) : null}
          {option.value === "HueRotation" && value?.type === "HueRotation" ? (
            <Slider
              min={-2}
              max={2}
              step={0.002}
              value={value?.param == undefined ? 0 : value?.param}
              onChange={(v) => {
                handleChange(v, "param");
              }}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
