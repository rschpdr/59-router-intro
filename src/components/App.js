import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import About from "./About";
import Campi from "./Campi";
import Campus from "./Campus";

import Navbar from "./Navbar";
import NotFound from "./404";

function App() {
  return (
    <div>
      <Navbar />
      {/* Route é um componente que define em que rota (página) do navegador cada componente do React vai ser exibido */}
      <div className="container mt-5">
        <Routes>
          {/* path é qual rota da URL o componente de 'element' vai ser renderizado */}
          {/* O Navigate está redirecionando o usuário diretamente para a página '/home' assim que o site é aberto */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* O "/*" força o algoritmo a fazer uma comparação profunda da rota que está na URL do navegador com a rota que está no 'path'. Isso nos permite definir rotas aninhadas (e.g. /campus/sao-paulo) em outros arquivos, para termos um código mais organizado */}
          <Route path="/campus" element={<Campi />} />
          {/* Os ":" criam uma rota dinâmica, ou seja, uma rota que vai dar "match" pra qualquer URL no navegador. O texto da parte dinâmica da URL fica acessível no componente renderizado futuramente */}
          <Route path="/campus/:city" element={<Campus />} />
          <Route path="/not-found" element={<NotFound />} />
          {/* Rota para redirecionar páginas não existentes para nossa mensagem de erro de não encontrado */}
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
