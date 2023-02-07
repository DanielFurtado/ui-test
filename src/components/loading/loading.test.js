import renderer from 'react-test-renderer';
import Loading from './loading.component';

it('renders', () => {
  const component = renderer.create(<Loading />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
