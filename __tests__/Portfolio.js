import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import React from 'react';
import Portfolio from '../views/Portfolio';

it('renders correctly', () => {
	const navigation = { navigate: jest.fn() };
  	const tree = renderer.create(
    	<Portfolio navigation={navigation} />
  	);
});
