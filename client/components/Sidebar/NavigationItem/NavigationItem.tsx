import React from "react";
import { navigationItem } from "../Sidebar";
import Image from "next/image";
import NavigationItemIcon from "./NavigationItemIcon";

const NavigationItem: React.FC<{ props: navigationItem }> = ({ props }) => {
  return (
    <button key={props.label} className="flex flex-row gap-3">
      {/* TODO Refactor this code, NavigationItemIcon should define also Image icons ! */}
      {props.iconPath && (
        <Image
          src={props.iconPath.path}
          alt={props.label}
          width={props.iconPath.width}
          height={props.iconPath.height}
        />
      )}
      {props.icon && <NavigationItemIcon icon={props.icon} />}
      {props.label}
    </button>
  );
};

export default NavigationItem;
