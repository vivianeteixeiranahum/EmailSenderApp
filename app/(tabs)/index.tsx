import { Image, StyleSheet, Platform, TextInput, Text, Button } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';
import axios from 'axios';


export default function HomeScreen() {
  const [email, SetEmail] = useState("");
  const [nome, SetNome] = useState("");
  const [mensagem, SetMensagem] = useState("");

  const sendEmailContato = async () => {
    const dados = {
      nome: nome,
      email: email,
      mensagem: mensagem
    };

    axios.post(
      'http://localhost:5000/send-email-contato',
      dados
    )
      .then(function (response) {
        console.log(response);
        alert("Email enviado com Sucesso")
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDD', dark: '#1D3D4' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Email Api</ThemedText>
      </ThemedView>
      <ThemedText type="subtitle">Bem-Vindo</ThemedText>
      <ThemedView>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={SetNome}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={SetEmail}
          placeholder="E-mail"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textArea}
          value={mensagem}
          onChangeText={SetMensagem}
          placeholder="Mensagem"
          multiline
        />
      </ThemedView>
      <ThemedView>
        <Button onPress={sendEmailContato} title="Enviar E-mail" />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  textArea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
});

