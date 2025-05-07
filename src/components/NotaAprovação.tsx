import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type AlunoProps = {
  nome: string;
  nota1: number;
  nota2: number;
};

const AlunoInfo = ({ nome, nota1, nota2 }: AlunoProps) => {
  const media = ((nota1 + nota2) / 2).toFixed(1);
  const status = parseFloat(media) >= 7.0 ? 'Aprovado' : 'Reprovado';
  const statusStyle = parseFloat(media) >= 7.0 ? styles.aprovado : styles.reprovado

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{nome}</Text>
      <Text style= {styles.nota}>Nota 1: {nota1}</Text>
      <Text style= {styles.nota}>Nota 2: {nota2}</Text>
      <Text style= {styles.media}>Média Final: {media}</Text>
      <Text style={statusStyle}>Status: {status}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  titulo: { 
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
  aprovado :{
    fontSize:18,
    fontWeight : 'bold', 
    color:'#28a745',
    marginTop: 4,
  },
  reprovado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'dc3545',
    marginTop: 4,
  }
});

export default AlunoInfo;