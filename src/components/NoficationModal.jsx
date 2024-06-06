import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNotifications } from "../contexts/NotificationContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const NotificationModal = ({ isOpen, closeModal }) => {
  const { notifications, deleteNotification } = useNotifications();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-center items-center bg-black bg-opacity-70">
      <div className="relative bg-white rounded-lg shadow-lg h-4/5 overflow-x-scroll w-2/5">
        <div className="flex justify-between items-center pb-3 bg-teal-500 p-4">
          <p className="text-2xl font-semibold text-white">Notifications</p>
          <button onClick={closeModal} className="text-lg font-semibold">
            X
          </button>
        </div>
        <div className="px-6 pt-2">
          {notifications.length === 0 ? (
            <p className="text-center text-gray-500">No notifications</p>
          ) : (
            <ul>
              {notifications.map((notification, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded"
                >
                  <span className="text-base font-medium">{notification}</span>
                  <button
                    onClick={() => deleteNotification(index)}
                    className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded duration-150"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
