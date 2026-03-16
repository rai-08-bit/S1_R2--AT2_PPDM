import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Alert,
  Pressable
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setData] = useState('');

  const realizarCadastro = () => {
    if (email === '' || nome === '' || telefone === '' || dataNascimento === '' ) {
      Alert.alert("Atenção, por favor insira seus dados corretamente");
    } else {
      Alert.alert(`Cadastro realizado com sucesso. Bem-vindo(a) ${nome}!`)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudoPrincipal}>
        <StatusBar style="auto" />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>CADASTRO DE USUÁRIO</Text>
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
        <Pressable
          style={styles.botao}
          onPress={realizarCadastro}>
          <Text style={styles.textoBotao}>Salvar</Text>
        </Pressable>
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
    fontSize: 17,
    textAlign: 'center',
    padding: 5
  },
  conteudoPrincipal: {
    backgroundColor: '#F4C2C2',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 15,
    padding: 20
  },
  conteudoSecundario: {
    backgroundColor: '#EFDECD',
    marginTop: 50,
    padding: 20,
    marginBottom: 50,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10
  },
  input: {
    backgroundColor: '#F4C2C2',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5
  },
  botao: {
    backgroundColor: '#EFDECD',
    padding: 15,
    borderRadius: 15,
    width: '95%',
    alignItems: 'center',
    elevation: 10
  }
});
