import React from "react";
import { IconType } from "react-icons";

const NavigationItemIcon: React.FC<{ icon: IconType }> = ({ icon }) => {
  const IconComponent = icon;
  return <IconComponent size={25}></IconComponent>
};

export default NavigationItemIcon;
