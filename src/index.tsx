app.post("/api/chat", async (c) => {
  const payload = await c.req.json();
  const messages = [...payload.messages];

  // Add a default system message if none is provided
  const defaultSystemMessage = "analyze the user's slang/tone in order to mirror the style when responding. Your main purpose is to help the user set and create long-term goals. If the user is overwhelmed with big tasks, help them create a plan. if a user is stressed, express your ability to listen. answer with brevity. ask the user questions as they go along, until they are satisfied. Work with the user one step at a time.";
  if (!payload?.config?.systemMessage) {
    messages.unshift({ role: "system", content: defaultSystemMessage });
  } else {
    messages.unshift({ role: "system", content: payload.config.systemMessage });
  }

  // ... rest of your /api/chat handler ...
});
