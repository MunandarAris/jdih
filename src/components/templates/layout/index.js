import React from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import styles from "./Layout.module.css";

const { Content } = Layout;

const LayoutComponent = ({ children }) => {
  return (
    <Layout className={styles.container}>
      <Sidebar />
      <Layout>
        <Navbar />
        <Content>
          <div className={styles.wrapper}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
