import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarProfile from "./SidebarProfile";

type navigationItem = {
  label: string;
  href: string;
  icon: any;
};

const Sidebar = () => {
  const navigations: navigationItem[] = [
    { label: "Home", href: "/home", icon: BsHouseFill },
  ];
  return (
    <div className="h-full px-2 flex flex-col justify-between fixed">
      <div className="flex flex-col">
        <div> twitter icon here</div>
        <div>
          {[1, 2, 3, 4, 5, 6, 7].map((el) => (
            <p key={el}> navigation item {el}</p>
          ))}
        </div>
        <button>tweet button</button>
      </div>
      <SidebarProfile />
    </div>
  );
};

export default Sidebar;
