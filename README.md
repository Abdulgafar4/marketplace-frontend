# CleverMart

CleverMart is a platform for buying and selling that allows users to post, manage, and edit their products. The platform includes secure user authentication, product uploading with image support, and rich text editing for detailed product descriptions. Users can view, comment, and purchase products, while sellers can easily manage their listings. This project is built using modern web technologies and tools for both frontend and backend development, ensuring a seamless and efficient user experience.

## Project Overview

This marketplace offers users the ability to:
- Post and edit their products with image uploads.
- View, comment, and purchase products.
- Leverage user authentication for a personalized experience.
- Admins can manage the platform using a dedicated dashboard.

## Tech Stack

- **Frontend**: Next.js (React-based framework)
- **Backend**: NestJS (Node.js framework)
- **Authentication**: Clerk (for user sign-up, login, and authentication)
- **Database**: PostgreSQL (relational database)
- **Image Storage**: Cloudinary (for storing and serving images)
- **State Management**: Tanstack Query (for server-state management)
- **Styling**: Tailwind CSS (utility-first CSS framework)
- **UI Components**: Shadcn UI (for pre-built UI components)
- **Rich Text Editing**: Slate (for rich text product descriptions)
- **Data Validation**: Zod (for schema validation)
- **API Documentation**: Swagger (for documenting backend APIs)

## Features

1. **User Authentication**: Secure user authentication and management using Clerk.
2. **Product Management**: Users can create, edit, and delete their products.
3. **Image Uploads**: Integration with Cloudinary for managing product images.
4. **Rich Text Editor**: For detailed product descriptions using Slate.js.
5. **Admin Dashboard**: Admins have a separate interface to manage products, users, and more.
6. **State Management**: Tanstack Query to manage server-side data fetching and caching.

## Project Setup

### Prerequisites
- Install [Bun](https://bun.sh/) for efficient development.
- Have Docker installed for PostgreSQL container management.

### Step-by-Step Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/clever-marketplace.git
   cd clever-marketplace
   ```

2. **Install dependencies**:
   Run this command to install dependencies using Bun:
   ```bash
   bun install
   ```

3. **Environment Variables**:
   Create a `.env` file in the root directory and fill in the following environment variables:
   ```bash
   PORT=8000
   DATABASE_URL=postgresql://username:password@localhost:5432/marketplacedb
   CLOUDINARY_URL=your-cloudinary-url
   CLERK_API_KEY=your-clerk-api-key
   ```

4. **Start PostgreSQL with Docker**:
   Run the following command to start PostgreSQL with Docker:
   ```bash
   docker-compose up -d
   ```

5. **Run the development servers**:
   - For Next.js frontend:
     ```bash
     bun run dev
     ```
   - For NestJS backend:
     ```bash
     bun run start:dev
     ```

6. **Migrate the database**:
   Run migrations for PostgreSQL (if using Prisma):
   ```bash
   npx prisma migrate dev
   ```

### Commit History

Initial project setup: 
```
git commit -m "Initial project setup: configured Next.js, NestJS, Clerk, PostgreSQL, Cloudinary, and other core tools"
```

## Future Improvements
- Add payment integration for purchasing products.
- Implement notifications for product updates.
- Expand product categorization and search functionality.
