import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import SignUp from './sign-up.component';

describe(('Sign up component'), () => {
  it('renders', () => {
    const component = renderer.create(
      <Router>
        <SignUp />
      </Router>
      );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

