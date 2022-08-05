import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the menu bar with options', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  const linkElementTwo = screen.getByText(/About/i);
  const linkElementThree = screen.getByText(/Awards/i);
  const linkElementFour = screen.getByText(/Projects/i);
  const linkElementFive = screen.getByText(/Contacts/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElementTwo).toBeInTheDocument();
  expect(linkElementThree).toBeInTheDocument();
  expect(linkElementFour).toBeInTheDocument();
  expect(linkElementFive).toBeInTheDocument();
});

it('My image shall appear', async()=>{
  await render(<App/>);
  const img = screen.getByAltText('Max');
  expect(img).toBeInTheDocument();
})

test('A button is initially on the page', ()=>{
  render(<App/>);
  const theButton = screen.getByRole("button");
  expect(theButton).toBeInTheDocument();
})