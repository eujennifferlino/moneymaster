import React, { createContext, useState } from "react";
import api from "../services/api";
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loadingAuth, setloadingAuth] = useState(false);

  const navigation = useNavigation();

  async function signUp(email, password, name){
    setloadingAuth(true);
    try{
      const response = await api.post('/users',{
        name:name,
        password:password,
        email:email,
      })
      setloadingAuth(false);
      navigation.goBack();

    }catch(err){
      console.log("ERRO AO CRIAR CADASTRO!", err);
      setloadingAuth(false);
    }
  }

  return(
    <AuthContext.Provider value={{ user, signUp, loadingAuth }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;