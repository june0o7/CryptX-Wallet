import { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import ID from "./ID";
import Wallet from "./Wallet";
import Set from "./Set";
import Ab from "./Ab";
import PayToContact from "./PayToContact";
import { Image, TouchableOpacity } from "react-native";

function Main() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home" 
    screenOptions={{

        drawerStyle:{
            backgroundColor:'#FFDE21',
            
        },

       

        

        headerStyle:{
            backgroundColor:'#2c2e2e',
            shadowColor:'#2c2e2e'
        
        },
        headerTintColor: 'white',
           
      
        
        headerRight: ()=>{

            return(

                <TouchableOpacity>
                     <Image
            source={require("./assets/icons/profile.png")}
            style={{height:40, width:40, marginRight:10}}
          />
                </TouchableOpacity>
            )


        }
    }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => {
            return (
              <Image
                source={require("./assets/icons/home.png")}
                style={{ height: 20, width: 20 }}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={Wallet}
        options={{
          drawerIcon: ({ size }) => {
            return (
              <Image
                source={require("./assets/icons/wallet.png")}
                style={{ height: 20, width: 20 }}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ID}
        options={{
          drawerIcon: ({ size }) => {
            return (
              <Image
                source={require("./assets/icons/user.png")}
                style={{ height: 20, width: 20 }}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Set}
        options={{
          drawerIcon: ({ size }) => {
            return (
              <Image
                source={require("./assets/icons/settings.png")}
                style={{ height: 20, width: 20 }}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="About"
        component={Ab}
        options={{
          drawerIcon: ({ size }) => {
            return (
              <Image
                source={require("./assets/icons/about.png")}
                style={{ height: 20, width: 20 }}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Pay To Contact"
        component={PayToContact}
        options={{
          drawerIcon: ({ size }) => {
            return (
              <Image
                source={require("./assets/icons/paytocontact.png")}
                style={{ height: 20, width: 20 }}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default Main;
