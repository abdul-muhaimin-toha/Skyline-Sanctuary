import AuthContext from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={""}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
