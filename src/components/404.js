import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <img
        src="https://miro.medium.com/max/800/1*9HFCpxhVrnPAlgdrKhOXdg.png"
        alt="Página não encontrada"
      />
      <Link className="btn btn-primary btn-lg" to="/">
        Voltar para página inicial
      </Link>
    </div>
  );
}

export default NotFound;
