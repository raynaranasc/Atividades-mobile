import { View, Text, Image } from 'react-native';
import {styles} from './styles'
import myImage from '../../perfil.png';

function Componente01(){
  return(
    <View >
      <Image style={styles.image}
        source={myImage}
      />
    </View>
  )
}


export default Componente01;