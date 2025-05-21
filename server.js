const express = require('express');
const app = express();
const path = require('path');

// Configuração do EJS (templates)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    res.render('index', {
        nome: "Seu Nome",
        linkedin: "https://linkedin.com/seu-perfil",
        habilidades: "Especialista em IA | Python | Análise de Dados | Prompt Engineering",
        projetos: [
            { nome: "Chatbot de IA", link: "#" },
            { nome: "Análise de Sentimentos", link: "#" },
            { nome: "Classificador de Imagens", link: "#" },
            { nome: "Automação de Planilhas", link: "#" },
            { nome: "Recomendador de Filmes", link: "#" },
            // Adicione mais 5 projetos fictícios (10 no total)
            { nome: "API de Previsão", link: "#" },
            { nome: "Dashboard de Dados", link: "#" },
            { nome: "Gerador de Texto", link: "#" },
            { nome: "OCR com IA", link: "#" },
            { nome: "Bot para LinkedIn", link: "#" }
        ]
    });
});

// Inicie o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Portfólio online em http://localhost:${PORT}`);
});