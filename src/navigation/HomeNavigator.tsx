import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../layouts/TelaPrincipal";
import NotaAprovacao from "../layouts/NotaAprovacao";
import CampoDeTexto from "../layouts/CampoDeTexto";
import Lista from "../layouts/Lista";
import CadastroPaciente from "../layouts/CadastroPaciente";

// Define quais as telas e os parâmetros de cada tela
type RootStackParamList = {
  TelaPrincipal: undefined;
  CampoDeTexto: { 
    onPressBotao: (texto: string) => void; // Função onPressBotao que recebe um texto
  };
  Lista: undefined;
  NotaAprovacao: { nome: string; nota1: number; nota2: number };
  CadastroPaciente: undefined;
};

// Cria a Stack (tipo de navegação onde as telas estão em uma "pilha")
const Stack = createNativeStackNavigator<RootStackParamList>();

// Cria o navegador da pilha
const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TelaPrincipal" // Nome da tela inicial
      screenOptions={{ headerShown: false }} // headerShown define se o cabeçalho irá ser exibido
    >
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
      <Stack.Screen name="CampoDeTexto" component={CampoDeTexto} />
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="NotaAprovacao" component={NotaAprovacao} />
      <Stack.Screen name= "CadastroPaciente" component={CadastroPaciente}/>
    </Stack.Navigator>
  );
};

// Cria as propriedades das telas, para passar para os componentes
type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;
type CampoDeTextoProps = NativeStackScreenProps<RootStackParamList, 'CampoDeTexto'>;
type ListaProps = NativeStackScreenProps<RootStackParamList, 'Lista'>;
type NotaAprovacaoProps = NativeStackScreenProps<RootStackParamList, 'NotaAprovacao'>;
type CadPacienteProps = NativeStackScreenProps<RootStackParamList, 'CadastroPaciente'>;

// Exporta o navegador da pilha
export default HomeNavigator;

// Exporta os tipos de dados para ficar visível para outros arquivos
export type { PrincipalProps, CampoDeTextoProps, ListaProps, NotaAprovacaoProps, CadPacienteProps };
