import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "./styles.css";
import { isNumber } from "util";

const Restaurantes = (props) => {
  const [mapVisible, setMapVisible] = useState(false);
  const [initialPosition, setInitialPosition] = useState([0, 0]);
  const [markers, setMarkers] = useState([]);
  const [covidGrid, setCovidGrid] = useState({});

  const history = useHistory();

  const handleMapVisible = () => setMapVisible(!mapVisible);

  const handleNavigateToRegister = () => {
    history.push('/register')
  }

  const formatNumber = (number) => {
    return number 
  } 

  useEffect(() => {
    handleGetMarkers();
    handleGetCovidGrid();

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  async function handleGetCovidGrid() {
    try {
      const response = await axios.get(
        "https://gateway.gr1d.io/sandbox/covidAPI/v1/countries/Brazil",
        {
          headers: {
            "X-Api-Key": "bcf60fc6-dda8-41b7-9f88-93ad92c78f60",
          },
        }
      );
      setCovidGrid(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleGetMarkers() {
    try {
      const response = await axios.get(
        "https://api.jsonbin.io/b/5f0224e30bab551d2b6c7bd6"
      );
      setMarkers(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="header1">
        <img src={require("../../assets/libras_simbolo_liguagem_de_sin.png")} />
        <span>Tamanho</span>
        <span
          style={{
            backgroundColor: "#fff",
            width: 25,
            height: 25,
            borderRadius: "50%",
            fontWeight: "bold",
            paddingTop: 3,
            paddingLeft: 4.5,
            color: "#2558E6",
          }}
        >
          A+
        </span>

        <span
          style={{
            backgroundColor: "#fff",
            width: 25,
            height: 25,
            borderRadius: "50%",
            fontWeight: "bold",
            paddingTop: 3,
            paddingLeft: 4.5,
            color: "#2558E6",
          }}
        >
          A-
        </span>
        <span>Contraste</span>
        <span
          style={{
            backgroundColor: "#fff",
            width: 15,
            height: 15,
            borderRadius: 7.5,
          }}
        ></span>
        <span
          style={{
            backgroundColor: "#41414d",
            width: 15,
            height: 15,
            borderRadius: 7.5,
          }}
        ></span>
      </div>

      <div className="header2">
        <img
          src={require("../../assets/logo.png")}
          width={150}
          style={{ marginLeft: 150 }}
        />
        <div style={{ marginRight: 150 }}>
          <span>COMO FUNCIONA</span>
          <span>SOU RESTAURANTE</span>
          <button type="button" onClick={handleNavigateToRegister}>ENTRAR / CADASTRAR</button>
        </div>
      </div>

      <div className="content">
        <div className="sidebar">
          <small>Estado</small>
          <h1>{props.history.location.state.cidade}</h1>

          <small className="itemMenu">SEGURANÇA NA REGIÃO</small>
          <div>
            <input type="checkbox" id="cb1" />
            <label for="cb1">Região super segura</label>
          </div>
          <div>
            <input type="checkbox" id="cb2" />
            <label for="cb2">Região segura</label>
          </div>
          <div>
            <input type="checkbox" id="cb3" />
            <label for="cb3">Região que merece atenção</label>
          </div>

          <small className="itemMenu">SEGURANÇA DO RESTAURANTE</small>
          <div>
            <input type="checkbox" id="cb4" />
            <label for="cb4">Disponibilidade do álcool gel</label>
          </div>
          <div>
            <input type="checkbox" id="cb5" />
            <label for="cb5">Distância de 1,5m entre mesas</label>
          </div>
          <div>
            <input type="checkbox" id="cb6" />
            <label for="cb6">Obrigatório uso de máscara</label>
          </div>

          <small className="itemMenu">CAPACIDADE DE USO</small>
          <div>
            <input type="checkbox" id="cb7" />
            <label for="cb7">Mesas para até 6 pessoas</label>
          </div>
          <div>
            <input type="checkbox" id="cb8" />
            <label for="cb8">Mesas para mais de 8 pessoas</label>
          </div>
          <div>
            <input type="checkbox" id="cb9" />
            <label for="cb9">Espaço externo</label>
          </div>

          <small className="itemMenu">AVALIAÇÕES</small>
          <div>
            <input type="checkbox" id="cb10" />
            <label for="cb10">Super seguro</label>
          </div>
          <div>
            <input type="checkbox" id="cb11" />
            <label for="cb11">Seguro</label>
          </div>
          <div>
            <input type="checkbox" id="cb12" />
            <label for="cb12">Não avaliado</label>
          </div>

          <a href="#">Filtros avançados</a>
        </div>

        <div className="results">
          <div
            style={{ display: "flex", justifyContent: "column", width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className="covidgrid">
                {mapVisible && (
                  <>
                    <small>Casos: <b>{covidGrid.cases && formatNumber(covidGrid.cases)}</b></small>
                    <small>
                      Recuperados: <b>{covidGrid.recovered && formatNumber(covidGrid.recovered)}</b>
                    </small>
                    <small>
                      Ativos: <b>{covidGrid.active && formatNumber(covidGrid.active)}</b>
                    </small>
                    <small>
                      Mortes: <b> {covidGrid.deaths && formatNumber(covidGrid.deaths)}</b>
                    </small>
                  </>
                )}
              </div>
              <div className="filters">
                <span style={{ color: "#A5A5A5" }}>
                  Ordernar por: <b style={{ color: "#2558E6" }}>Recomendado</b>
                </span>
                <span onClick={handleMapVisible}>
                  <b style={{ color: "#2558E6", cursor: "pointer" }}>
                    {mapVisible ? "Fechar" : "Abrir"} Mapa
                  </b>
                </span>
              </div>
            </div>
          </div>

          {mapVisible && (
            <Map center={initialPosition} zoom={5} style={{ marginTop: 20 }}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />

              {markers &&
                markers.map((e, i) => (
                  <Marker
                    key={i}
                    position={[parseFloat(e.lat), parseFloat(e.lng)]}
                    title={`${e.uf} - Total: ${e.total}`}
                  />
                ))}
            </Map>
          )}
          <div className="cards" style={{ marginTop: 10 }}>
            <div className="card">
              <img
                src={require("../../assets/nick_karvounis_Ciqxn7FE4vE_uns.png")}
              />
              <span
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  backgroundColor: "#40C946",
                  position: "absolute",
                  right: 20,
                  top: 100,
                }}
              >
                <img
                  src={require("../../assets/seguro.png")}
                  style={{ marginLeft: 20, marginTop: 15 }}
                />
              </span>
              <div className="cardContent">
                <h3>Vicenzo</h3>
                <small style={{ marginTop: -10, color: "#A5A5A5" }}>
                  58 avaliações
                </small>

                <p>Distanciamento 1,5m</p>
                <div style={{ display: "flex", marginTop: -20 }}>
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                </div>

                <p>Álcool gel</p>
                <div style={{ display: "flex", marginTop: -20 }}>
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                </div>

                <p>Grupo de até 6 pessoas</p>
                <div style={{ display: "flex", marginTop: -20 }}>
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                </div>

                <span
                  style={{
                    textAlign: "center",
                    color: "#DBDBDB",
                    marginTop: 30,
                  }}
                >
                  <b>Ver mais</b>
                </span>
              </div>
            </div>

            <div className="card">
              <img
                src={require("../../assets/benjamin_zanatta_g9fd4Z3qwag_u.png")}
              />
              <span
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  backgroundColor: "#E4E4E4",
                  position: "absolute",
                  right: 20,
                  top: 100,
                }}
              >
                <img
                  src={require("../../assets/naoseguro.png")}
                  style={{ marginLeft: 20, marginTop: 15 }}
                />
              </span>
              <div className="cardContent">
                <h3>Gringo</h3>
                <small style={{ marginTop: -10, color: "#A5A5A5" }}>
                  58 avaliações
                </small>

                <p>Distanciamento 1,5m</p>
                <div style={{ display: "flex", marginTop: -20 }}>
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                </div>

                <p>Álcool gel</p>
                <div style={{ display: "flex", marginTop: -20 }}>
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                </div>

                <p>Grupo de até 6 pessoas</p>
                <div style={{ display: "flex", marginTop: -20 }}>
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                </div>

                <span
                  style={{
                    textAlign: "center",
                    color: "#DBDBDB",
                    marginTop: 30,
                  }}
                >
                  <b>Ver mais</b>
                </span>
              </div>
            </div>

            <div className="card">
              <img
                src={require("../../assets/mae-mu-I7A_pHLcQK8-unsplash.png")}
              />
              <span
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  backgroundColor: "#FFC107",
                  position: "absolute",
                  right: 20,
                  top: 100,
                }}
              >
                <img
                  src={require("../../assets/naoseguro.png")}
                  style={{ marginLeft: 20, marginTop: 15 }}
                />
              </span>
              <div className="cardContent">
                <h3>Café Urbano</h3>
                <small style={{ marginTop: -10, color: "#A5A5A5" }}>
                  58 avaliações
                </small>

                <p>Distanciamento 1,5m</p>
                <div style={{ display: "flex", marginTop: -20 }}>
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                </div>

                <p>Álcool gel</p>
                <div style={{ display: "flex", marginTop: -20 }}>
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                </div>

                <p>Grupo de até 6 pessoas</p>
                <div style={{ display: "flex", marginTop: -20 }}>
                  <img
                    src={require("../../assets/seguro2.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                  <img
                    src={require("../../assets/seguro3.png")}
                    width={14}
                    style={{ marginLeft: 3 }}
                  />
                </div>

                <span
                  style={{
                    textAlign: "center",
                    color: "#DBDBDB",
                    marginTop: 30,
                  }}
                >
                  <b>Ver mais</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurantes;
