import React, { Component } from 'react'
import {View, Text, StatusBar, Flatlist} from 'react-native'
import { ImageBackground } from 'react-native-web';
import BackImagePencarian from './background/background-pesawat.jpg';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const stack = createStackNavigator();

class ScreenPencarian extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Penerbangan: [{ keberangkatan: 'Lampung', Tujuan: 'Jakarta', maskapai:'Kuda Terbang Air', Jadwal: '2022-08-11', key: '1' },
            { keberangkatan: 'Lampung', Tujuan: 'Palembang', maskapai:'Naga Indosiar Air', Jadwal: '2022-08-12', key: '2' },
            { keberangkatan: 'Lampung', Tujuan: 'Jakarta', maskapai:'Buraq Air', Jadwal: '2022-08-12', key: '3' },
            { keberangkatan: 'Palembang', Tujuan: 'Jakarta', maskapai:'Kuda Terbang Air', Jadwal: '2022-08-13', key: '4' },
            { keberangkatan: 'Lampung', Tujuan: 'Jakarta', maskapai:'Cheetah Air', Jadwal: '2022-08-11', key: '5' },
            { keberangkatan: 'Jakarta', Tujuan: 'Palembang', maskapai:'Cheetah Air', Jadwal: '2022-08-13', key: '6' },
            { keberangkatan: 'Palembang', Tujuan: 'Lampung', maskapai:'Gendong Air', Jadwal: '2022-08-11', key: '7' },
            { keberangkatan: 'Jakarta', Tujuan: 'Lampung', maskapai:'Naga Indosiar Air', Jadwal: '2022-08-12', key: '8' },
            { keberangkatan: 'Jakarta', Tujuan: 'Palembang', maskapai:'Jetpack Air', Jadwal: '2022-08-13', key: '9' },
            { keberangkatan: 'Lampung', Tujuan: 'Jakarta', maskapai:'Ikan TPI Air', Jadwal: '2022-08-11', key: '10' },
            { keberangkatan: 'Palembang', Tujuan: 'Lampung', maskapai:'Buraq Air', Jadwal: '2022-08-12', key: '11' },
            { keberangkatan: 'Palembang', Tujuan: 'Jakarta', maskapai:'Garuda Didadaku Air', Jadwal: '2022-08-11', key: '12' },
            { keberangkatan: 'Lampung', Tujuan: 'Jakarta', maskapai:'Gojek Air', Jadwal: '2022-08-13', key: '13' },
            { keberangkatan: 'Jakarta', Tujuan: 'Palembang', maskapai:'Maxim Air', Jadwal: '2022-08-12', key: '14' },
            { keberangkatan: 'Palembang', Tujuan: 'Jakarta', maskapai:'Ikan TPI Air', Jadwal: '2022-08-11', key: '15' },
            { keberangkatan: 'Jakarta', Tujuan: 'Lampung', maskapai:'Maxim Air', Jadwal: '2022-08-12', key: '16' },
            { keberangkatan: 'Lampung', Tujuan: 'Jakarta', maskapai:'Kuda Terbang Air', Jadwal: '2022-08-13', key: '17' },
            { keberangkatan: 'Jakarta', Tujuan: 'Palembang', maskapai:'Buraq Air', Jadwal: '2022-08-13', key: '18' },
            { keberangkatan: 'Palembang', Tujuan: 'Lampung', maskapai:'Kuda Terbang Air', Jadwal: '2022-08-12', key: '19' },
            { keberangkatan: 'Jakarta', Tujuan: 'Lampung', maskapai:'Cheetah Air', Jadwal: '2022-08-11', key: '20' },] 
            ,
            Coba: [1,2,3,4,5,6]
        };
    }
    render() {
        return (
            <View>
                <ImageBackground source={BackImagePencarian} style={{flex: 1}}>
                    <StatusBar barStyle="light-content"></StatusBar>

                    <View style={{backgroundColor: 'black', flexDirection: "row", justifyContent: 'space-between', paddingVertical: 10}}>
                        <Icon name ='arrow-back' size={35} onPress={() => this.props.navigation.pop()}/>
                        <Icon name ='account-circle'size={35}/>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <Text style={{fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginTop: 15}}>
                            <Text style={{color: 'crimson'}}>App</Text>
                            <Text style={{color: 'gray'}}>Tix</Text>
                        </Text>
                    </View>

                    <View style={{justifyContent: 'center', textAlign: 'center'}}>
                        <Text style={{alignItems:'center', height: 150, color: 'white', marginTop: 15}}>Hasil Pencarian Penerbangan</Text>
                        <Text style={{alignItems:'center', height: 150, color: 'white'}}>(Tanggal Keberangkatan)</Text>
                    </View>
        
                    <Flatlist
                    style={{flex: 1}}
                    data={this.state.Coba}
                    renderItem={({ item }) => (
                        <Text style={{alignItems:'center', height: 150, color: 'white', marginTop: 15}}>{item.Keberangkatan}</Text>
                    )}
                    renderItem={({ item }) => (
                        <Text style={{alignItems:'center', height: 150, color: 'white', marginTop: 15}}>{item.Tujuan}</Text>
                    )}
                    renderItem={({ item }) => (
                        <Text style={{alignItems:'center', height: 150, color: 'white', marginTop: 15}}>{item.maskapai}</Text>
                    )}
                    renderItem={({ item }) => ( 
                        <Text style={{alignItems:'center', height: 150, color: 'white', marginTop: 15}}>{item.Jadwal}</Text>
                    )}/>
                </ImageBackground>
            </View>
        );
    }
}

export default ScreenPencarian;