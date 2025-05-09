import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";
import LayoutComponent from "@/components/templates/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Inter, sans-serif",
        },
      }}>
      <div className={inter.className}>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </div>
    </ConfigProvider>
  );
}
