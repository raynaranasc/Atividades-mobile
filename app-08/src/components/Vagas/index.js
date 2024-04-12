import{View, Text} from 'react-native'
import {styles} from './styles'

function Vagas(props){
  return(
    <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.titulo}>{props.titulo}</Text>

          <View style={styles.texto}>
          <Text style={styles.salario}>Salário: </Text>
          <Text style={styles.text}> {props.salario}</Text>
           </View>

          <View style={styles.texto}>
          <Text style={styles.descricao}>{props.descricao}</Text>
          </View>

          <View style={styles.texto}>
          <Text style={styles.contato}>Contato:</Text>
          <Text style={styles.text}> {props.contato}</Text>
          </View>
        </View>
    </View>
  )
}

export default Vagas