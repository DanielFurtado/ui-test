import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';

it('renders', () => {
  const component = renderer.create(
    <Router>
      <App />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
