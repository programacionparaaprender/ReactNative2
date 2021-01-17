import * as React from 'react';


import { View, TouchableHighlight , Text } from 'react-native';

import { Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window');
import { StyleSheet, FlatList, RefreshControl } from 'react-native';

import { Button, NativeTouchEvent, NativeSyntheticEvent, ButtonProps } from "react-native";

import {
	REDCOLOR
} from '../config/const';


const styles = StyleSheet.create({
button: {
	width : width - 30,
	height : 42,
	marginTop : 15,
	marginBottom : 15,
	marginLeft : 15,
	flexDirection : 'row',
	alignItems : 'center',
	justifyContent : 'center',
	borderRadius : 3	
},button_text: {
	color : 'white',
	fontSize: 16
}
});

type ThemeProps = {
    text?: string;
  };

export type ButtonProps2 = ThemeProps & ButtonProps //Button['props'];

class Boton extends React.PureComponent<Readonly<ButtonProps2>>{
    constructor(props:any){
        super(props);
        this.onPress = this.onPress.bind(this);
        this._getBackground = this._getBackground.bind(this);
    }
	onPress(ev: NativeSyntheticEvent<NativeTouchEvent>){
		if(this.props.onPress)
			this.props.onPress(ev);
	}

	_getBackground(){
		if(this.props.color)
			return { backgroundColor : this.props.color };
		if(this.props.disabled)
			return { backgroundColor : 'rgba(255,255,255,0.5)' }
		return { backgroundColor : REDCOLOR };
	}

	public render(){
		return (
			<TouchableHighlight
				activeOpacity={1}
				underlayColor="rgba(255,255,255,.6)"
				onPress={this.onPress.bind(this)}
				style={[styles.button,this._getBackground()]}>
				<Text style={styles.button_text}>{this.props.text}</Text>
			</TouchableHighlight>
		);
	}
}

export default Boton;