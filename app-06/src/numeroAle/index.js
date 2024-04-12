import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, Image, Pressable } from 'react-native';

import { styles } from './styles';

function Jogo() {
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const img = 'https://claudia.abril.com.br/wp-content/uploads/2020/01/numerologia-2016-1.jpg';

    function Gerar(){
    const calculo = Math.floor(Math.random() * 11)
    setResultado(calculo);
    }
    
  return (
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}> Número Aleatório</Text>
        <Image source={{ uri: img }} style={styles.img} />

        <Text style={styles.resultado}>{resultado}</Text>
        <Button title="Gerar" color="blue" fontFamily='cursive' onPress={Gerar} />

        

      </View>
    </SafeAreaView>
  );
}

export default Jogo;