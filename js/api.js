const API_URL = "https://script.google.com/macros/s/AKfycbyzSeI7KTeVbJjhrj45zLA44xUSvFzIV-kiCmN8qby9dLWjCWFlkgeu3A26PZAIr9Egpg/exec";

async function callAPI(action, payload = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, ...payload })
  });
  return await res.json();
}