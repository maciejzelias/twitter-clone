import Sidebar from "./Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="h-screen bg-white flex justify-center">
      <div className="container h-full xl:px-2 w-screen max-w-5xl flex">
        <Sidebar />
        <div className="ml-36">{children}</div>
      </div>
    </section>
  );
};

export default Layout;
