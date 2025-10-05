# NestJS Authentication Mobile App Plan

## Project Overview

React Native Expo app with NestJS backend integration for user authentication.

## Backend Analysis

Based on your NestJS backend, we have these endpoints:

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile (protected)
- `GET /auth/google` - Google OAuth (web redirect)
- `GET /auth/google/callback` - Google OAuth callback

## Required Screens

### 1. Authentication Screens

- **Login Screen** (`/login`)

  - Email input
  - Password input
  - Login button
  - "Don't have account? Sign Up" link
  - Error handling

- **Register Screen** (`/register`)
  - First Name input
  - Last Name input
  - Email input
  - Password input
  - Confirm Password input
  - Register button
  - "Already have account? Sign In" link
  - Form validation

### 2. Main App Screens

- **Profile Screen** (`/profile`)

  - User avatar (initials)
  - Full name display
  - Email display
  - Google account badge (if applicable)
  - Logout button

- **Home Screen** (`/`) - Optional
  - Welcome message
  - Quick actions
  - Navigation to profile

## Project Structure

```
frontend/
├── app/
│   ├── _layout.tsx (Root layout with auth state)
│   ├── index.tsx (Home screen)
│   ├── (auth)/
│   │   ├── login.tsx
│   │   └── register.tsx
│   └── (tabs)/
│       ├── _layout.tsx (Tab navigation)
│       └── profile.tsx
├── components/
│   ├── AuthForm.tsx
│   ├── LoadingSpinner.tsx
│   └── ErrorMessage.tsx
├── contexts/
│   └── AuthContext.tsx
├── services/
│   └── api.ts
├── types/
│   └── auth.ts
└── utils/
    └── validation.ts
```

## Implementation Steps

### Phase 1: Setup & Dependencies ✅

- [x] Expo Router project created
- [x] Required packages installed
- [x] TypeScript configured

### Phase 2: Core Services

- [ ] Create API service (`services/api.ts`)
- [ ] Create authentication context (`contexts/AuthContext.tsx`)
- [ ] Create TypeScript types (`types/auth.ts`)

### Phase 3: Authentication Screens

- [ ] Create login screen (`app/(auth)/login.tsx`)
- [ ] Create register screen (`app/(auth)/register.tsx`)
- [ ] Implement form validation
- [ ] Add error handling

### Phase 4: Main App Screens

- [ ] Create profile screen (`app/(tabs)/profile.tsx`)
- [ ] Create home screen (`app/index.tsx`)
- [ ] Implement tab navigation

### Phase 5: Navigation & State Management

- [ ] Setup authentication flow in `_layout.tsx`
- [ ] Implement protected routes
- [ ] Add loading states
- [ ] Handle token storage

### Phase 6: UI/UX Polish

- [ ] Add loading spinners
- [ ] Implement error messages
- [ ] Add form validation feedback
- [ ] Style improvements

## Technical Requirements

### Dependencies Already Installed ✅

- `expo-router` - File-based routing
- `@react-navigation/native` - Navigation
- `@react-navigation/stack` - Stack navigation
- `axios` - HTTP client
- `@react-native-async-storage/async-storage` - Local storage
- `react-native-safe-area-context` - Safe area handling
- `react-native-screens` - Native screen optimization

### Additional Dependencies Needed

- `react-hook-form` - Form handling (optional)
- `zod` - Schema validation (optional)

## API Integration Details

### Base URL

```
http://localhost:3000/auth
```

### Request/Response Types

```typescript
// Register Request
{
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// Login Request
{
  email: string;
  password: string;
}

// Auth Response
{
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    googleId?: string;
  };
  accessToken: string;
}
```

## Security Considerations

- JWT token storage in AsyncStorage
- Automatic token refresh handling
- Secure password input fields
- Input validation on client side
- Error message sanitization

## Testing Strategy

- Test login flow
- Test registration flow
- Test token persistence
- Test protected routes
- Test error scenarios
- Test form validation

## Future Enhancements

- Google OAuth integration (mobile)
- Biometric authentication
- Password reset functionality
- User settings screen
- Dark mode support
- Push notifications
