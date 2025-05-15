import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { styles } from '../styles/styles';


type ListaProps = {
  listaTexto: string[]; 
  aoClicarItem: (frase: string) => void; 
};

const Lista = (props: ListaProps) => {
  return (
    <FlatList
      data={props.listaTexto} 
      renderItem={(itemLista) => { 
        return (
          <ItemTexto 
            nome={itemLista.item} 
            aoClicar={() => props.aoClicarItem(itemLista.item)} 
          />
        );
      }}
    />
  );
};

type ItemProps = {
  nome: string; 
  aoClicar: () => void; 
};

const ItemTexto = (props: ItemProps) => {
  return (
    <View style={styles.itemView}>
      <Pressable onPress={props.aoClicar}>
        <Text style={styles.itemText}>Nome: {props.nome}</Text>
      </Pressable>
    </View>
  );
};

export default Lista;
