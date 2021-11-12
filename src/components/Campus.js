import campusList from "./campus.json";
import { useParams } from "react-router-dom";

function Campus() {
  const params = useParams();

  // Aqui usamos o hook "useParams" para extrair da URL a informação dinâmica, e usar essa informação para filtrar do nosso "banco de dados" a informação específica sobre o campus que foi clicado. Note que a chave do objeto params se chama "city", pois foi esse o nome dado ao parâmetro de rotas depois dos ":" na linha 26 do arquivo App.js
  const foundCity = campusList.find(
    (currentCityObj) => currentCityObj.id === params.city
  );

  return (
    <div>
      <img src={foundCity.img} alt="O campus" />
      <h1>{foundCity.title}</h1>

      {foundCity.paragraphs.map((currentParagraphObj) => {
        return (
          <div key={currentParagraphObj.title}>
            <h2>{currentParagraphObj.title}</h2>
            <p>{currentParagraphObj.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Campus;
