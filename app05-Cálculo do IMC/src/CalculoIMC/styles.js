import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    titulo: {
    fontSize:30,
    color:'indigo',
    fontFamily:'Times new roman',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    },
    img: {
        margin: 25,
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    entrada: {
        height: 45,
        width: 210,
        borderWidth: 1,
        borderColor: '#222',
        margin: 15,
        fontSize: 18,
        padding: 10,
        alignSelf: 'center' 
    },
    resultado: {
        fontFamily: 'impact',
        alignSelf: 'center',
        fontSize: 40,
        color: 'black',
        marginTop: 15,
    }
})
 
export {styles}