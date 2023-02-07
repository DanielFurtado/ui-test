import CardItem from './card-item.component';
import CardModal from '../card-modal/card-modal.component';
import userEvent from '@testing-library/user-event';
import {render, fireEvent, screen} from '@testing-library/react'
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

const data = {
  'id': 'abc123',
  'description': 'some description.',
  'alt_description': 'alternative description',
  'likes': 10,
  'user': {
    'name': 'Fred Mercury',
    'profile_image': 'https://www.some-link/images/profile-image-1'
  },
  'url': 'https://www.some-link/images/some-image-1'
};

describe(('Card Item'), () => {
  it('matches the snapshot', () => {
    const component = renderer.create(<CardItem image={data}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the user name', () => {
    const {getByText} = render(<CardItem image={data} />);
    expect(getByText('Fred Mercury')).toBeInTheDocument();
  });
  
  it('open the card item modal', async () => {
    const {getByText} = render(<CardItem image={data} />);
    const user = userEvent.setup();  
    await user.click(screen.getByTestId('card-container'));
    expect(getByText('Preview')).toBeInTheDocument();
  });
});
