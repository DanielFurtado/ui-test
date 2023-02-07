import React, { useState as useStateMock } from 'react';
import CardItem from './card-item.component';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react'
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

const data = {
  'user': {
    'name': 'Daniel'
  }
};

describe(('Card Item'), () => {
  it('matches the snapshot', () => {
    const component = renderer.create(<CardItem image={data}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the user name', () => {
    const {getByText} = render(<CardItem image={data} />);
    expect(getByText('Daniel')).toBeInTheDocument();
  });
  
  it('handles click correctly', async () => {
    const {getByText} = render(<CardItem image={data} />);
    const user = userEvent.setup();  
    await user.click(screen.getByTestId('card-container'));
    expect(getByText('Preview')).toBeInTheDocument();
  });
});
