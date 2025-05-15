import React, { useState } from 'react'; 
import { Pressable, Text, TextInput, View, StyleSheet } from 'react-native';
import { CampoDeTextoProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';

const CampoDeTexto = (props: CampoDeTextoProps) => {
  const [texto, setTexto] = useState('');
  const [textoEnviado, setTextoEnviado] = useState('');
  const { navigation } = props;

  const handlePressBotao = () => {
    setTextoEnviado(texto); 
  };

  return (
    <View style={styles.containerForm}>
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Digite algo"
        style={styles.campoEntrada}
      />

      {textoEnviado !== '' && (
        <Text style={styles.textoEscolhido}>Texto enviado: {textoEnviado}</Text>
      )}

      <Pressable
        onPress={handlePressBotao}
        style={styles.botaoEnviar}
      >
        <Text style={styles.textoBotaoEnviar}>Enviar Texto</Text>
      </Pressable>

      <Pressable style={styles.botaoVoltar} onPress={() => props.navigation.goBack()}>
            <Text style={styles.textoBotao}>Voltar</Text>
          </Pressable>
    </View>
  );
};

export default CampoDeTexto;
