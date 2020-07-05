import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import logoImg from "../../assets/logo.png";

const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const history = useHistory();

  useEffect(() => {
    //
  }, []);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, email, whatsapp } = formData;

    try {
      const response = await axios.post(
        "https://api.zenvia.com/v1/channels/whatsapp/messages",
        {
          from: "grape-euphonium",
          to: whatsapp,
          contents: [
            {
              type: "text",
              text:
                `Olá restaurante ${name}, Obrigado por se cadastrar no ToSeguro! Acesse o site e configure seu perfil através do link https://toseguro.com.br/profile/12dd15?reqId=Awxhj1`,
            },
          ],
          id: "7111226a-a2a6-4a6c-b065-64d956799266",
          direction: "OUT",
        },
        {
          headers: {
            "X-API-Token": "8uTbabEC_Ic9boCyvVLfGuGUL7y-4onQn9XU",
          },
        }
      );
      alert("Cadastro realizado com sucesso");
      console.log(response);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="page-create-point">
      <header>
        <img src={logoImg} alt="Logo" width={250} />

        <Link to="/">Voltar para Home</Link>
      </header>

      <form onSubmit={handleSubmit}>
        <h1>Cadastre-se </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome do restaurante</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </fieldset>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
