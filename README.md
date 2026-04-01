💳 Razorpay Payment Backend
This is a Node.js/Express server that integrates with the Razorpay API to handle secure payment order creation. It acts as the bridge between your frontend and the Razorpay payment gateway.

🚀 Features
• Order Creation: Generates unique order_ids for transactions.

• Security: Uses environment variables to protect sensitive API keys.

• CORS Enabled: Configured to communicate safely with your frontend.

• Error Handling: Uses try...catch blocks to prevent server crashes.

🛠️ Tech Stack
• Node.js: Runtime environment.

• Express: Web framework for the server.

• Razorpay SDK: Official library to interact with Razorpay services.

• Cors: Middleware to enable Cross-Origin Resource Sharing.

📋 Setup & Installation
1. Clone the repository
Bash
  • git clone <your-repo-url>
cd <your-project-folder>
2. Install Dependencies
Bash
  • npm install
3. Environment Configuration
  • Create a .env file in the root directory and add your Razorpay credentials:

Code snippet
• PORT=5000
• KEY_ID=your_razorpay_key_id_here
• KEY_SECRET=your_razorpay_key_secret_here
4. Run the Server
Bash
# Start the server
  node index.js

# Or if you have nodemon installed:
  npm run dev
📡 API Endpoints
  GET /
 Check if the server is alive and running.

  Response: 200 OK - "send running"

POST /create-order
Creates a new payment order.

Body Parameters (JSON): None (currently hardcoded to ₹50).

Success Response:

Code: 200

Content: A JSON object containing the id, entity, amount, currency, etc.

Error Response:

Code: 500

Content: "error creating order"
