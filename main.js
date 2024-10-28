import { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import ID from './ID';
import Wallet from './Wallet';
import Set from './Set';
import Ab from './Ab';
import PayToContact from './PayToContact';

function Main() {


    const Drawer= createDrawerNavigator();


    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Wallet" component={Wallet} />
            <Drawer.Screen name="Profile" component={ID} />
            <Drawer.Screen name="Setting" component={Set} />
            <Drawer.Screen name="About" component={Ab} />
            <Drawer.Screen name="Pay To Contact" component={PayToContact} />
        </Drawer.Navigator>
        
      
    
    );
}

export default Main;