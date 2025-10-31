async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  chatBox.innerHTML += `<div class="text-right mb-2"><span class="bg-blue-100 px-3 py-1 rounded-lg inline-block">${userMessage}</span></div>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  const response = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMessage })
  });

  const data = await response.json();
  if (data.reply) {
    chatBox.innerHTML += `<div class="text-left mb-2"><span class="bg-gray-200 px-3 py-1 rounded-lg inline-block">${data.reply}</span></div>`;
  } else {
    chatBox.innerHTML += `<div class="text-left text-red-500">Error: ${data.error || "Something went wrong"}</div>`;
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}