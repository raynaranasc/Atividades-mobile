import { View, Text } from 'react-native';
import {styles} from './styles'


function Componente02(){
  return(
    <View>
      <Text style={styles.textoPrincipal}>Dados pessoais:</Text>
      <Text>xxxxxxx</Text>

      <Text style={styles.textoPrincipal}>Formação:</Text>
      <Text>xxxxxxxx</Text>

      <Text style={styles.textoPrincipal}>Experiência:</Text>
      <Text>xxxxxx</Text>
      
      <Text style={styles.textoPrincipal}>Projetos:</Text>
      <Text>xxxxxxx</Text>
    </View>
  )
}


export default Componente02;