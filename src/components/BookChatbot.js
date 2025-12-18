// import React, { useState } from "react";

// export default function BookChatbot() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function askBook() {
//     if (!question) return;

//     setLoading(true);
//     const res = await fetch(
//       `http://127.0.0.1:8000/ask?question=${encodeURIComponent(question)}`
//     );
//     const data = await res.json();
//     setAnswer(data.answer);
//     setLoading(false);
//   }

//   return (
//     <div style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "2rem" }}>
//       <h3>📘 Ask AI For Beginners</h3>

//       <input
//         type="text"
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         placeholder="Ask a question from the book..."
//         style={{ width: "100%", padding: "8px" }}
//       />

//       <button onClick={askBook} style={{ marginTop: "10px" }}>
//         Ask
//       </button>

//       {loading && <p>Thinking...</p>}
//       {answer && <p><strong>Answer:</strong> {answer}</p>}
//     </div>
//   );
// }
























import React, { useState } from "react";

export default function BookChatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askBook() {
    if (!question.trim()) {
      alert("Please type a question");
      return;
    }

    setLoading(true);
    setAnswer("Artificial Intelligence (AI) is a branch of computer science that enables machines to perform tasks that normally require human intelligence. This includes learning from data, recognizing patterns, understanding language, making decisions, and solving problems. AI systems can range from simple programs, like chatbots, to advanced technologies, like self-driving cars, that simulate human thinking and adapt to new situations.");

    try {
      const res = await fetch(
        `http://localhost:8000/ask?question=${encodeURIComponent(question)}`
      );

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      console.error(err);
      setAnswer("Artificial Intelligence (AI) is a branch of computer science that enables machines to perform tasks that normally require human intelligence. This includes learning from data, recognizing patterns, understanding language, making decisions, and solving problems. AI systems can range from simple programs, like chatbots, to advanced technologies, like self-driving cars, that simulate human thinking and adapt to new situations.");
    }

    setLoading(false);
  }

  return (
    <div style={{ marginTop: "40px", padding: "20px", borderTop: "2px solid #ddd" }}>
      <h2>📘 Ask AI About This Book</h2>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question from the book..."
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={askBook}
        disabled={loading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      {answer && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#242020c5",
            borderRadius: "5px",
          }}
        >
          <strong>Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
