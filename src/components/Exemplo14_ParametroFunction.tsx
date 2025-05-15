import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import { Produto } from "../types/Produto";

type ExemploProps={
  onClick?: () => void; //O parãmetro é uma função sem parâmetros e que o retorno é void
}

const Exemplo14_ParametroFunction = (props: ExemploProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <Pressable
        style={styles.botao}
        onPress={() => { props.onClick && props.onClick() }}>
        <Text style={styles.texto_botao}>Acionar Evento</Text>
      </Pressable>
    </View>
  );
}

export default Exemplo14_ParametroFunction;

/*
Crie um componente chamado CampoDeTexto que contenha um campo de texto 
e um botão, esse componente deve ter como propriedade uma função chamada 
onPressBotao com  um parâmetro string e que retorne void. A função 
onPressBotao deve ser acionada ao clicar no botão presente no componente 
CampoDeTexto e deve ser passado o texto do TextInput como parâmetro de 
onPressBotao. 
Depois na tela principal adicione um componente do tipo CampoDeTexto 
passando como propriedade uma função que você irá criar na tela principal
e que irá exibir o valor que vier como parâmetro
*/