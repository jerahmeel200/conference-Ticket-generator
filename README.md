# Conference Ticket Generator

## Description

A React-based application that allows users to generate a conference ticket by filling out a form with their details, including their name, email, and avatar upload. The form performs validation, persists data using local storage, and displays the ticket upon successful submission.

## Features

- User-friendly form with input validation.
- Cloudinary image upload for avatars.
- Data persistence using local storage.
- Accessible and responsive design.
- Generates a unique ticket number for each submission.

## Installation

```bash
# Clone the repository
git clone https://github.com/jerahmeel200/conference-ticket-generator.git

# Navigate to the project directory
cd conference-ticket-generator

# Install dependencies
npm install
```

## Usage

```bash
# Start the development server
npm run dev
```

Then, open `http://localhost:3000` in your browser.

## Dependencies

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-hook-form": "^7.0.0",
    "@hookform/resolvers": "^2.8.0",
    "yup": "^0.32.0"
  }
}
```

## How It Works

1. User enters their **Full Name** and **Email Address**.
2. User uploads an **Avatar Image** via Cloudinary.
3. Form validates inputs and stores data in local storage.
4. A **Conference Ticket** is generated and displayed upon successful submission.

## Project Structure

```bash
📦 conference-ticket-generator
├── 📂 src
│   ├── 📄 App.js
│   ├── 📄 ConferenceTicketGenerator.js
│   ├── 📄 index.js
│   └── 📂 components
│         └── 📂 layout
        │    ├── 📄 AttendeeDetails.ts
        │    ├── 📄 BoxContainer.ts
        │    ├── 📄 Buttons.ts
        │    ├── 📄 FormInput.ts
        │    ├── 📄 FormValidation.ts
        │    ├── 📄 TicketDisplay.ts
        │    ├── 📄 TicketForm.ts
        │    ├── 📄 Headers.ts
        │    ├── 📄 Ready.ts
        │    ├── 📄 Tickets.ts
        │    ├── 📄 TicketCover.ts
        │    ├── 📄 TicketHeader.ts
        │    ├── 📄 TicketSelection.ts
        │    ├── 📄 TicketSvg.ts
        └── 📂 ui
│
├── 📄 package.json
├── 📄 README.md
└── 📄 .gitignore
        
```

## Contributing

Pull requests are welcome! Feel free to contribute by following these steps:

```bash
# Fork the repository
# Create a new feature branch
git checkout -b feature-branch
# Commit changes
git commit -m "Add new feature"
# Push to GitHub
git push origin feature-branch
# Submit a pull request
```

## License

This project is licensed under the MIT License.

---

 

