# Sitemap – Login Feature

**Project:** Session-10 Analytics Focus  
**Feature:** User Login  
**Version:** 1.0  
**Last Updated:** Based on US-001 User Story  
**Design Reference:** #[[file:specifications/design-guideline.md]]

---

## Overview

This sitemap defines the navigation structure and page hierarchy for the login feature. The login flow consists of an authentication page and a conditionally rendered root page that displays different content based on user authentication state.

**UI/UX Standards:** All pages and components in this feature must conform to the WCAG 2.1 Design Guidelines (specifications/design-guideline.md) including:
- Color palette and contrast ratios (minimum 4.5:1 for normal text)
- Typography system (Bitter for headings, Raleway for body text)
- Spacing scale (8px base unit)
- Component architecture and accessibility standards
- Touch target minimum sizing (44px × 44px)
- Focus states and keyboard navigation
- Responsive design breakpoints and grid system

---

## Page Structure

### 1. Root Page (`/`)
**Type:** Conditional Public/Authenticated Page  
**Purpose:** Serves dual purpose - public landing page for guests, authenticated home page for logged-in users  
**Content (Guest View):**
- Welcome message
- Links to login page
- Application overview

**Content (Authenticated View):**
- User-specific content
- Welcome message with user data
- Logout functionality
- Main application content

**Access Logic:**
- Guest users (no auth) → See public landing page content
- Authenticated users → See authenticated home content
- No redirect - same URL for both states

**Navigation Links:**
- `/login` - Login Page (for guests)
- Logout button (for authenticated users)

---

### 2. Login Page (`/login`)
**Type:** Authentication Page  
**Purpose:** Credential entry and authentication submission  
**Content:**
- Email input field
- Password input field
- Submit button
- Success message display (after authentication)
- Error message display (validation or authentication failures)

**Form Fields:**

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Email | text | Yes | Valid email format |
| Password | password | Yes | Non-empty |

**Interactions:**
- User fills email and password
- Submit → Validates payload → Sends to backend `POST /api/auth/login`
- Success → Display success message → Redirect to `/` (authenticated view)
- Failure → Display error message on same page

**Dependencies:**
- User must have registered account (precondition from user story)
- Backend authentication API must be available

**API Endpoint:**
- `POST /api/auth/login`

---

## API Endpoints

### Authentication

| Method | Endpoint | Purpose | Request | Response | Auth Required |
|--------|----------|---------|---------|----------|---------------|
| POST | `/api/auth/login` | Authenticate user credentials | `{ email, password }` | `{ success, user, message }` or `{ success: false, message }` | No |
| GET | `/api/auth/session` | Validate current session/auth token | - | User data or null | Yes |

---

## Navigation Flow

```
Guest User at /
    ↓
[See public content]
    ↓
Click "Login" → Navigate to /login
    ↓
Fill email & password
    ↓
Click Submit → POST /api/auth/login
    ↓
├─ Success → Redirect to / (authenticated view)
│           ↓
│       [See authenticated home content]
│
└─ Failure → Show error message on /login
            ↓
        [User can retry]
```

---

## Authentication State Management

| State | Location | Content | Action |
|-------|----------|---------|--------|
| Unauthenticated | `/` | Public landing page | Click "Login" → `/login` |
| Unauthenticated | `/login` | Login form | Submit credentials |
| Authenticated | `/` | Home/dashboard page | Click "Logout" → clear auth |
| Authenticated | `/login` | Redirect to `/` | Auto-redirect if already logged in |

---

## Error Handling

| Scenario | Error Message | Display Location | Next Action |
|----------|---------------|------------------|------------|
| Empty credentials | "Please fill in all fields" | `/login` | Retry |
| Invalid email format | "Please enter a valid email address" | `/login` | Retry |
| Password incorrect | "Invalid credentials" | `/login` | Retry |
| User not found | "Invalid credentials" | `/login` | Retry or register |
| Backend unavailable | "Service temporarily unavailable" | `/login` | Retry |
| Session expired | "Please log in again" | `/login` | Login again |

---

## Security Considerations

- All authenticated content requires valid auth token
- Passwords transmitted over HTTPS only
- Input validation on both frontend and backend
- XSS protection via sanitization
- CSRF protection on form submissions
- Rate limiting on `/api/auth/login` endpoint
- Password hashing on backend before database comparison
- Session tokens must be secure and httpOnly

---

## Future Enhancements (Not in Current Scope)

- `/register` - User registration page
- `/forgot-password` - Password reset flow
- `/profile` - User profile management
- Multi-factor authentication
- Social login integration
- Remember me functionality
