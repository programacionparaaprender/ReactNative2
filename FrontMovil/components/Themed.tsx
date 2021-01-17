import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import { TextInput  } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import { Dimensions, Platform} from 'react-native'
const { width, height } = Dimensions.get('window');
import { REDCOLOR } from '../config/const';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';


export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export type InputProps = ThemeProps & TextInput['props'];


const styles = StyleSheet.create({
  InputContainer: {
    width  : width,
    height :  45,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  InputStyle: {
    width : width - 30,
    height : (Platform.OS === 'ios') ? 40 : 52,
    marginTop: 15,
    marginBottom: 15,
    borderBottomColor : 'gray',
    borderBottomWidth : 2,
    fontSize : 24,
    color : 'black',
    marginLeft : 15
  }
});

export function Input(props: InputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  return (
      <View style={styles.InputContainer}>
				<TextInput
          style={styles.InputStyle} {...otherProps} 
					placeholder={props.placeholder}
					placeholderTextColor="rgba(255,255,255,0.3)"
					value={props.value}
					keyboardType={props.keyboardType}
					autoCapitalize='none'
					underlineColorAndroid='transparent'
					secureTextEntry={props.secureTextEntry}
					onChangeText={props.onChangeText}
					autoCorrect={false}
				/>
			</View>
  );
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
