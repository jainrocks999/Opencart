import { View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import RootApp from './src'

const App = () => {
  return (
    <View style={{flex:1, backgroundColor:'#18314F'}}>
      <Provider store={store}>
        <RootApp/>
      </Provider>
    </View>
  )
}

export default App