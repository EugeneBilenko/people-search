import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { getFullname } from '../utils';
import CachedImage from './CachedImage';

const s = StyleSheet.create({
  root: {
    padding: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
		flexDirection: 'row',
		alignItems: 'center'
  },
	image: {
  	width: 30,
  	height: 30,
		marginRight: 15
	}
});

const PeopleListRow = (props) => {
  return (
    <TouchableOpacity onPress={() => props.setSelectedPerson(props.item)}>
      <View style={s.root}>
				<CachedImage style={s.image} uri={props.item.picture.medium} />
        <Text children={getFullname(props.item)} />
      </View>
    </TouchableOpacity>
  );
};

PeopleListRow.propTypes = {
	setSelectedPerson: PropTypes.func,
	item: PropTypes.object,
}

export default PeopleListRow;
