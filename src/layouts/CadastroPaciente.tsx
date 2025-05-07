import React, { useState } from 'react';
import { Alert, Image, Pressable, Switch, Text, TextInput, View, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';

const CadastroPaciente = () => {
    const [ativado, setAtivado] = useState(false);

    return (


        <View style={styles.container}>
            <Text style={styles.title}>CADASTRO</Text>

            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2355/2355692.png' }}
                style={styles.image}
            />

            <Text style={styles.label}>Nome:</Text>
            <TextInput
                placeholder="Informe seu nome"
                placeholderTextColor="#666"
                style={styles.input}
            />


            <Text style={styles.label}>Email:</Text>
            <TextInput
                placeholder="Informe seu email"
                placeholderTextColor="#666"
                style={styles.input}
            />

            <Text style={styles.label}>Telefone:</Text>
            <TextInput
                placeholder="Digite seu telefone"
                placeholderTextColor="#666"
                style={styles.input}
            />

<View style={styles.switchContainer}>
  <Text style={styles.label}>Possui Comorbidade:</Text>
  <View style={styles.switchWrapper}>
    <Switch
      value={ativado}
      onValueChange={(value) => setAtivado(value)}
    />
    <Text style={styles.comorbidadeText}>
      {ativado ? 'Sim' : 'Não'}
    </Text>
  </View>
</View>


            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => Alert.alert('Cadastrado com sucesso!')}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.cancelButton]} onPress={() => Alert.alert('Cancelado')}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default CadastroPaciente;
