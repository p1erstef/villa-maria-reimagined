import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  headerVariant?: "light" | "dark";
}

export const Layout = ({ children, headerVariant = "light" }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header variant={headerVariant} />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};
