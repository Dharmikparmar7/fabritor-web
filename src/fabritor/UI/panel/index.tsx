import { Grid } from "antd";
import DesktopPanel from "./DesktopPanel";
import MobilePanel from "./MobilePanel";

export default function Panel() {
  const { md } = Grid.useBreakpoint(); // `md` is `true` for medium (768px+) screens

  return <>{md ? <DesktopPanel /> : <MobilePanel />}</>;
}
