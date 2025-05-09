import React from "react";
import { Dropdown, Layout, Space } from "antd";
import styles from "./Navbar.module.css";
import { DownOutlined } from "@ant-design/icons";
import { wrapperNavbar } from "@/constants/wrapperNavbar";
const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.avatar} />
          <Dropdown menu={{ items: wrapperNavbar }} trigger={["click"]}>
            <div
              className={styles.username}
              tabIndex={0}
              role="button"
              onClick={(e) => e.preventDefault()}>
              <Space>
                Admin
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
