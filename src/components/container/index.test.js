/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import SelectionContainer from './index';

const data = [{ code: 'USD' }, { code: 'EUR' }];

describe('SelectionContainer', () => {
  let container;

  beforeEach(() => {
    const { container: renderedContainer } = render(
      <SelectionContainer data={data} />,
    );
    container = renderedContainer;
  });

  it('Renders without crashing.', () => {
    expect(container).toBeInTheDocument();
  });

  it('Displays the correct number of items.', () => {
    const itemList = screen.getByLabelText('item-list');
    const items = within(itemList).getAllByRole('button');
    expect(items).toHaveLength(data.length);
  });

  it('Filters items based on search input.', () => {
    const searchInput = screen.getByLabelText('search-input');
    fireEvent.change(searchInput, { target: { value: 'us' } });
    expect(screen.queryByText('USD')).toBeInTheDocument();
    expect(screen.queryByText('EUR')).not.toBeInTheDocument();
  });

  it('Toggles items correctly.', () => {
    const usdButton = screen.getByText('USD');
  
    fireEvent.click(usdButton);
    expect(usdButton).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(usdButton);
    expect(usdButton).toHaveAttribute('aria-pressed', 'false');
  });

  it('Removes individual items correctly.', () => {
    const usdButton = screen.getByText('USD');
    fireEvent.click(usdButton);

    const selectedItemList = screen.getByLabelText('selected-items-list');
    const selectedItem = within(selectedItemList).getByText('USD');
     const removeItemIcon = within(selectedItem).getByLabelText('remove-item');
    fireEvent.click(removeItemIcon);

    expect(within(selectedItemList).queryByText('USD')).not.toBeInTheDocument();
  });
  describe('Select all button functions', () => {
  it('All items are selected correctly.', () => {
    const selectAllButton = screen.getByLabelText('select-all');
    fireEvent.click(selectAllButton);
    
    const selectedItemList = screen.getByLabelText('selected-items-list');
    const items = within(selectedItemList).getAllByRole('generic');
    expect(items).toHaveLength(data.length);
  });

  it('The button becomes disabled correctly.', () => {
    const selectAllButton = screen.getByLabelText('select-all');
    fireEvent.click(selectAllButton);

    expect(selectAllButton).toBeDisabled();
  
  });
});

  it('Clears all items correctly.', () => {
    const usdButton = screen.getByText('USD');
    fireEvent.click(usdButton);
    const eurButton = screen.getByText('EUR');
    fireEvent.click(eurButton);

    const clearButton = screen.getByLabelText('clear-all');
    fireEvent.click(clearButton);

    const selectedItemList = screen.queryByLabelText('selected-items-list');
    expect(selectedItemList).not.toBeInTheDocument();
  });
});
