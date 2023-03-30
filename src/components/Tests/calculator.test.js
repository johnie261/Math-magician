import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../calculator';

describe('calculator component', () => {
  test('renders calculator buttons', () => {
    render(<Calculator />);

    const zeros = screen.getAllByText('0');
    expect(zeros[1]).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText('AC')).toBeInTheDocument();
    expect(screen.getByText('+/-')).toBeInTheDocument();
    expect(screen.getByText('%')).toBeInTheDocument();
    expect(screen.getByText('÷')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('.')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
  });
  test('it updates the display when the button is clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(document.querySelector('.calc-output').textContent).toBe('8');
  });
});
