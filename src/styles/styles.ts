import { StyleSheet } from "react-native";

// Estilos Gerais
const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#E3F2FD', 
    },
    tituloTela: {
        fontSize: 35,
        textAlign: 'center',
        color: '#0D47A1',
    },
    titulo1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#0D47A1',
    },
    titulo2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0D47A1',
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        backgroundColor: '#1E88E5',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10,
        elevation: 4,
    },
    botao_vermelho: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E53935',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10,
        elevation: 4,
    },
    texto_botao: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    },
    titulo_campos: {
        fontSize: 20,
        color: '#0D47A1',
    },
    caixa_texto: {
        color: '#000',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        margin: 3,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    largura_70: {
        width: '70%',
    },
    imagem_200: {
        width: 200,
        height: 200,
    },
    card: {
        borderWidth: 2,
        borderColor: '#0D47A1',
        borderRadius: 15,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#FFF',
        elevation: 3,
    },
    click: {
        opacity: 0.5,
    },
    centralizar: {
        alignItems: 'center',
    },

    // CadastroPaciente aproveitando os estilos gerais
    container: {
        flex: 1,
        backgroundColor: '#E3F2FD', 
        padding: 30,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: 'bold',
        color: '#0D47A1', 
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#0D47A1',
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: '#90CAF9',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
        backgroundColor: '#FFF',
        elevation: 2,
    },

    //  CadastroPaciente com estilos exclusivos
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    switchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    comorbidadeText: {
        fontSize: 16,
        color: '#0D47A1',
        marginLeft: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#1E88E5',
        padding: 14,
        borderRadius: 10,
        width: '40%',
        alignItems: 'center',
        elevation: 4,
    },
    cancelButton: {
        backgroundColor: '#E53935',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export { styles };