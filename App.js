import React, { useState} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import {Map, Modal, Panel, Input, List} from './components';

export default function App() {
  const [puntos, setPuntos] = useState([]);

  const [nombre, setNombre] = useState('');

  const [puntoTemp, setpuntoTemp] = useState({});

  const [visibility, setVisibility] = useState(false);

  const [visibilityFilter, setvisibilityFilter] = useState('new_punto');

  const [pointFilter, setpointFilter] = useState(true);

  const togglePointsFilter = () => setpointFilter(!pointFilter);

  const handleLongPress  = ({nativeEvent})=> {
    setpuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
    setvisibilityFilter('new_punto')
  }

  const handleChangeText = text => {
    setNombre(text);
  }

  const handleSubmit = () => {
    const newPuntos = {coordinate:puntoTemp, name:nombre}
    setPuntos(puntos.concat(newPuntos));
    setVisibility(false)
    setNombre('');
  }

  const handleList = () => {
    setvisibilityFilter('all_new');
    setVisibility(true);
  }

  return (
    <View style={styles.container}>
      <Map 
        onLongPress={handleLongPress} 
        puntos={puntos} 
        pointsFilter={pointFilter}
      />
        <Panel 
          onPressList={handleList} 
          textList='Lista' 
          togglePointsFilter={togglePointsFilter}/>
      <Modal 
        visibility={visibility}>
        {
        visibilityFilter === 'new_punto' 
        ?
          <View style={styles.form}>
            <Input title="Nombre" placeholder="Ingresa un nombre" onChangeText={handleChangeText} />
            <Button title="Aceptar" onPress={handleSubmit}/>
          </View>
        : 
          <List puntos={puntos} closeModal={() => setVisibility(false)}/>
        }
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  form:{
    padding:20
  }, 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
