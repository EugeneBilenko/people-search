import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const s = StyleSheet.create({
	root: {
		paddingHorizontal: 10,
		marginTop: 20,
	},
	title: {
		fontWeight: 'bold',
	},
});

const SectionHeader = (props) => {
	return (
		<View style={s.root}>
			<Text style={s.title}>{props.title}</Text>
		</View>
	);
};

export default SectionHeader;
