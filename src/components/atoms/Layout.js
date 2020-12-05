import React from 'react';
import {View, StyleSheet} from 'react-native'

const Layout = ({ children, style })=>{
    return (
        <View style={StyleSheet.flatten([styles.layout, style])}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    layout:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#fff',
        paddingHorizontal:24
    }
})
export default Layout;
