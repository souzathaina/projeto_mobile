import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import { styles } from '../styles/styles';
import Exemplo01 from '../components/Exemplo01';
import Exemplo1 from '../components/Exemplo1';
import Exemplo05_Text from '../components/Exemplo05_Text';
import Exemplo06_TextInput from '../components/Exemplo06_TextInput';
import ExemploStyleView from '../components/ExemploStyleView';
import CadastroPaciente from '../layouts/CadastroPaciente';
import NotaAprovação from '../components/NotaAprovação';

//Componente chamado TelaPrincipal que recebe 
//PrincipalProps 
//como parametro e constrói uma View com o componente 
//HelloWorld e Exemplo1 dentro
const TelaPrincipal = (props: PrincipalProps) => {
  
  return (
    <View
      style={[styles.tela]}>
        <NotaAprovação nome={'Thainá'} nota1={5} nota2={5}/>
        
    </View>
  );
}

//exportando o componente TelaPrincipal para ficar visível para outros arquivos
export default TelaPrincipal;
