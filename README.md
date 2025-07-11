# 🐝 BuzzHive – Social Media Analytics Platform

**BuzzHive** is an intelligent, AI-powered platform designed to analyze social media engagement and provide deep, actionable insights. Leveraging **GPT-based AI models**, **Langflow**, and **DataStax Astra DB**, it delivers real-time content analytics, custom metrics, and chatbot-driven strategy suggestions.

![BuzzHive Badge](https://img.shields.io/badge/BuzzHive-AI%20Analytics-yellow)

---

## 📽️ Demo & Walkthrough

🎬 Watch the full video walkthrough on YouTube:  
[🔗 https://youtu.be/GYnDcdoyIpQ](https://youtu.be/GYnDcdoyIpQ)

---

## 📚 Table of Contents

1. [🚀 Deployment](#-deployment)
2. [🔍 Project Overview](#-project-overview)
3. [🧠 System Architecture](#-system-architecture)
4. [🖥️ Frontend Implementation](#-frontend-implementation)
5. [⚙️ Backend Implementation](#-backend-implementation)
6. [🔗 LangFlow Integration](#-langflow-integration)
7. [🛠️ Technical Specifications](#-technical-specifications)
8. [📡 API Documentation](#-api-documentation)
9. [🗃️ Data Structure](#-data-structure)

---

## 🚀 Deployment

### 🌐 Live Application

🚫 **Note:** The application is **currently not deployed** to a live URL.

If you would like to explore or contribute to **BuzzHive**, feel free to **fork the repository** and run the project **locally** by following the setup instructions provided below.

---

#### 📦 Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/BuzzHive.git
   cd BuzzHive
   ````

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Application**

   ```bash
   npm run dev
   ```

4. Open your browser and go to:
   📍 [http://localhost:3000](http://localhost:3000)

---

💡 Tip: Make sure to configure any environment variables or backend APIs (Langflow, OpenAI, etc.) as needed for full functionality.


### ⚙️ Infrastructure

| Component     | Platform                |
|---------------|-------------------------|
| Frontend      | Render Web Services     |
| Backend       | Node.js (Proxy Server)  |
| Database      | DataStax Astra DB       |
| AI Integration| Langflow + OpenAI GPT   |

---

## 🔍 Project Overview

### 🎯 Objective

Develop a comprehensive analytics module that provides AI-generated insights and engagement data analysis for mock social media content using GPT and Langflow integration.

### 🧩 Core Components

- 📊 **DataStax Astra DB** – Scalable cloud-native NoSQL DB  
- 🔄 **Langflow** – GPT Workflow integration  
- ⚛️ **React** – Frontend UI  
- 🧩 **Node.js** – Backend proxy for streaming and processing  
- 🧠 **OpenAI GPT** – AI-based insight generation

### 🌟 Key Features

- 📈 Real-time analytics dashboard  
- 🤖 GPT-powered insights and chatbot  
- 📊 Visualizations and metric breakdowns  
- 🧮 Engagement scoring and trends  
- 📝 Custom performance metric tracking

---

## 🧠 System Architecture

### 🖥️ Frontend Layer

- **Landing Page**
  - Header with navigation links
  - Overview of BuzzHive features
  - Team section and CTA (Call-To-Action)

- **Analytics Dashboard**
  - Metric summary cards
  - Chart-based data visualizations
  - Detailed data grid
  - Insight generation panel

### ⚙️ Backend Layer

- **Node.js Proxy Server**
  - WebSocket & API request handling
  - Streamed response processing
  - Error management logic

- **Data Processing Module**
  - Text splitting and chunking
  - Parsing for structured data
  - Vector store and embedding generation
  - GPT query handling

---

## 🖥️ Frontend Implementation

| Tech        | Description                             |
|-------------|-----------------------------------------|
| React       | Component-based UI library              |
| HTML/CSS    | Structure and styling                   |
| Chart.js / d3 | Data visualizations and interactivity |
| Axios/Fetch | API communication layer                 |

---

## ⚙️ Backend Implementation

| Tech          | Role                                  |
|---------------|---------------------------------------|
| Node.js       | Proxy server for OpenAI & Langflow    |
| Express.js    | Routing and server logic              |
| WebSocket     | Real-time interaction with client     |
| Python        | Langflow integration & vector ops     |

---

## 🔗 LangFlow Integration

BuzzHive uses **LangFlow** to manage AI workflows. GPT models are connected via LangFlow to support:

- 📡 Streaming GPT responses  
- 🧠 Context-aware insight generation  
- 🔄 Chained prompt handling for analytics

LangFlow acts as the middle layer between GPT and user queries, making the system extensible and modular.

---

## 🛠️ Technical Specifications

| Language      | Usage       |
|---------------|-------------|
| JavaScript    | 76.7%       |
| TypeScript    | 13.5%       |
| HTML          | 4.2%        |
| CSS           | 3.2%        |
| Python        | 2.4%        |

---

## 📡 API Documentation

### Endpoint: `/api/analytics`
- **Method**: `POST`
- **Description**: Fetch performance metrics based on post content
- **Payload**:
  ```json
  {
    "post": "This is a sample tweet content"
  }
  ```

### Response:

```json
{
  "engagementScore": 78,
  "topHashtags": ["#AI", "#BuzzHive"],
  "suggestions": ["Use more visuals", "Post between 2-4 PM"]
}
```

---

## 🗃️ Data Structure

```json
{
  "postId": "uuid",
  "platform": "Twitter",
  "timestamp": "ISODate",
  "content": "string",
  "likes": number,
  "comments": number,
  "shares": number,
  "hashtags": ["string"],
  "embeddingVector": [float]
}
```

---

## 🤝 Contributing

We welcome contributions for UI enhancements, feature additions, or backend optimizations.
Fork the repo, create a branch, and raise a pull request!

---

## 📩 License & Contact

* 📜 License: MIT
* 📧 Contact: [aryanjstar3@gmail.com](mailto:aryanjstar3@gmail.com)
* 🔗 LinkedIn: [Aryan Jaiswal](https://linkedin.com/in/aryan-jaiswal-iiitdwd)

> **Transform your content strategy with AI — Buzz smarter, analyze deeper with BuzzHive.**
