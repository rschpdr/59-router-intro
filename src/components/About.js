import logo from "../assets/images/react-router-logo.png";

function About() {
  return (
    <div>
      <h1>Bem-vindo(a) à página About</h1>
      <p>
        Fusce egestas lorem at dui accumsan, at ultrices ipsum sagittis. Aenean
        varius mauris non dolor egestas, id gravida est facilisis. Nullam
        sodales imperdiet ex ut condimentum. Ut aliquam viverra nunc, sed
        egestas nunc fringilla ac. Vestibulum non ipsum vel ipsum viverra
        semper. Nunc pulvinar quam in libero accumsan, a fringilla neque
        lacinia. Duis tincidunt libero a accumsan dictum. Integer sapien tellus,
        facilisis nec euismod sit amet, eleifend id nulla.{" "}
      </p>
      <img src={logo} alt="React Router logo" />
    </div>
  );
}

export default About;
