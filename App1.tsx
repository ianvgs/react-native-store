import * as React from 'react';
import {  SafeAreaView,  StyleSheet } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COR_DE_FUNDO } from './src/styles/styler';
import DetalhesProduto from './src/views/DetalhesProduto';
import ListaProdutos from './src/views/ListaProdutos';
import Provider from './src/provider';
import { Checkout } from './src/views/Checkout';

const Stack = createNativeStackNavigator();

const App: React.FC = () =>{
  return(
    <NavigationContainer>
      <Provider>
          <SafeAreaView style={styles.container}>


                  <Stack.Navigator initialRouteName="ListaProdutos"> 

                            <Stack.Screen
                            name="ListaProdutos"
                            component={ListaProdutos}
                            options={{headerShown:false}}
                            />

                            <Stack.Screen  
                            name="DetalhesProduto"
                            component={DetalhesProduto}
                            options={{headerShown:false}}
                            />

                            <Stack.Screen  
                            name="Checkout"
                            component={Checkout}
                            options={{headerShown:false}}
                            />

                  </Stack.Navigator>

                  
          </SafeAreaView>
      </Provider>
    </NavigationContainer>
  )
}
export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COR_DE_FUNDO    
  }
})