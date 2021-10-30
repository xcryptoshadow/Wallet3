import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { borderColor, fontColor } from '../constants/styles';

import { Feather } from '@expo/vector-icons';
import React from 'react';

export type NumpadChar = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0' | '.' | 'del' | 'clear';

interface Props {
  onPress: (value: NumpadChar) => void;
  disableDot?: boolean;
}

export default (props: Props) => {
  return (
    <View style={viewStyles.numpadContainer}>
      <TouchableHighlight
        style={{ ...viewStyles.keyboard, borderTopLeftRadius: 9.75 }}
        underlayColor={borderColor}
        onPress={(_) => props.onPress('1')}
      >
        <Text style={viewStyles.num}>1</Text>
      </TouchableHighlight>

      <TouchableHighlight style={viewStyles.keyboard} underlayColor={borderColor} onPress={(_) => props.onPress('2')}>
        <Text style={viewStyles.num}>2</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={{ ...viewStyles.keyboard, borderRightWidth: 0, borderTopRightRadius: 9.75 }}
        underlayColor={borderColor}
        onPress={(_) => props.onPress('3')}
      >
        <Text style={viewStyles.num}>3</Text>
      </TouchableHighlight>

      <TouchableHighlight style={viewStyles.keyboard} underlayColor={borderColor} onPress={(_) => props.onPress('4')}>
        <Text style={viewStyles.num}>4</Text>
      </TouchableHighlight>

      <TouchableHighlight style={viewStyles.keyboard} underlayColor={borderColor} onPress={(_) => props.onPress('5')}>
        <Text style={viewStyles.num}>5</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={{ ...viewStyles.keyboard, borderRightWidth: 0 }}
        underlayColor={borderColor}
        onPress={(_) => props.onPress('6')}
      >
        <Text style={viewStyles.num}>6</Text>
      </TouchableHighlight>

      <TouchableHighlight style={viewStyles.keyboard} underlayColor={borderColor} onPress={(_) => props.onPress('7')}>
        <Text style={viewStyles.num}>7</Text>
      </TouchableHighlight>

      <TouchableHighlight style={viewStyles.keyboard} underlayColor={borderColor} onPress={(_) => props.onPress('8')}>
        <Text style={viewStyles.num}>8</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={{ ...viewStyles.keyboard, borderRightWidth: 0 }}
        underlayColor={borderColor}
        onPress={(_) => props.onPress('9')}
      >
        <Text style={viewStyles.num}>9</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={{ ...viewStyles.keyboard, borderBottomWidth: 0, borderBottomLeftRadius: 9.75 }}
        underlayColor={borderColor}
        onPress={(_) => props.onPress('.')}
        disabled={props.disableDot}
      >
        {props.disableDot ? <View /> : <Text style={viewStyles.num}>.</Text>}
      </TouchableHighlight>

      <TouchableHighlight
        style={{ ...viewStyles.keyboard, borderBottomWidth: 0 }}
        underlayColor={borderColor}
        onPress={(_) => props.onPress('0')}
      >
        <Text style={viewStyles.num}>0</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={{ ...viewStyles.keyboard, borderBottomWidth: 0, borderRightWidth: 0, borderBottomRightRadius: 10 }}
        underlayColor={borderColor}
        onPress={(_) => props.onPress('del')}
        onLongPress={(_) => props.onPress('clear')}
      >
        <Feather name="delete" size={20} color={fontColor} />
      </TouchableHighlight>
    </View>
  );
};

const viewStyles = StyleSheet.create({
  numpadContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    borderColor,
    borderWidth: 1,
    marginBottom: 12,
    overflow: 'hidden',
    flexWrap: 'wrap',
  },

  keyboard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33.3%',
    height: '25%',
    minHeight: 45,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor,
  },

  num: {
    fontSize: 20,
    color: fontColor,
    fontWeight: '600',
    textAlign: 'center',
  },
});
