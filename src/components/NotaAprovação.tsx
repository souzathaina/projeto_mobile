import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type AlunoProps = {
  nome: string;
  nota1: number;
  nota2: number;
};

const AlunoInfo = ({ nome, nota1, nota2 }: AlunoProps) => {
  const media = ((nota1 + nota2) / 2);
  const status = (media) >= 7.0 ? 'Aprovado' : 'Reprovado';

  return (
    <View style={styles.container_Nota}>
      <Text style={styles.titulo_NotaAprovação}>{nome}</Text>
      <Text style={styles.nota}>Nota 1: {nota1}</Text>
      <Text style={styles.nota}>Nota 2: {nota2}</Text>
      <Text style={styles.media}>Média Final: {media}</Text>
      {
        media <= 7 ?
          <Text style={{ fontSize: 20, color: 'red' }}>por pouco, REPROVADO</Text>
          :
          <Text style={{ fontSize: 20, color: 'green' }}>PARABÉNS APROVADO</Text>

      }
    </View>

  );
};

const styles = StyleSheet.create({
  container_Nota: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  titulo_NotaAprovação: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#343a40',
    marginBottom: 8,
  },
  nota: {
    fontSize: 18,
    color: '#6c757d',
  },
  media: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 8,
  },

});

export default AlunoInfo;