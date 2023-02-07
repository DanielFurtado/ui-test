import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import Navigation from './navigation.component';

describe(('Navigation'), () => {
  it('renders', () => {
    const component = renderer.create(
      <Router>
        <Navigation />
      </Router>
      );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

