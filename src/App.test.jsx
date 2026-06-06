import { describe, it } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App.jsx';

describe('Creative Agency Portfolio', () => {
  it('renders the landing page title and project list', () => {
    render(<App />);

    expect(screen.getByText(/Creative Agency Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/Agency Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Brand Refresh Campaign/i)).toBeInTheDocument();
  });

  it('filters projects based on search input', async () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/Search by title, description, or tag/i);
    fireEvent.change(searchInput, { target: { value: 'social' } });

    expect(screen.getByText(/Social Launch Package/i)).toBeInTheDocument();
    expect(screen.queryByText(/Brand Refresh Campaign/i)).not.toBeInTheDocument();
  });

  it('adds a new project to the portfolio', async () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText(/Project title/i), {
      target: { value: 'New Agency Launch' }
    });
    fireEvent.change(screen.getByLabelText(/Project description/i), {
      target: { value: 'A new launch campaign concept and content strategy.' }
    });
    fireEvent.change(screen.getByLabelText(/Tags/i), {
      target: { value: 'Launch, Strategy' }
    });

    fireEvent.click(screen.getByRole('button', { name: /Add Project/i }));

    const projectHeading = screen.getByRole('heading', { level: 3, name: 'New Agency Launch' });
    expect(projectHeading).toBeInTheDocument();

    const newProjectCard = projectHeading.closest('article');
    expect(newProjectCard).toBeTruthy();
    expect(within(newProjectCard).getByText('Strategy')).toBeInTheDocument();
  });
});
