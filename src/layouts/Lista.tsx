import React, { useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../styles/styles';
import { ListaProps } from '../navigation/HomeNavigator';

const Lista = (props: ListaProps) => {
  const [texto, setTexto] = useState(''); 
  const [itens, setItens] = useState<string[]>([]); 
  const [textoSelecionado, setTextoSelecionado] = useState(''); 

  const adicionarItem = () => {
    if (texto.trim() !== '') {
      setItens([...itens, texto]);
      setTexto(''); 
    }
  };

  return (
    <View style={styles.containerPrincipal}>
  
  <View style={styles.secaoSuperior}>
    <TextInput
      value={texto}
      onChangeText={setTexto}
      placeholder="Digite algo"
      style={styles.campoTexto}
    />
    <Pressable onPress={adicionarItem} style={styles.botaoAcao}>
      <Text style={styles.textoBotao}>Adicionar</Text>
    </Pressable>
  </View>

 
  <FlatList
    data={itens}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
      <Pressable onPress={() => setTextoSelecionado(item)}>
        <Text style={styles.itemListaTexto}>{item}</Text>
      </Pressable>
    )}
    style={styles.lista}
  />

  
  <View style={styles.secaoInferior}>
    {textoSelecionado !== '' && (
      <Text style={styles.textoSelecionadoEstilo}>
        Selecionado: {textoSelecionado}
      </Text>
    )}

    <Pressable style={styles.botaoVoltarLista} onPress={() => props.navigation.goBack()}>
      <Text style={styles.textoBotao}>Voltar</Text>
    </Pressable>
  </View>
</View>

  );
};

export default Lista;