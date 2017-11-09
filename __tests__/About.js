import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import React from 'react';
import About from '../views/About';

it('renders correctly', () => {
	const navigation = { navigate: jest.fn() };
  	const tree = renderer.create(
    	<About navigation={navigation} />
  	);
});
