import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import React from 'react';
import Stock from '../views/Stock';

it('renders correctly', () => {
	const navigation = { navigate: jest.fn() };
  	const tree = renderer.create(
    	<Stock navigation={navigation} />
  	);
});
