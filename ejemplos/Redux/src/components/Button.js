import React from 'react';
import { Text, TouchableOpacity, StyleSheet  } from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle} >
      <Text style={styles.textStyle} >Add2</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    //alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    //alignSelf: 'strech',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
};

export default Button;
