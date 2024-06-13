import { View, TextInput } from 'react-native'
import {styles} from './styles'

function Campos(props){
  return(
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.label}
        onChangeText={props.funcao}
        keyboardType={props.tipo}
      />
    </View>
  )
}

export default Campos