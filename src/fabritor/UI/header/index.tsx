import { CenterV } from "@/fabritor/components/Center";
import { Layout } from "antd";
import MobileSetter from "../setter/MobileSetter";
import BaseInfo from "./BaseInfo";
import Export from "./Export";
import Logo from "./Logo";
import Toolbar from "./Toolbar";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  padding: 0,
  height: 50,
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid #e8e8e8",
};

export default function () {
  return (
    <Header style={headerStyle}>
      <Logo />
      <CenterV justify="space-between" style={{ flex: 1 }}>
        <BaseInfo />
        <Toolbar />
      </CenterV>
      <Export />
      <MobileSetter />
    </Header>
  );
}
