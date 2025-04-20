# AI Chat Assistant

This project is a lightweight AI chat application designed to run on edge devices with zero configuration. It provides a seamless user experience for interacting with a local AI model, making it ideal for environments where cloud-based solutions are not feasible.

## Features

- **Zero Configuration**: No additional setup required; works out of the box.
- **Edge Device Compatibility**: Optimized for running on local devices without relying on external servers.
- **Interactive Chat Interface**: A user-friendly interface for engaging with the AI.
- **Persistent Conversations**: Chats and messages are stored locally for continuity.
- **Customizable UI**: Built with TailwindCSS for easy theming and styling.

## Tech Stack

- **Frontend**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Linting**: ESLint with TypeScript support
- **Icons**: Lucide React

## Project Structure

```
native-chat/
├── src/
│   ├── components/       # Reusable React components
│   ├── context/          # Context API for state management
│   ├── types/            # TypeScript type definitions
│   ├── index.css         # Global styles
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite environment types
├── public/               # Static assets
├── tailwind.config.js    # TailwindCSS configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies and scripts
└── readme.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/your-repo/native-chat.git
  cd native-chat
  ```

2. Install dependencies:
  ```bash
  npm install
  ```

3. Start the development server:
  ```bash
  npm run dev
  ```

4. Open the app in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---
Happy coding!