import { FC, ReactNode, useEffect, useState } from "react";

interface AlertProps {
  isOpenAlert: boolean;
  setIsOpenAlert: (v: boolean) => void;
}

const Alert: FC<AlertProps | object> = ({ isOpenAlert, setIsOpenAlert }) => {
  return (
    <div className="alert-container">
      {/* HEADER */}
      <div className="alert-header-wrapper">
        <h3 className="alert-title">Header Wrapper</h3>
      </div>
    </div>
  );
};

export default Alert;
