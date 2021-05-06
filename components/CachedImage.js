import React from 'react';

import { Image } from "react-native-expo-image-cache";
import PropTypes from 'prop-types';

const CachedImage = (props) => {
	return (
		<Image {...props} source={{ uri: props.uri }} />
	);
};

CachedImage.propTypes = {
	uri: PropTypes.string,
};

export default CachedImage;
