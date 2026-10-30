import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "虹笺｜彩虹桌面整理便签",
  description: "每天五分钟，用一张彩虹便签整理 Mac 桌面、截图、安装包与照片。",
  icons: { icon: "/hongjian-icon.png", shortcut: "/hongjian-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
