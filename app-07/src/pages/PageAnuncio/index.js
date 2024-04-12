import { View, Text, ScrollView, Image } from 'react-native'
import {styles} from './styles'
import Anuncio from '../../components/Anuncio'

function PageAnuncio(){
  return(
    <View style={styles.container}>
      <text style={styles.titulo}> R&B </text>
      <ScrollView horizontal={true}>
        <View style={styles.box}>
          <Image source={{ uri: 'https://cdn.24.co.za/files/Cms/General/d/7971/1e42c427fdb74d22b4e4d5f028bc834c.jpg' }} style={styles.image} />
          <Text style={styles.subtitulo}>SOS </Text>
        </View>
        <View style={styles.box}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.AKOh02MjTrQGxzpqAXLpqQAAAA?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.subtitulo}>Still Over It</Text>
        </View>
        <View style={styles.box}>
          <Image source={{ uri: 'https://static.hiphopdx.com/2020/02/Jhene-Aiko-Chilombo-cover-1024x1024.jpg' }} style={styles.image} />
          <Text style={styles.subtitulo}>Chilombo</Text>
        </View>
        <View style={styles.box}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.FaT8Yk-nA7TX8CUpw25digHaHa?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.subtitulo}>Get You</Text>
        </View>
      </ScrollView>
      <text style={styles.titulo}> POP </text>
      <ScrollView horizontal={true}>
        <View style={styles.box}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.5YWjdE14T4MNAmWbOqaQNwHaHa?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.subtitulo}>Dangerous Woman</Text>
        </View>
        <View style={styles.box}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.YhWLnMkIorW9IXBG_zai5AHaHa?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.subtitulo}>Future Nostalgia</Text>
        </View>
        <View style={styles.box}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.aHv2rN7rony3PKr_UxfEUAHaHa?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.subtitulo}>Fine Line</Text>
        </View>
        <View style={styles.box}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.zE-GkYNT32w754FzrbK6GwHaHa?rs=1&pid=ImgDetMain' }} style={styles.image} />
          <Text style={styles.subtitulo}>Endless Summer </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default PageAnuncio