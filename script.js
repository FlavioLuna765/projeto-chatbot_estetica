const respostas = {
  "preço": "Nossos preços variam conforme o serviço. Por exemplo, limpeza de pele custa R$120.",
  "preco": "Nossos preços variam conforme o serviço. Por exemplo, limpeza de pele custa R$120.",
  "serviços": "Oferecemos limpeza de pele, depilação, massagem, design de sobrancelhas e mais.",
  "servicos": "Oferecemos limpeza de pele, depilação, massagem, design de sobrancelhas e mais.",
  "horário": "Funcionamos de segunda a sábado, das 9h às 19h.",
  "horario": "Funcionamos de segunda a sábado, das 9h às 19h.",
  "localização": "Estamos localizados na Rua das Rosas, 123 - Centro.",
  "localizacao": "Estamos localizados na Rua das Rosas, 123 - Centro.",
  "contato": "Você pode nos chamar pelo WhatsApp: (11) 91234-5678.",
  "whatsapp": "Nosso WhatsApp é (11) 91234-5678. Fale com a gente!",
  "oi": "Olá! Como posso ajudar? 😊",
  "olá": "Oi! Tudo bem? Estou aqui para te ajudar.",
};

const input = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");
const chatBox = document.getElementById("chatbot");
const chatToggle = document.getElementById("chat-toggle");
const closeChat = document.getElementById("close-chat");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && input.value.trim() !== "") {
    const msg = input.value.toLowerCase().trim();
    adicionarMensagem("user", input.value);
    responder(msg);
    input.value = "";
  }
});

function adicionarMensagem(tipo, texto) {
  const div = document.createElement("div");
  div.className = tipo === "user" ? "user-msg" : "bot-msg";
  div.innerText = texto;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function responder(pergunta) {
  let resposta = "Desculpe, não entendi. Pode tentar reformular?";
  for (let chave in respostas) {
    if (pergunta.includes(chave)) {
      resposta = respostas[chave];
      break;
    }
  }
  setTimeout(() => adicionarMensagem("bot", resposta), 500);
}

// Alternar visibilidade
chatToggle.addEventListener("click", () => {
  chatBox.classList.toggle("hidden");
});

closeChat.addEventListener("click", () => {
  chatBox.classList.add("hidden");
});

// Mensagem automática após 10 segundos
window.addEventListener("load", () => {
setTimeout(() => {
    if (chatBox.classList.contains("hidden")) {
    chatBox.classList.remove("hidden"); // Abre o chat
    }
    adicionarMensagem("bot", "Se precisar de ajuda, posso te mostrar nossos serviços 😉");
}, 10000);
});