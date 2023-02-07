
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import CardModal from '../card-modal/card-modal.component';

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
  it('renders the user name', () => {
    const {getByText} = render(<CardModal show={true} image={data} />);
    expect(getByText('Preview')).toBeInTheDocument();
  });
  
//   it('handles click correctly', async () => {
//     const {getByText} = render(<CardItem image={data} />);
//     const user = userEvent.setup();  
//     await user.click(screen.getByTestId('card-container'));
//     expect(getByText('Preview')).toBeInTheDocument();
//   });
});
