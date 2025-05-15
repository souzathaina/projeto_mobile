import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles/styles';
import { NotaAprovacaoProps } from '../navigation/HomeNavigator';

const NotaAprovacaoScreen = (props: NotaAprovacaoProps) => {
  const { nome, nota1, nota2 } = props.route.params;
  const media = (nota1 + nota2) / 2;

  return (
    <View style={styles.telaContainer}>
      <Text style={styles.tituloNotas}>Notas do Aluno</Text>
      <Text style={styles.textoInformacao}>Nome: {nome}</Text>
      <Text style={styles.textoInformacao}>Nota 1: {nota1}</Text>
      <Text style={styles.textoInformacao}>Nota 2: {nota2}</Text>
      <Text style={styles.textoInformacao}>Média Final: {media.toFixed(1)}</Text>

      {media <= 7 ? (
        <Text style={styles.textoReprovado}>Por pouco, REPROVADO</Text>
      ) : (
        <Text style={styles.textoAprovado}>PARABÉNS, APROVADO!</Text>
      )}

      <Pressable onPress={() => props.navigation.goBack()} style={styles.botaoVoltar}>
        <Text style={styles.textoBotaoVoltar}>Voltar</Text>
      </Pressable>
    </View>
  );
};

export default NotaAprovacaoScreen;
