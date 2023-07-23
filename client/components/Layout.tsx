import Sidebar from "./Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between min-h-screen">
      <Sidebar />
      <main className={`w-990 flex min-h-full justify-between`}>
        <div className={`w-full border-x border-gray-700 max-w-600 min-h-300vh `}>{children}</div>
        <div className={`w-80 mr-2 sticky top-0 max-h-screen overflow-y-scroll scrollbar-none`}>
          <div className="sticky top-0">searcher</div>
          {[1, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7].map((value, index) => (
            <div key={index} className="h-36">
              {value}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Layout;
