import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the menu bar with options', () => {
  render(<App />);
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