import React, { useState, useMemo } from 'react';
import { getFullname } from '../utils';

function useLiveSearch(data) {
	const [searchStr, setSearchStr] = useState('');
	const filteredUsers = useMemo(() => {
		if (!searchStr) {
			return data;
		}
		const regex = new RegExp(searchStr, 'gi');
		return data
			.filter(item => {
				const fullName = getFullname(item);
				return regex.test(fullName) || regex.test(item.email) || regex.test(item.phone) || regex.test(item.cell);
			});
	}, [data, searchStr]);
	const results = useMemo(() => {
		const groupedUsers = filteredUsers.reduce((acc, val) => {
			const firstLetter = val.name.last[0];
			acc[firstLetter] = (acc[firstLetter] || []).concat(val);
			return acc;
		}, {});
		return Object.keys(groupedUsers)
			.map(((key) => ({
				title: key,
				data: groupedUsers[key],
			})));
	}, [filteredUsers]);
	return [searchStr, setSearchStr, results];
}

export default useLiveSearch;
