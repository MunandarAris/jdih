import { Layout, Menu } from "antd";
import Image from "next/image";
import Logo from "../../../../public/assets/images/logo.png";
import { usePathname, useRouter } from "next/navigation";
import { wrapperSidebar } from "@/constants/wrapperSidebar";
const { Sider } = Layout;

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuClick = ({ key }) => {
    if (key !== pathname) {
      router.push(key);
    }
  };

  return (
    <Sider
      width={256}
      collapsible
      style={{
        minHeight: "100vh",
        height: "100vh",
      }}>
      <div className="header-container">
        <Image src={Logo} alt="Logo" width={50} height={50} loading="lazy" />
        <h1>JDIH Polri</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        items={wrapperSidebar}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};

export default Sidebar;
