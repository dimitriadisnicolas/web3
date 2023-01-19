import React from "react";

import { Layout, Menu } from "antd";
import { Context as AppContext } from "contexts/appContext";
import { useContext } from "react";
import AllChildrenPage from "./AllChildrenPage";
import { Link, Routes, Route } from "react-router-dom";
import HelpPage from "./HelpPage";
import ChildPage from "./ChildPage";

const { Header, Content } = Layout;

const App = () => {
  const { childrenList } = useContext(AppContext);

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
          <Menu.Item>
            <Link to="/children">All Children</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/help">Help</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "30px 50px" }}>
        <Routes>
          <Route path="/help" element={<HelpPage />}></Route>
          <Route
            path="/children"
            element={<AllChildrenPage children={childrenList} />}
          ></Route>
          <Route
            path="/"
            element={<AllChildrenPage children={childrenList} />}
          ></Route>
          <Route
            path="/children/:id"
            element={<ChildPage children={childrenList} />}
          ></Route>
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
