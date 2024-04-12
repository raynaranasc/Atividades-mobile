import React, { useState } from 'react';
import { Text, View, TextInput, Picker, TouchableOpacity } from 'react-native';
import { styles } from './styles'; // Novo caminho para importar os estilos

function PageConversor() {
  const [valor, setValor] = useState('');
  const [moedaDe, setMoedaDe] = useState('USD');
  const [moedaPara, setMoedaPara] = useState('BRL');
  const [resultado, setResultado] = useState('');

  const converterMoeda = async () => {
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${moedaDe}`);
      const data = await response.json();
      const taxaDeCambio = data.rates[moedaPara];
      const resultadoConvertido = (valor * taxaDeCambio).toFixed(2);
      setResultado(resultadoConvertido);
    } catch (error) {
      console.error('Erro ao converter moeda:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={valor}
          onChangeText={(text) => setValor(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>De:</Text>
        <Picker
          style={styles.picker}
          selectedValue={moedaDe}
          onValueChange={(itemValue) => setMoedaDe(itemValue)}
        >
          <Picker.Item label="Dólar (USD)" value="USD" />
          <Picker.Item label="Real (BRL)" value="BRL" />
          <Picker.Item label="Euro (EUR)" value="EUR" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Para:</Text>
        <Picker
          style={styles.picker}
          selectedValue={moedaPara}
          onValueChange={(itemValue) => setMoedaPara(itemValue)}
        >
          <Picker.Item label="Dólar (USD)" value="USD" />
          <Picker.Item label="Real (BRL)" value="BRL" />
          <Picker.Item label="Euro (EUR)" value="EUR" />
        </Picker>
      </View>
      <Text style={styles.result}>Resultado: {resultado}</Text>
      <TouchableOpacity style={styles.button} onPress={converterMoeda}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PageConversor