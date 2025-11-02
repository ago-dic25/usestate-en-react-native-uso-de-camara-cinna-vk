import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import { estilos } from './misEstilos';
import { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');
  const [listaNombres, setListaNombres] = useState([]);
  const longitud = nombre.length;
  const emoji =
    longitud === 0 ? '😞' :
    longitud < 5 ? '🙂' :
    longitud < 10 ? '😃' :
    '😆';

  const guardarnombre = () => {
    if (nombre.trim()) {
      setListaNombres([...listaNombres, nombre]);
      setNombre('');
    }
  };
  const borrarNombre = (index) => {
    setListaNombres(listaNombres.filter((_, i) => i !== index));
  }
  const limpiarLista = () => {
    setListaNombres([]);
  }

  return (
    <View style={estilos.container}>
      <Text>Clicks: {contador}</Text>
      <Button title="Click" onPress={() => setContador(c => c + 1)} />
      <StatusBar style="auto" />

      <TextInput style={estilos.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Text>Tu nombre tiene: {longitud} caracteres {emoji}</Text>
      <Button title="Guardar nombre" onPress={guardarnombre}/>

      <View style={estilos.listaContainer}>
        <Text>Nombres guardados:</Text>
        <FlatList
          data={listaNombres}
          renderItem={({item, index}) => (
            <View style={estilos.listaItem}>
              <Text>{index + 1}. {item}</Text>
              <Button title="Borrar" onPress={() => borrarNombre(index)} />
            </View>
          )}
          
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      <Button title="Limpiar lista" onPress={() => limpiarLista()} />
    </View>
  );
}
