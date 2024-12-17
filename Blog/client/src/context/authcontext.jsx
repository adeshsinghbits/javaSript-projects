import  { createContext, useState, useEffect } from 'react';



// Create a UserContext
export const AuthContext = createContext();

// Create a provider component
export const UserProvider = ( {children} ) => {
  const [loggedinUser, setLoggedinUser] = useState(
    localStorage.getItem("loggedinUser")
    ); 
  useEffect(() => {
    if (loggedinUser) {
      localStorage.setItem("loggedinUser", loggedinUser);
    } else {
      localStorage.removeItem("loggedinUser");
    } 
  }, [loggedinUser]);
  
  
return (
    <AuthContext.Provider value={{ loggedinUser, setLoggedinUser }}>
        {children}
    </AuthContext.Provider>
    );
};
