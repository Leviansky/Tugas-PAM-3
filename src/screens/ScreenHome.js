import React, {Component} from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { ImageBackground } from 'react-native-web';
import BackImage from './background/background-pesawat.jpg';

class ScreenHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'ScreenHome',
      keberangkatan: '',
      tujuan: '',
      tanggal: '',
    };
  }
    render() {
        return (
            <ImageBackground source={BackImage} style={{flex: 1}}>
                <StatusBar barStyle="light-content"></StatusBar>

                <View style={{backgroundColor: 'black', paddingVertical: 10, textAlign: 'center', flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={{fontSize: 28, fontWeight: 'bold', alignItems: 'center', textAlign: 'center'}}>
                        <Text style={{color: 'crimson'}}>App</Text>
                        <Text style={{color: 'gray'}}>Tix</Text>
                    </Text>
                </View>

                <Text style={styles.formatteks}>Lokasi keberangkatan</Text> 
                <TextInput value={this.state.keberangkatan} style={styles.teksbox} onChangeText={(value) => this.setState({keberangkatan: value})} />
                <Text style={styles.formatteks}>Lokasi Tujuan</Text>
                <TextInput value={this.state.tujuan} style={styles.teksbox} onChangeText={(value) => this.setState({tujuan: value})} /> 
                <Text style={styles.formatteks}>Tanggal keberangkatan</Text> 
                <TextInput value={this.state.tanggal} style={styles.teksbox} onChangeText={(value) => this.setState({tanggal: value})} />
            
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ScreenPencarian')} style={{marginTop: 20, height: 35, backgroundColor: '#212121', marginHorizontal: 40, borderRadius: 25}}>
                    <Text style={{justifyContent: 'center', textAlign: 'center', color: 'white', fontSize: 20}}>Submit</Text>
                </TouchableOpacity>

                <Text style={{fontSize: 10, fontWeight: 'bold', alignItems: 'center', textAlign: 'center', color: 'white', marginTop: 350}}>Copyright by Fahlevi Ikhsanur Rizal 119140128</Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    teksbox: {
        backgroundColor: 'white', borderRadius: 3, borderWidth: 1, marginHorizontal: 40, height: 30, marginTop: 5
    },
    formatteks: {
    color: '#b0bec5', fontSize: 20, fontWeight: 'bold', marginLeft: 40, marginTop: 35, fontFamily: "Cochin"
    }
})

export default ScreenHome;