import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios"; 
import { useColorScheme } from '@/hooks/useColorScheme';

export default function App() {

  const colorScheme = useColorScheme();
  
    const isDarkMode = colorScheme === 'dark';
  const [mensagem, setMensagem] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/")
      .then(response => setMensagem(response.data.message))
      .catch(error => console.error("Erro ao conectar ao servidor:", error));
  }, []);

  const enviarDados = () => {
    axios.post("http://localhost:3000/dados", { nome, email })
      .then(response => alert(response.data.mensagem))
      .catch(error => console.error("Erro ao enviar:", error));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>{mensagem}</Text>
      <TextInput
        placeholder="Nome"
        onChangeText={setNome}
        style={{ borderWidth: 1, marginVertical: 5, padding: 5 }}
        placeholderTextColor={isDarkMode ? '#bbb' : '#666'}
      />
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginVertical: 5, padding: 5 }}
      />
      <Button title="Enviar" onPress={enviarDados} />
    </View>
  );
}
