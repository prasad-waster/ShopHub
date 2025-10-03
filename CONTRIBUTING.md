# Contributing to Shopping Cart ASE Challenge

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shopping-cart-ase
   ```

2. **Install dependencies**
   ```bash
   npm run setup
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   cp server/.env.example server/.env
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

## Code Standards

### JavaScript Style Guide
- Use ES6+ features
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful variable names
- Add JSDoc comments for functions

### React Guidelines
- Use functional components with hooks
- Keep components small and focused
- Use custom hooks for reusable logic
- Implement proper error boundaries
- Write accessible components

### Commit Messages
Follow conventional commits format:
```
feat: add new feature
fix: resolve bug issue
docs: update documentation
style: format code
refactor: restructure code
test: add tests
chore: update dependencies
```

## Testing

- Write unit tests for components
- Write integration tests for API endpoints
- Aim for >80% code coverage
- Test edge cases and error conditions

## Pull Request Process

1. Create a feature branch from main
2. Make your changes
3. Add/update tests
4. Ensure all tests pass
5. Update documentation if needed
6. Submit pull request

## Code Review Guidelines

- Check functionality works as expected
- Verify tests are comprehensive
- Review code for performance issues
- Ensure accessibility standards are met
- Confirm documentation is accurate
