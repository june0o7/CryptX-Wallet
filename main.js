import { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';

function Main() {


    const Drawer= createDrawerNavigator();


    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Settings" component={Home} />
            <Drawer.Screen name="Profile" component={Home} />
            <Drawer.Screen name="About" component={Home} />
        </Drawer.Navigator>
        
      
    
    );
}

export default Main;