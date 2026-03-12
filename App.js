import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  Pressable,
  Button,
  Alert,
  ScrollView,
  TextInputComponent,
} from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setData] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudoPrincipal}>
        <StatusBar style="auto" />
        <Text style={styles.texto}>Cadastro de usuário</Text>
        <View style={styles.conteudoSecundario}>

          <Text style={styles.texto}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder = "Digite seu nome"
            value={nome}
            onChangeText= {setNome}
          />

          <Text style={styles.texto}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder = "Digite seu email"
            value={email}
            onChangeText= {setEmail}
          />

          <Text style={styles.texto}>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholder = "Digite seu telefone"
            value={telefone}
            onChangeText= {setTelefone}
          />

          <Text style={styles.texto}>Data de nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder = "Digite sua data de nascimento"
            value={dataNascimento}
            onChangeText= {setData}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF91A4',
  },
  texto: {
    fontSize: 20,
    textAlign: 'left'
  },
  conteudoPrincipal: {
    backgroundColor: '#F4C2C2',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  conteudoSecundario: {
    backgroundColor: '#EFDECD',
    marginTop: 50,
    padding: 20,
    marginBottom: 50,
    width: '95%',
    justifyContent: 'left',
    alignItems: 'left',
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#F4C2C2',
    width: '95%',
    justifyContent: 'left',
    alignItems: 'left',
    borderRadius: 10,
  }
});
