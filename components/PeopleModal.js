import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { getFullname } from '../utils';
import CachedImage from './CachedImage';

const s = StyleSheet.create({
	root: {
		backgroundColor: '#fff',
		padding: 20,
		// flex: 1,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	pictureWrapper: {
		alignItems: 'center',
		marginBottom: 20
	},
	picture: {
		width: 100,
		height: 100,
		borderRadius: 100
	},
});

const PeopleModal = (props) => {
	return (
		<View>
			<Modal isVisible={props.isVisible} onBackdropPress={props.hideModal}>
				<View style={s.root}>
					{props.selectedPerson && (
						<View>
							<Picture image={props.selectedPerson.picture.medium} />
							<Row label={'Full Name:'} value={getFullname(props.selectedPerson)} />
							<Row label={'Email:'} value={props.selectedPerson.email} />
							<Row label={'Phone:'} value={props.selectedPerson.phone} />
							<Row label={'Cell:'} value={props.selectedPerson.cell} />
						</View>
					)}
				</View>
			</Modal>
		</View>
	);
};

PeopleModal.propTypes = {
	isVisible: PropTypes.bool,
	selectedPerson: PropTypes.object,
	hideModal: PropTypes.func,
};


const Row = (props) => {
	return (
		<View style={s.row}>
			<Text>{props.label}</Text>
			{props.value ? <Text>{props.value}</Text> : props.children}
		</View>
	);
};
Row.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	children: PropTypes.any,
};

const Picture = (props) => {
	return (
		<View style={s.pictureWrapper}>
			<CachedImage style={s.picture} uri={props.image} />
		</View>
	);
};

Picture.propTypes = {
	image: PropTypes.string,
};


export default PeopleModal;
