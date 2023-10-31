import React from "react";
import PropTypes from "prop-types";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick }) => {
  return (
    <div className="menu-item" onClick={onClick}>
      <div className="menu-item-icon">{icon}</div>
      <div className="menu-item-label">{label}</div>
    </div>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;
