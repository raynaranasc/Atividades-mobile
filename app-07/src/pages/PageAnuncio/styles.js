import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  titulo:{
    fontSize: 28,
    margin: 10,
    color: 'blue',
    textAlign: 'left',
    marginTop: 40,
    fontWeight: 'bold'
  },
  subtitulo:{
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  
  },

    container:{
    flex: 1,
  },
  box:{
    backgroundColor: '#fff',
    height: 250,
    width: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },

  image:{
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'cover',
  }
})

export {styles}