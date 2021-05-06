import React, { useState } from 'react';
import PeopleModal from '../components/PeopleModal';


function usePeopleModal() {
	const [selectedPerson, setSelectedPerson] = useState(null);

	const hideModal = () => {
		setSelectedPerson(null);
	};

	const renderModal = () => {
		return <PeopleModal isVisible={!!selectedPerson} selectedPerson={selectedPerson} hideModal={hideModal} />;
	};

	return [renderModal, setSelectedPerson];
}

export default usePeopleModal;
