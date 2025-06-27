# VetIA - Veterinary AI Platform

## Overview

VetIA is a modern web application designed to transform veterinary clinics through AI-powered solutions. The platform provides intelligent tools for cost optimization, revenue enhancement, and improved animal care. Built as a full-stack application with a React frontend and Express backend, the system features a comprehensive landing page with contact form functionality and preparation for future AI integrations.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared components:

- **Frontend**: React with TypeScript, built using Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: TailwindCSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation

## Key Components

### Frontend Architecture
- **Component-based React application** using functional components and hooks
- **Single-page application** with client-side routing via Wouter
- **Responsive design** optimized for both desktop and mobile devices
- **Modern UI components** from shadcn/ui with consistent design system
- **Animation support** using Framer Motion for enhanced user experience

### Backend Architecture
- **RESTful API** built with Express.js
- **Type-safe database operations** using Drizzle ORM
- **Structured error handling** with proper HTTP status codes
- **Request logging middleware** for monitoring and debugging
- **Memory storage fallback** with database integration ready

### Database Schema
- **Users table**: For future authentication and user management
- **Contact submissions table**: Stores inquiries from potential clients
- **Type-safe schema definitions** using Drizzle and Zod validation

## Data Flow

1. **Client requests** are handled by the React frontend
2. **Form submissions** are validated using Zod schemas before API calls
3. **API endpoints** process requests and interact with the database
4. **Database operations** are performed through Drizzle ORM
5. **Responses** are returned with proper error handling and status codes

The contact form submission flow:
- User fills out contact form on the landing page
- Form data is validated client-side using React Hook Form and Zod
- Valid data is submitted to `/api/contact` endpoint
- Server validates data again and stores in PostgreSQL database
- Success/error feedback is displayed to the user via toast notifications

## External Dependencies

### Core Dependencies
- **React ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Styling**: TailwindCSS with PostCSS and Autoprefixer
- **Database**: Drizzle ORM with PostgreSQL adapter (@neondatabase/serverless)
- **Validation**: Zod for schema validation
- **HTTP Client**: TanStack Query for data fetching
- **Animation**: Framer Motion for smooth transitions

### Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full type safety across the stack
- **ESBuild**: For server bundle compilation
- **Database Migration**: Drizzle Kit for schema management

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

### Build Process
- **Frontend**: Vite builds the React application to `dist/public`
- **Backend**: ESBuild compiles the TypeScript server to `dist/index.js`
- **Database**: PostgreSQL is provisioned automatically in the Replit environment

### Environment Configuration
- **Development**: Uses Vite dev server with HMR and Express middleware
- **Production**: Serves static files from Express with built React app
- **Database**: Connects to PostgreSQL using DATABASE_URL environment variable

### Autoscale Deployment
- **Port Configuration**: Application runs on port 5000 (mapped to external port 80)
- **Build Command**: `npm run build` compiles both frontend and backend
- **Start Command**: `npm run start` runs the production server

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```