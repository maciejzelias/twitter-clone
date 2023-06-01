import Image from "next/image";
import { IconType } from "react-icons";
import { BsBookmarks, BsHouseDoorFill } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiNewspaperLine } from "react-icons/ri";
import SidebarProfile from "./SidebarProfile";
import NavigationItem from "./NavigationItem/NavigationItem";

export type navigationItem = {
  label: string;
  href?: string;
  iconPath?: {
    path: string;
    width: number;
    height: number;
  };
  icon?: IconType;
  onClick?: () => void;
};

const navigations: navigationItem[] = [
  {
    label: "",
    href: "/home",
    iconPath: {
      path: "/images/twitterLogo.svg",
      width: 50,
      height: 50,
    },
  },
  {
    label: "Home",
    href: "/home",
    icon: BsHouseDoorFill,
  },
  {
    label: "Browse",
    href: "/explore",
    icon: FaHashtag,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: IoIosNotificationsOutline,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: AiOutlineMail,
  },
  {
    label: "Lists",
    href: "/yourID/lists",
    icon: RiNewspaperLine,
  },
  {
    label: "Bookmarks",
    href: "/bookmarks",
    icon: BsBookmarks,
  },
  {
    label: "Twitter Blue",
    href: "/home",
    icon: BsBookmarks,
  },
  {
    label: "Profile",
    href: "/yourID",
    icon: CgProfile,
  },
  {
    label: "More",
    onClick: () => {
      console.log("More actions");
    },
    icon: CiCircleMore,
  },
];

const Sidebar = () => {
  return (
    <div className="max-h-screen overflow-y-scroll top-0 px-2 flex flex-col justify-between sticky">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          {navigations.map((navItem, index) => (
            <NavigationItem key={index} props={navItem} />
          ))}
        </div>
        <button>tweet button</button>
      </div>
      <SidebarProfile />
    </div>
  );
};

export default Sidebar;
