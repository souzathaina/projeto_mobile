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
    backgroundColor: '#E0FFFF',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center'

  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#0D47A1',
    margin: 25,
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
  button: {
    backgroundColor: '#1E88E5',
    padding: 12,
    borderRadius: 10,
    width: '45%', // Reduzido para caber 2 por linha
    alignItems: 'center',
    marginVertical: 5,
    elevation: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
    flexWrap: 'wrap', // permite quebra de linha se necessário
  },

  cancelButton: {
    backgroundColor: '#E53935',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Estilos da Lista
  listaContainer: {
    width: '80%',
    marginTop: 20,
  },

  itemText: {
    fontSize: 18,
    color: '#0D47A1',
    fontWeight: 'bold',
  },

  textoSelecionado: {
    marginTop: 20,
    fontSize: 20,
    color: '#00796B',
    fontWeight: 'bold',
  },


  //Lista
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    padding: 20,
    paddingBottom: 40,
  },

  secaoSuperior: {
    alignItems: 'center',
  },

  campoTexto: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#90CAF9',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    margin: 25,
  },

  botaoAcao: {
    backgroundColor: '#1E88E5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    elevation: 4,
  },

  textoBotao: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },

  lista: {
    flex: 1,
    marginVertical: 10,
  },

  itemListaTexto: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#BBDEFB',
    marginVertical: 4,
    borderRadius: 8,
    color: '#0D47A1',
    elevation: 2,
  },

  textoSelecionadoEstilo: {
    fontSize: 18,
    color: '#00796B',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
  },

  secaoInferior: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },

  botaoVoltar: {
    backgroundColor: '#BDBDBD',
    padding: 12,
    borderRadius: 10,
    width: '95%',
    alignItems: 'center',
    marginTop: 10,
    elevation: 4,
  },

  //notaaprovacao

  telaContainer: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloNotas: {
    fontSize: 30,
    textAlign: 'center',
    color: '#0D47A1',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textoInformacao: {
    fontSize: 18,
    color: '#0D47A1',
    marginBottom: 8,
  },
  textoAprovado: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  textoReprovado: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },

  textoBotaoVoltar: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  //campo texto
  containerForm: {
    flex: 1,
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center',     // centraliza horizontalmente
    padding: 20,
    backgroundColor: '#E6E6FA',
  },
  campoEntrada: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 12,
    margin: 25,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 10,
  },
  textoEscolhido: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
  botaoEnviar: {
    backgroundColor: '#1E88E5',
    padding: 12,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
  },
  textoBotaoEnviar: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemListaTextoEstilo: {
    fontSize: 18,
    color: '#0D47A1',
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    marginBottom: 5,
    elevation: 1,
  },


  botaoVoltarLista: {
    backgroundColor: '#BDBDBD',
    padding: 12,
    borderRadius: 10,
    width: '95%',
    alignItems: 'center',
    marginTop: 10,
    elevation: 4,
    margin:25,
  },

  //lista simples

  itemView: {
    backgroundColor: '#D8BFD8', // Lilás suave
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },

});


export { styles };