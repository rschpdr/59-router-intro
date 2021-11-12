import { Link, Route, Routes } from "react-router-dom";
import Campus from "./Campus";

function Campi() {
  return (
    <div>
      <p>
        <strong>Uma escola global e uma comunidade tecnológica</strong>
      </p>
      <p>
        Na Ironhack, estamos fazendo mais do que educar a próxima geração de
        criadores digitais; estamos fomentando uma comunidade global de talentos
        tecnológicos. Não importa qual dos nove campus você escolha, estudar em
        uma de nossas escolas de tecnologia te prepara para um futuro brilhante
        graças a um ecossistema distinto e uma rede de graduados. Descubra o que
        significa ser um Ironhacker explorando as nossas unidades em Amsterdã,
        Barcelona, Berlim, Lisboa, Madrid, Cidade do México, Miami, Paris ou São
        Paulo!
      </p>

      <h2>Conheça os campus</h2>
      <div className="list-group">
        <Link
          to="/campus/sao-paulo"
          className="list-group-item list-group-item-action"
        >
          São Paulo
        </Link>
        <Link
          to="/campus/mexico-city"
          className="list-group-item list-group-item-action"
        >
          Cidade do México
        </Link>
        <Link
          to="/campus/miami"
          className="list-group-item list-group-item-action"
        >
          Miami
        </Link>
        <Link
          to="/campus/barcelona"
          className="list-group-item list-group-item-action"
        >
          Barcelona
        </Link>
        <Link
          to="/campus/lisbon"
          className="list-group-item list-group-item-action"
        >
          Lisboa
        </Link>
      </div>
    </div>
  );
}

export default Campi;
