import React, { createContext, useState, useContext } from "react";

// Create the context
export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = async (userId, userData) => {
    try {
      const response = await fetch(
        `http://localhost:8000/updateUserData/${userId}`,
        {
          method: "PUT", // Use PUT for updating
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user data");
      }

      const updatedUser = await response.json();
      setUser(updatedUser); // Update the user in context
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
