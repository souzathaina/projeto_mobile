import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";

type CampoDeTextoProps = {
  onPressBotao: (texto: string) => void;  // Função que recebe um texto e retorna void
};

const CampoDeTexto = (props: CampoDeTextoProps) => {
    const [texto, setTexto] = useState('');
  
    return (
      <View style={styles.container}>
        <TextInput
          value={texto}
          onChangeText={setTexto}
          placeholder="Digite algo"
          style={styles.input}
        />
        <Pressable
          onPress={() => { props.onPressBotao(texto); }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Enviar Texto</Text>
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
      width: '80%',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#007bff',
      padding: 10,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  }); 

export default CampoDeTexto;