# Angular E-Commerce App
An Angular-based e-commerce web application with user authentication, product catalog, cart management, Stripe payment integration, and modular design using lazy loading. UI is built with Bootstrap and custom CSS.

# Development Status
This project is a work in progress. Features are being implemented and refined continuously. Expect updates and improvements as development continues.

# Features
- Login Page – Secure login interface.
- Product Listing Page
- Lazy-loaded module.
- Data fetched from static data.json.
- Responsive Bootstrap grid.

# Product Detail Page
- Image zoom feature.
- Next/Previous product navigation.
- "Add to Cart" button.
- Similar products shown at the bottom.

# Cart Page
- View cart items.
- Update quantity.
- Remove items.

# Payment
- Stripe integration.
- Payment success page.

# Modules
- Modular structure with lazy loading for performance.

# Styling
- Designed using Bootstrap.
- Custom CSS used where required.

# Setup Instructions
Clone Repo
- git clone https://github.com/your-repo/angular-ecommerce.git
- cd angular-ecommerce

# Install Dependencies
- npm install
Run the App
- ng serve
Access
- http://localhost:4200

# Stripe Integration Setup
Replace the placeholder Stripe keys in the payment component with your Stripe public key.
- Use Stripe Test Cards: https://stripe.com/docs/testing

# Static Data
Product data is fetched from /assets/data.json using Angular's HttpClient.

# Build
ng build --prod

# Notes
- Ensure your data.json is well-structured and located in assets/.
- Uses Bootstrap 5; ensure it's included in angular.json.

---

# Contributions

This project is for educational/demo purposes. Thanks for checking it out!

