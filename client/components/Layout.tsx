import Sidebar from "./Sidebar/Sidebar";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between">
      <Sidebar />
      <div className={`grow ${styles.main}`}>{children}</div>
      <div className="mr-2 sticky h-screen self-start" />
    </div>
  );
};

export default Layout;
