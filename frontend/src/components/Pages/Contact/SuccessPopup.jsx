import React, { useEffect } from "react";

function SuccessPopup({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 rounded-md shadow-md border border-black max-w-50px">
      <p className="text-black">{message}</p>
    </div>
  );
}

export default SuccessPopup;
