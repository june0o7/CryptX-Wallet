import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  ImageBase,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/compat/app";
import app from "./firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  collection,
  Firestore,
  addDoc,
  getFirestore,
  getDoc,
  doc,
  getDocs,
} from "firebase/firestore";

function PayToContact(){


    return(
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>
        <TouchableOpacity style={styles.contacts}>
        <Image
           source={require("./assets/icons/boy.png")}
        style={{height:50, width:50}}
        />

            <View style={styles.contactInnerBox}>
                <Text>
                    Alex Hembrom
                </Text>
                <Text>
                    Touch to open this contact
                </Text>
            </View>
        
        </TouchableOpacity>

        </ScrollView>
        </View>
    );

}

const styles= StyleSheet.create({

container:{
flex:1,
backgroundColor:'white'

},


contacts:{
width:'95%',
padding:10,
flexDirection: "row"
}
,

contactInnerBox:{
marginLeft: 10,
justifyContent:"center"

}


})

export default PayToContact;