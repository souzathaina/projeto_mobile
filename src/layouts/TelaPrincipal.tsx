import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from '../styles/styles';
import { PrincipalProps } from '../navigation/HomeNavigator';

const TelaPrincipal = (props: PrincipalProps) => {
  const [mensagem, setMensagem] = useState('');

  const receberTexto = (texto: string) => {
    setMensagem(texto);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo1}>Bem-vindo!</Text>

      {mensagem !== '' && (
        <Text >Texto recebido: {mensagem}</Text>
      )}

      {/* Botão para a tela Campo de Texto */}
      <Pressable
        onPress={() =>
          props.navigation.navigate("CampoDeTexto", { onPressBotao: receberTexto })
        }
        style={styles.botao}
      >
        <Text style={styles.texto_botao}>Campo de Texto</Text>
      </Pressable>

      {/* Botão para a tela Lista */}
      <Pressable onPress={() => props.navigation.navigate("Lista")} style={styles.botao}>
        <Text style={styles.texto_botao}>Lista</Text>
      </Pressable>

      {/* Botão para a tela Nota de Aprovação com parâmetros */}
      <Pressable
        onPress={() => props.navigation.navigate("NotaAprovacao", { nome: "João", nota1: 8, nota2: 7 })}
        style={styles.botao}
      >
        <Text style={styles.texto_botao}>Nota de Aprovação</Text>
      </Pressable>

      <Pressable
      onPress={() => props.navigation.navigate("CadastroPaciente")} style={styles.botao}>
        <Text style={styles.textoBotao}>Cadastro de Paciente</Text>
        </Pressable>
    </View>
  );
};

export default TelaPrincipal;
