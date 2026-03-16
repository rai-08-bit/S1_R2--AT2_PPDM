import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Alert,
  Pressable
} from 'react-native';

// import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.conteudoPrincipal}>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          CADASTRO DE USUÁRIO
        </Text>
        <View style={styles.conteudoSecundario}>
          <Text style={styles.texto}>Nome</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome" />

          <Text style={styles.texto}>Email</Text>
          <TextInput style={styles.input} placeholder="Digite seu email" />

          <Text style={styles.texto}>Telefone</Text>
          <TextInput style={styles.input} placeholder="Digite seu telefone" />

          <Text style={styles.texto}>Data de nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua data de nascimento"
          />
        </View>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#FF91A4' : '#EFDECD' },
            styles.botao,
          ]}
          onPress={() =>
            Alert.alert('Success', 'Seu cadastro foi salvo com sucesso')
          }>
          <Text>Salvar</Text>
        </Pressable>
      </View>
    </View>
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
    padding: 5,
  },
  conteudoPrincipal: {
    backgroundColor: '#F4C2C2',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 15,
    padding: 20,
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
    elevation: 10,
  },
  input: {
    backgroundColor: '#F4C2C2',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  botao: {
    padding: 15,
    borderRadius: 15,
    width: '95%',
    alignItems: 'center',
    elevation: 10,
  },
});
