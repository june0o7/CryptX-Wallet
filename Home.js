import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image,StatusBar, TextInput, Button, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import app from './firebaseConfig';
import { createUserWithEmailAndPassword ,getAuth } from 'firebase/auth';
import { initializeApp ,} from 'firebase/app';
import { collection, Firestore, addDoc, getFirestore , getDoc, doc, getDocs} from 'firebase/firestore';
import { LinearGradient } from 'expo-linear-gradient';


function Home(props) {


    return (
       <View style={styles.container}>
          <Text style={{color:'black', fontWeight:'bold', fontSize:30}}>
            Hello, Alex !
          </Text>
          <Text style={{color:'grey', fontSize:15, marginTop:10}}>
            Total Balance
          </Text>

          <Text style={{color:'black', fontSize:25, marginTop:3}}>
            $10,000.00
          </Text>
          <Text style={{fontWeight:'bold', padding:2, backgroundColor:'#e8e9eb', borderRadius:10, width:100, height:20, alignItems:'center', fontSize:10, color:'grey'}}>Market Growth: 4.7%</Text>

          <View style={{padding:10, marginTop:10, flexDirection:'row', justifyContent:'space-evenly'}}>
            <TouchableOpacity style={styles.button}>
            <Image 
                source={require('./assets/icons/uparrow.png')}
                style={styles.image}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Image 
                source={require('./assets/icons/downarrow.png')}
                style={styles.image}
                />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
            <Image 
                source={require('./assets/icons/mg.png')}
                style={styles.image}
                />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonDescription}>
            <Text>Send</Text>
            <Text>Receive</Text>
            <Text>Find</Text>
          </View>
        <Text style={{fontWeight:'bold', padding:5 , width:70, alignItems:'center', color:'#333436', fontSize:18}}>Events</Text>
        <ScrollView horizontal={true}
        styles={styles.popular}>


        <TouchableOpacity style={{margin:10}}>
                <Image 
                source={require('./assets/images/ticket.jpg')}
                style={{width:200, height:100}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10}}>
                <Image 
                source={require('./assets/images/ticket.jpg')}
                style={{width:200, height:100}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10}}>
                <Image 
                source={require('./assets/images/ticket.jpg')}
                style={{width:200, height:100}}
                />
            </TouchableOpacity>
           
          
       
        </ScrollView>
       </View>
)}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
      padding:10,
    },

    button:{
      backgroundColor:'#e3dfde',
      width:50,
      height:50,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center'
    },
    image:{
      width:25,
      height:25,

    },

    buttonDescription:{
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    popular:{
      flexDirection:'row',
      height:200
    }
  
  });
export default Home;