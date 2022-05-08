import React, { useEffect, useRef } from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native'
import Routing from './src/navigation/Routing';
// import Assets from './assets';

console.disableYellowBox = true;
StatusBar.setHidden(false);
// StatusBar.setBackgroundColor(Assets.colors.grayBg);


const App = () => {
    const navigatorRef = useRef(null);
    const popupRef = useRef(null);
    useEffect(() => {
    }
    )
    return (
        <View
            style={{ flex: 1, backgroundColor: '#242424',}}>
            <Routing ref={navigatorRef} />
        </View>
    )

}
export default App