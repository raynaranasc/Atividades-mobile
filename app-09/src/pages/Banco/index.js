import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TextInput, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

const Banco = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limiteConta, setLimiteConta] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);
  const [confirmado, setConfirmado] = useState(false);

  const handleConfirmar = () => {
    setConfirmado(true);
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Sexo:', sexo);
    console.log('Escolaridade:', escolaridade);
    console.log('Limite na conta:', limiteConta);
    console.log('Brasileiro:', brasileiro);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Conta Bancária</Text>
      <ScrollView>
        <TextInput
          style={styles.entradaTexto}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.entradaTexto}
          placeholder="Idade"
          value={idade}
          onChangeText={(text) => setIdade(text)}
          keyboardType="numeric"
        />
        <Picker
          style={styles.entradaTexto}
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          <Picker.Item label="Selecione" value="Selecione" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
        <Picker
          style={styles.entradaTexto}
          selectedValue={escolaridade}
          onValueChange={(itemValue) => setEscolaridade(itemValue)}
        >
          <Picker.Item label="Selecione" value="Selecione" />
          <Picker.Item label="Ensino Médio" value="Ensino Médio" />
          <Picker.Item label="Graduação" value="Graduação" />
          <Picker.Item label="Pós-graduação" value="Pós-graduação" />
        </Picker>
        <Slider
          style={styles.controleDeslizante}
          minimumValue={0}
          maximumValue={1000}
          value={limiteConta}
          onValueChange={(value) => setLimiteConta(value)}
        />
        <Text>Limite na conta: R${limiteConta.toFixed(2)}</Text>
        <View style={styles.containerSwitch}>
          <Text>Brasileiro:</Text>
          <Switch
            value={brasileiro}
            onValueChange={(value) => setBrasileiro(value)}
          />
        </View>
        <Button
          title="Confirmar"
          onPress={handleConfirmar}
        />
        {confirmado && (
          <View>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>Sexo: {sexo}</Text>
            <Text>Escolaridade: {escolaridade}</Text>
            <Text>Limite na conta: R${limiteConta.toFixed(2)}</Text>
            <Text>Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Banco;
