import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (text) => {
    setNotifications((prev) => [...prev, text]);
  };

  const deleteNotification = (index) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, deleteNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
