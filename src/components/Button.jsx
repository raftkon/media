import React from "react";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
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
  return (
    <button
      {...otherProps}
      className={`flex items-center px-3 py-1.5 border
        ${getClassFromProps()} ${rounded && "rounded-lg"}
        ${className ? className : ""}`}
    >
      {children}
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
