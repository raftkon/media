import classNames from "classnames";
import React from "react";
import { GoSync } from "react-icons/go";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className = "",
  loading,
  ...otherProps
}) => {
  const getClassFromProps = () => {
    if (primary) {
      return `border-blue-500  ${
        outline ? "text-blue-500 bg-white" : "text-white bg-blue-500"
      }`;
    }
    if (secondary) {
      return `border-gray-900 ${
        outline ? "text-gray-900 bg-white" : "text-white bg-gray-900 "
      }`;
    }
    if (success) {
      return `border-green-500  ${
        outline ? "text-green-500 bg-white" : "text-white bg-green-500"
      }`;
    }
    if (danger) {
      return `border-red-500  ${
        outline ? "text-red-500 bg-white" : "text-white bg-red-500"
      }`;
    }
    if (warning) {
      return `border-yellow-400  ${
        outline ? "text-yellow-400 bg-white" : "text-white bg-yellow-400"
      }`;
    }
  };
  const finalClassNames = classNames(
    "flex items-center px-3 py-1.5 border h-8 ",
    getClassFromProps(),
    rounded && "rounded-lg",
    className
  );

  return (
    <button {...otherProps} disabled={loading} className={finalClassNames}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true."
      );
    }
  },
};

export default Button;
