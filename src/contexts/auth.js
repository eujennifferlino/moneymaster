import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loadingAuth, setloadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage(){
      const storageUser = await AsyncStorage.getItem('@finApp');

      if(storageUser){
        const response = await api.get('/me', {
          headers:{
            'Authorization': `Bearer ${storageUser}`
          }
        })
        .catch(()=>{
          setUser(null);
        })

        api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
        setUser(response.data);
        setLoading(false);
      }

      setLoading(false);

    }
    loadStorage();
  }, [])

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
      alert("ERRO AO CRIAR CADASTRO! " + err);
      setloadingAuth(false);
    }
  }

  async function signIn(email, password){
    setloadingAuth(true);

    try{
      const response = await api.post('/login', {
        email: email,
        password: password
      })

      const { id, name, token } = response.data;
      const data = {
        id,
        name,
        token,
        email,
      };

      await AsyncStorage.setItem('@finApp', token);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
      })
      setloadingAuth(false);

    }catch(err){
      alert("ERRO AO LOGAR! " + err);
      setloadingAuth(false);
    }

  }

  async function signOut(){
    await AsyncStorage.clear()
    .then(() =>{
      setUser(null);
    })
  }

  return(
    <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut, loadingAuth, loading }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;