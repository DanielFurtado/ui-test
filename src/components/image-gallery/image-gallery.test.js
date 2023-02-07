import ImageGallery from './image-gallery.component';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

const data = [
  {
  'id': 'abc123',
  'description': 'some description.',
  'alt_description': 'alternative description',
  'likes': 10,
  'user': {
    'name': 'Fred Mercury',
    'profile_image': 'https://www.some-link/images/profile-image-1'
  },
  'url': 'https://www.some-link/images/some-image-1'
  },
  {
    'id': 'def456',
    'description': 'some description 2.',
    'alt_description': 'alternative description 2',
    'likes': 20,
    'user': {
      'name': 'David Bowie',
      'profile_image': 'https://www.some-link/images/profile-image-2'
    },
    'url': 'https://www.some-link/images/url-image-2'
  },
];

describe('Image Gallery', ()=> {
  it('renders', () => {
    const component = renderer.create(<ImageGallery images={data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test('renders Image Gallery', () => {
    const {getByText} = render(<ImageGallery images={data} />);
    expect(getByText('Photo gallery')).toBeInTheDocument();
  });
});
