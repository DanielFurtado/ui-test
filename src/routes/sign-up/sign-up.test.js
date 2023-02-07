import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {fireEvent, render} from '@testing-library/react'

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

  it('salary range field loads with initial state of 0', () => {
    const { getByTestId } = render(<SignUp />);
    const salaryValue = getByTestId('salary-value-display');
    expect(salaryValue.textContent).toBe("Salary: £ 0");
  });

  it('input range field is changed to 99000 ', () => {
    const { getByTestId } = render(<SignUp />);
    const salaryValue = getByTestId('salary-value-display');
    const slider = getByTestId('salary-range-input');
    fireEvent.change(slider, { target: { value: 99000 } });
    expect(salaryValue.textContent).toBe("Salary: £ 99000");
  });
});

