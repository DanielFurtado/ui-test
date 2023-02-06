import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DownloadButton from './download-button.component';

it('renders', () => {
  const component = renderer.create(<DownloadButton />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should call window open with the correct url', () => {
  window.open = jest.fn();
  const url = 'https://www.some-link.com/';
  const { getByText } = render(<DownloadButton url={url} />);
  const downloadButton = getByText('Download');
  
  fireEvent.click(downloadButton);

  expect(window.open).toHaveBeenCalledTimes(1);
  expect(window.open).toHaveBeenCalledWith('https://www.some-link.com/', '_blank');
})
