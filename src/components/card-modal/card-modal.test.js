
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react'
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
  it('renders', () => {
    const component = renderer.create(
      <CardModal show={true} image={data} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays the user name', () => {
    const {getByText} = render(
      <CardModal show={true} image={data} />
    );
    expect(getByText('Preview')).toBeInTheDocument();
  });

  it('should close the modal', () => {
    const closeModalSpy = jest.fn();
    const { getByTestId } = render(
      <CardModal show={true} image={data} onClose={closeModalSpy} />
    );
    fireEvent.click(getByTestId('card-modal-backdrop'));
    expect(closeModalSpy).toHaveBeenCalled();
  });

  it('should stop propagation if clicked', () => {
    const stopPropagationSpy = jest.fn();
    const { getByTestId } = render(
      <CardModal show={true} image={data} onClick={stopPropagationSpy} />
    );
    fireEvent.click(getByTestId('card-modal'));
    expect(stopPropagationSpy).toHaveBeenCalledTimes(0);
  });
});
