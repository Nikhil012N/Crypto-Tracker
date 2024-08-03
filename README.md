# Real-Time Data Crypto Tracker

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/mini-website.git
    cd mini-website
    ```

2. Install dependencies:

    ```bash
    npm install || yarn
    ```

3. Set up environment variables:

    Create a `.env.local` file in the root directory and add your MongoDB URI:

    ```env
    MONGO_URI=mongodb://localhost:27017/stockData
    BASE_URL=http://localhost:3000
    ```

### Running the Application

1. Start the Next.js development server:

    ```bash
    npm run dev
    ```

2. The application will be available at `http://localhost:3000`.

### Polling Data

- The server automatically polls data for predefined symbols every few seconds.

### Changing Symbols

- Use the "Change Symbol" button to update the symbol displayed in the table.


