import { Alert, Image, Pressable, Switch, Text, TextInput, View, StyleSheet, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';
import { useState } from "react";
import { Paciente } from '../types/Paciente';
import { CadPacienteProps } from '../navigation/HomeNavigator';


import firestore from "@react-native-firebase/firestore";


const CadastroPaciente = (props: CadPacienteProps) => {
    //guarda os dados
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [ativado, setAtivado] = useState(false);

    function cadastrar() {
        if (verificaCampos()) {
            //crie um objeto do tipo Produto
            let produto = {
                nome: nome,
                email: email,
                telefone: Number.parseInt(telefone),
                ativado: ativado
            } as Paciente;


            //adiciona o objeto produto na tabela produtos
            firestore()
                .collection('paciente')
                .add(produto)
                .then(() => {
                    Alert.alert("Paciente", "Cadastrado com sucesso!");
                    props.navigation.goBack();
                })
                .catch((error) => {
                    Alert.alert("Erro", String(error));
                });
        }
    }

    function verificaCampos() {
        if (!nome) {
            Alert.alert("Nome em branco", "Digite um nome")
            return false;
        }
        if (!email) {
            Alert.alert("Email em branco", "Digite um email")
            return false;
        }
        if (!telefone) {
            Alert.alert("Telefone em branco", "Digite um número de telefone")
            return false;
        }
        return true;
    }

    //função para exibir os dados cadastrados
    const exibirDados = () => {
        Alert.alert(
            'Dados Cadastrados',
            'Nome:' + nome +
            '\nEmail:' + email +
            '\nTelefone:' + telefone +
            '\nPossui Comorbidade:' + ativado
        )
    }

    //função para limpar os campos quando clicar em cancelar
    const LimparCampos = () => {
        setNome('');
        setEmail('');
        setTelefone('');
        setAtivado(false);
    }

    return (

        <View style={styles.containerPrincipal}>
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
                value={nome}
                onChangeText={(text) => {
                    console.log(text);
                    setNome(text);
                }}
            />

            <TextInput
                placeholder="Informe seu email"
                placeholderTextColor="#666"
                style={styles.input}
                value={email}
                onChangeText={(text) => {
                    console.log(text);
                    setEmail(text);
                }}
            />

            <TextInput
                placeholder="Digite seu telefone"
                placeholderTextColor="#666"
                style={styles.input}
                value={telefone}
                onChangeText={(text) => {
                    console.log(text);
                    setTelefone(text);
                }}
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
                <Pressable style={styles.button} onPress={() => cadastrar()}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.cancelButton]} onPress={() => LimparCampos()}>
                    <Text style={styles.buttonText}>Apagar Campos</Text>
                </Pressable>
                <Pressable style={styles.botaoVoltar} onPress={() => props.navigation.goBack()}>
                    <Text style={styles.textoBotao}>Voltar</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default CadastroPaciente;
