import {useState} from 'react'
import {View, Text, Image, TextInput, Button} from 'react-native'
import {styles} from './styles'
import Campo from '../../components/Campos'

function Combustivel(){
  const [resultado, setResultado] = useState()
  const [gasolina, setGasolina] = useState()
  const [alcool, setAlcool] = useState()

  function calcularCombustivel(){
    r = alcool / gasolina

    if (r < 0.7)
      setResultado('Abasteça com Álcool')
    else
      setResultado('Abasteça com Gasolina')
  }

  return(
    <View>
      <Text style={styles.titulo}>Álcool ou Gasolina</Text>

      <View style={styles.imagem}>
        <Image
          source={{uri: 'https://play-lh.googleusercontent.com/N14whk_Ez-j6rSbkFUF8THC11vzTH2HdSWqQO8CiT8p3RrAfodUASk43lKrSGqujRbI'}}
          style={{width: 200, height:200}}
        />
      </View>

      <Campo label='Valor do Álcool' funcao={setAlcool} tipo='numeric'/>

      <Campo label='Valor da Gasolina' funcao={setGasolina} tipo='numeric'/>

      <View style={styles.botao}>
        <Button title='Calcular' color='blue' onPress={calcularCombustivel} />
      </View>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  )
}

export default Combustivel