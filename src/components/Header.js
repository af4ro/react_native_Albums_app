import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#2574A9',
     justifyContent: 'center',
     alignItems: 'center',
     height: 60,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 10 },
     shadowOpacity: 0.2,
     elevation: 2,
     position: 'relative'
  },

  textStyle: {
    fontSize: 30,
    // font
    color: '#FFFFFF'
  }
};
 export default Header;
