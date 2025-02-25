import Fabritor from "@/fabritor";
import enUS from "antd/locale/en_US";
import * as dayjs from "dayjs";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./i18n";

import { ConfigProvider } from "antd";
import "dayjs/locale/zh-cn";

const HtmlComponent = ({ defaultUrl }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    dayjs.locale("en");
    i18n.changeLanguage("en-US");
  }, [i18n]);

  return (
    <ConfigProvider locale={enUS}>
      <Fabritor defaultImageUrl={defaultUrl} />;
    </ConfigProvider>
  );
};

const App = ({ defaultUrl }) => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<HtmlComponent defaultUrl={defaultUrl} />} />
      </Routes>
    </Router>
  );
};

export default App;
