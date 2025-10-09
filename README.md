# Atlantic Container Website Clone

A modern React.js and MongoDB-based clone of the Atlantic Container website. This project includes a responsive frontend built with Material-UI and a backend server with MongoDB integration.

## Features

- Responsive design using Material-UI
- Contact form with MongoDB storage
- Modern and clean user interface
- Mobile-friendly navigation
- Dynamic content sections

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd atlantic-container-clone
```

2. Install dependencies:
```bash
npm install
```

3. Set up MongoDB:
- Make sure MongoDB is running on your local machine
- The default connection string is set to `mongodb://localhost:27017/atlantic-container`

4. Start the development servers:
```bash
# Start the backend server
npm run server

# In a new terminal, start the frontend
npm run dev
```

The application will be available at `http://localhost:5173`

## Email/SMTP Setup

1. Copy `.env.example` to `.env` and set your SMTP credentials:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
MAIL_FROM=Your Name <your_email@example.com>
```

2. Start the backend with `npm run server`. The contact form will validate the email and send submissions to `mogaljay595@gmail.com`.

## Project Structure

```
atlantic-container-clone/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   └── App.jsx
├── server/
│   └── server.js
├── package.json
└── README.md
```

## Technologies Used

- React.js
- Material-UI
- MongoDB
- Express.js
- Node.js
- Axios
- Vite

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 