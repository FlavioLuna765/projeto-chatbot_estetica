let chatbotAtivo = true;

document.addEventListener("DOMContentLoaded", function () {
  const respostas = {
    "preço": "Nossos preços variam conforme o serviço. Por exemplo, limpeza de pele custa R$120.",
    "preco": "Nossos preços variam conforme o serviço. Por exemplo, limpeza de pele custa R$120.",
    "serviços": "Oferecemos limpeza de pele, depilação, massagem, design de sobrancelhas e mais.",
    "servicos": "Oferecemos limpeza de pele, depilação, massagem, design de sobrancelhas e mais.",
    "horário": "Funcionamos de segunda a sábado, das 9h às 19h.",
    "horario": "Funcionamos de segunda a sábado, das 9h às 19h.",
    "localização": "Rua Honorato Correia, 26B Jardim Edith - São Paulo/SP",
    "localizacao": "Rua Honorato Correia, 26B Jardim Edith - São Paulo/SP",
    "rua": "Rua Honorato Correia, 26B Jardim Edith - São Paulo/SP",
    "bairro": "Rua Honorato Correia, 26B Jardim Edith - São Paulo/SP",
    "contato": "Você pode nos chamar pelo WhatsApp: (11) 91234-5678.",
    "whatsapp": "Nosso WhatsApp é (11) 91234-5678. Fale com a gente!",
    "celular": "Nosso WhatsApp é (11) 91234-5678. Fale com a gente!",
    "zap": "Nosso WhatsApp é (11) 91234-5678. Fale com a gente!",
    "oi": "Olá! Como posso ajudar? 😊",
    "olá": "Oi! Tudo bem? Estou aqui para te ajudar.",
    "bom dia": "Olá! tudo bem , Como posso ajudar? 😊 ",
    "boa noite": "Olá! tudo bem , Como posso ajudar? 😊 ",
    "duração": "Entre 30 minutos e 2 horas, dependendo do procedimento.",
    "duracao": "Entre 30 minutos e 2 horas, dependendo do procedimento.",
    "tempo": "Entre 30 minutos e 2 horas, dependendo do procedimento.",
    "quanto tempo": "Entre 30 minutos e 2 horas, dependendo do procedimento.",
    "o que vocês fazem": "Oferecemos: sobrancelha, micropigmentação, depilação, limpeza de pele, peeling, entre outros.", 
    "sobrancelha": "Design de sobrancelha dura 30 minutos e custa R$40,00.", 
    "fazer sobrancelha": "Design de sobrancelha dura 30 minutos e custa R$40,00.",
    "micropigmentação": "Micropigmentação de sobrancelha dura 1 a 2 anos. Valor: R$350,00.",
    "fio a fio": "Micropigmentação de sobrancelha dura 1 a 2 anos. Valor: R$350,00.",
    "micropigmentação de sobrancelha": "Micropigmentação de sobrancelha dura 1 a 2 anos. Valor: R$350,00.", 
    "micropigmentação de lábios": "Realça o contorno dos lábios. Duração: 2h. Valor: R$400,00.", 
    "lábios": "Realça o contorno dos lábios. Duração: 2h. Valor: R$400,00.", 
    "pigmentar boca": "Realça o contorno dos lábios. Duração: 2h. Valor: R$400,00.",
    "depilação": "Depilação com cera quente. Preços entre R$30 e R$100.", 
    "depilar": "Depilação com cera quente. Preços entre R$30 e R$100.", 
    "cera": "Depilação com cera quente. Preços entre R$30 e R$100.",
    "limpeza de pele": "Limpeza profunda com microagulhamento. Valor: R$180,00.",
    "microagulhamento": "Limpeza profunda com microagulhamento. Valor: R$180,00.",
    "cravos": "Limpeza profunda com microagulhamento. Valor: R$180,00.",
    "peeling": "Peeling de algas naturais. Valor: R$150,00.",
    "algas": "Peeling de algas naturais. Valor: R$150,00.",
    "esfoliação": "Peeling de algas naturais. Valor: R$150,00.",
    "dermaplaning": "Remove células mortas e pelos finos. Valor: R$130,00.",
    "pelos faciais": "Remove células mortas e pelos finos. Valor: R$130,00.",
    "pelo": "Remove células mortas e pelos finos. Valor: R$130,00.",
    "facial": "Remove células mortas e pelos finos. Valor: R$130,00.",
    "dor": "A maioria dos procedimentos é bem tolerada e pouco dolorida.", 
    "dói": "A maioria dos procedimentos é bem tolerada e pouco dolorida.",
    "machuca": "A maioria dos procedimentos é bem tolerada e pouco dolorida.",
    "sessões": "Normalmente de 1 a 4 sessões, dependendo do tratamento.", 
    "quantas vezes": "Normalmente de 1 a 4 sessões, dependendo do tratamento ,Entre 30 minutos e 2 horas, dependendo do procedimento.",
    "demora": "Normalmente de 1 a 4 sessões, dependendo do tratamento , Entre 30 minutos e 2 horas, dependendo do procedimento.",
    "tempo": "Normalmente de 1 a 4 sessões, dependendo do tratamento.",
    "duração": "Entre 30 minutos e 2 horas, dependendo do procedimento.", 
    "quanto tempo": "Entre 30 minutos e 2 horas, dependendo do procedimento."

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

  chatToggle.addEventListener("click", () => {
    if (chatbotAtivo) {
      chatBox.classList.toggle("hidden");
    }
  });

  closeChat.addEventListener("click", () => {
    chatBox.classList.add("hidden");
  });

  setTimeout(() => {
    if (chatbotAtivo && chatBox.classList.contains("hidden")) {
      chatBox.classList.remove("hidden");
      adicionarMensagem("bot", "Se precisar de ajuda, posso te mostrar nossos serviços 😉");
    }
  }, 10000);
});

function toggleChatbotAtivo() {
  chatbotAtivo = !chatbotAtivo;
  document.getElementById("chat-toggle").style.display = chatbotAtivo ? "block" : "none";
  document.getElementById("chatbot").classList.add("hidden");
}






























/*document.addEventListener("DOMContentLoaded", function () {
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
      //setTimeout(() => adicionarMensagem("bot", resposta), 500);
      let chatFechadoManualmente = false;

      closeChat.addEventListener("click", () => {
      chatFechadoManualmente = true;
      chatBox.classList.add("hidden");
      });

      setTimeout(() => {
      if (!chatFechadoManualmente && chatBox.classList.contains("hidden")) {
          chatBox.classList.remove("hidden");
          adicionarMensagem("bot", "Se precisar de ajuda, posso te mostrar nossos serviços 😉");
      }
      }, 10000);

    }

    // Abrir ou fechar com botão flutuante
    chatToggle.addEventListener("click", () => {
      chatBox.classList.toggle("hidden");
    });

    // Fechar com botão X
    closeChat.addEventListener("click", () => {
      chatBox.classList.add("hidden");
    });

    // Mensagem automática após 10 segundos
    setTimeout(() => {
      if (chatBox.classList.contains("hidden")) {
        chatBox.classList.remove("hidden");
      }
      adicionarMensagem("bot", "Se precisar de ajuda, posso te mostrar nossos serviços 😉");
    }, 10000);
  });
*/