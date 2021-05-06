import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, SectionList, SafeAreaView } from 'react-native';
import PeopleListRow from './components/PeopleListRow';
import useLiveSearch from './hooks/useLiveSearch';
import fakeApi from './data/fakeApi';
import PeopleModal from './components/PeopleModal';
import usePeopleModal from './hooks/usePeopleModal';
import SectionHeader from './components/SectionHeader';

const s = StyleSheet.create({
	root: {
		flex: 1,
	},
	container: {
		flex: 1,
	},
	pageTitle: {
		width: '100%',
		textAlign: 'center',
		fontWeight: '900',
		padding: 10,
	},
	input: {
		margin: 10,
		padding: 10,
		borderWidth: 1,
		borderColor: '#000',
	},
});

export default function App() {
	const [people, setPeople] = useState([]);
	const [searchStr, setSearchStr, results] = useLiveSearch(people);
	const [renderModal, setSelectedPerson] = usePeopleModal();
	useEffect(() => {
		const fetchUsers = async () => {
			const results = await fakeApi();
			// const { results } = await fetch('https://randomuser.me/api/?results=100').then((res) => res.json());
			setPeople(results);
		};
		fetchUsers();
	}, [setPeople]);
	const handleChange = (text) => {
		setSearchStr(text);
	};


	return (
		<SafeAreaView style={s.root}>
			<View style={s.container}>
				<Text children="PEOPLE DIRECTORY" style={s.pageTitle} />
				<TextInput style={s.input} value={searchStr} onChangeText={handleChange} />
				<SectionList
					sections={results}
					renderItem={({ item }) => <PeopleListRow item={item} setSelectedPerson={setSelectedPerson} />}
					renderSectionHeader={({ section }) => {
						return <SectionHeader title={section.title} />;
					}}
					keyExtractor={(item, index) => item.login.uuid}
				/>
				{renderModal()}
			</View>
		</SafeAreaView>
	);
}
