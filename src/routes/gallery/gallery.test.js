import ImageGallery from '../../components/image-gallery/image-gallery.component';
import renderer from 'react-test-renderer';

it('renders', () => {
  const component = renderer.create(<ImageGallery />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});