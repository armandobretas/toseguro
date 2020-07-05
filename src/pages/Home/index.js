import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import img1 from "../../assets/elevate_snnhGYNqm44_unsplash.png";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const history = useHistory();
  const [city, setCity] = useState("");
  const [show, setShow] = useState(false);
  const [fontSizes, setFontSizes] = useState({
    fsSpan: 16,
    fsTitle: 48,
  });
  const handleClose = () => setShow(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const handleSearch = () => {
    history.push("/restaurantes", { cidade: city });
  };

  const handleNavigateToRegister = () => {
    history.push("/register");
  };

  const handleFontSize = (a) => {
    if (a === "+") {
      setFontSizes({
        fsSpan: fontSizes.fsSpan + 1,
        fsTitle: fontSizes.fsTitle + 1,
      });
    } else {
      setFontSizes({
        fsSpan: fontSizes.fsSpan - 1,
        fsTitle: fontSizes.fsTitle - 1,
      });
    }
  };

  return (
    <div
      id="institucional"
      style={{ backgroundColor: darkTheme ? "#0e0b16" : "#F7F7FD" }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <iframe
            width="470"
            height="416"
            src="https://www.youtube.com/embed/du2XLAkUUHo?controls=0;autoplay=1;mute=0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </Modal.Body>
      </Modal>

      <div id="Vamos_sair_para_comer">
        <span
          style={{
            fontSize: fontSizes.fsTitle,
            color: darkTheme ? "#fff" : "#2e266f",
          }}
        >
          Vamos sair para comer
        </span>
      </div>
      <div id="com_seguran_a_">
        <span
          style={{
            fontSize: fontSizes.fsTitle,
            color: darkTheme ? "#fff" : "#2558e6",
          }}
        >
          com segurança?
        </span>
      </div>
      <svg className="Ret_ngulo_3">
        <rect
          fill="rgba(255,255,255,1)"
          id="Ret_ngulo_3"
          rx="13"
          ry="13"
          x="0"
          y="0"
          width="481"
          height="70"
        ></rect>
      </svg>
      <div id="Infome_a_sua_cidade">
        <input
          type="text"
          onChange={(event) => setCity(event.target.value)}
          placeholder="Informe seu estado"
        />
      </div>
      <div id="Header__19">
        <div id="Menu_Two">
          <span
            style={{
              cursor: "pointer",
              fontSize: fontSizes.fsSpan,
              color: darkTheme ? "#fff" : "#41414d",
            }}
          >
            Sou restaurante
          </span>
        </div>
        <div id="Menu_Two_ea">
          <span
            style={{
              fontSize: fontSizes.fsSpan,
              color: darkTheme ? "#fff" : "#2558e6",
            }} 
          >
           <Link to='/register'> Entrar / Cadastrar </Link>
          </span>
        </div>
        <div id="Menu_One">
          <span
            style={{
              cursor: "pointer",
              fontSize: fontSizes.fsSpan,
              color: darkTheme ? "#fff" : "#41414d",
            }}
          >
            Como funciona
          </span>
        </div>
      </div>
      <div id="Agora_ficou__mais_seguros_sair">
        <span
          style={{
            fontSize: fontSizes.fsTitle,
            color: darkTheme ? "#fff" : "#2558e6",
          }}
        >
          Agora ficou{" "}
        </span>
        <span
          style={{
            fontSize: fontSizes.fsTitle,
            color: darkTheme ? "#fff" : "#2558e6",
          }}
        >
          mais seguros
        </span>
        <br />
        <span
          style={{
            fontSize: fontSizes.fsTitle,
            color: darkTheme ? "#fff" : "#2558e6",
          }}
        >
          sair para comer com
          <br /> amigos e com a família{" "}
        </span>
      </div>
      <div id="Com_a_ajuda_do_Sebrae__listamo">
        <span
          style={{
            fontSize: fontSizes.fsSpan,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          Com a ajuda do Sebrae, listamos vários restaurantes da sua cidade!
          <br />
          <br />
          Agora você pode reservar um horário no seu restaurante preferido e de
          quebra pode comer se sentindo seguro!
        </span>
      </div>
      <div id="Grupo_66">
        <svg className="Elipse_4_ef">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_4_ef"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_5_eg">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_5_eg"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_6_eh">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_6_eh"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_7_ei">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_7_ei"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_8_ej">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_8_ej"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_9_ek">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_9_ek"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_10_el">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_10_el"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_11_em">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_11_em"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_12_en">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_12_en"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_13_eo">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_13_eo"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_14_ep">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_14_ep"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_15_eq">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_15_eq"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_16_er">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_16_er"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_17_es">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_17_es"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_18_et">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_18_et"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_19_eu">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_19_eu"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_20_ev">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_20_ev"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_21_ew">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_21_ew"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_22_ex">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_22_ex"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_23_ey">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_23_ey"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_24_ez">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_24_ez"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_25_e">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_25_e"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_26_e">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_26_e"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_27_e">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_27_e"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_28_e">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_28_e"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_29_e">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_29_e"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_30_e">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_30_e"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_31_e">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_31_e"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_32_e">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_32_e"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_33_e">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_33_e"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_34_e">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_34_e"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_35_fa">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_35_fa"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_36_fb">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_36_fb"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_37_fc">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_37_fc"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_38_fd">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_38_fd"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_39_fe">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_39_fe"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_40_ff">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_40_ff"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_41_fg">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_41_fg"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_42_fh">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_42_fh"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_43_fi">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_43_fi"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_44_fj">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_44_fj"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_45_fk">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_45_fk"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_46_fl">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_46_fl"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_47_fm">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_47_fm"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_48_fn">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_48_fn"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_49_fo">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_49_fo"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_50_fp">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_50_fp"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_51_fq">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_51_fq"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_52_fr">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_52_fr"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_53_fs">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_53_fs"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_54_ft">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_54_ft"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_55_fu">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_55_fu"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_56_fv">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_56_fv"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_57_fw">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_57_fw"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_58_fx">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_58_fx"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_59_fy">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_59_fy"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_60_fz">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_60_fz"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_61_f">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_61_f"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_62_f">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_62_f"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_63_f">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_63_f"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_64_f">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_64_f"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_65_f">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_65_f"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_66_f">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_66_f"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_67_f">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_67_f"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_68_f">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_68_f"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_69_f">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_69_f"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_70_f">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_70_f"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_71_ga">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_71_ga"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_72_gb">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_72_gb"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_73_gc">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_73_gc"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_74_gd">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_74_gd"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_75_ge">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_75_ge"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_76_gf">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_76_gf"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_77_gg">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_77_gg"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_78_gh">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_78_gh"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_79_gi">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_79_gi"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_80_gj">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_80_gj"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_81_gk">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_81_gk"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_82_gl">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_82_gl"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_83_gm">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_83_gm"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_84_gn">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_84_gn"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_85_go">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_85_go"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_86_gp">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_86_gp"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_87_gq">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_87_gq"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_88_gr">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_88_gr"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_89_gs">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_89_gs"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_90_gt">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_90_gt"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_91_gu">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_91_gu"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_92_gv">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_92_gv"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_93_gw">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_93_gw"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_94_gx">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_94_gx"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_95_gy">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_95_gy"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_96_gz">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_96_gz"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_97_g">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_97_g"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_98_g">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_98_g"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_99_g">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_99_g"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_100_g">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_100_g"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_101_g">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_101_g"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_102_g">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_102_g"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_103_g">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_103_g"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_104_g">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_104_g"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_105_g">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_105_g"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_106_g">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_106_g"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_107_ha">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_107_ha"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_108_hb">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_108_hb"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_109_hc">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_109_hc"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_110_hd">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_110_hd"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_111_he">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_111_he"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_112_hf">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_112_hf"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_113_hg">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_113_hg"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_114_hh">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_114_hh"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_115_hi">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_115_hi"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_116_hj">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_116_hj"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_117_hk">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_117_hk"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_118_hl">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_118_hl"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_119_hm">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_119_hm"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_120_hn">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_120_hn"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_121_ho">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_121_ho"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_122_hp">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_122_hp"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_123_hq">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_123_hq"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_124_hr">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_124_hr"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
      </div>
      <div id="Grupo_9893">
        <svg className="Elipse_4_ht">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_4_ht"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_5_hu">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_5_hu"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_6_hv">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_6_hv"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_7_hw">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_7_hw"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_8_hx">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_8_hx"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_9_hy">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_9_hy"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_10_hz">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_10_hz"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_11_h">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_11_h"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_12_h">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_12_h"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_13_h">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_13_h"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_14_h">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_14_h"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_15_h">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_15_h"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_16_h">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_16_h"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_17_h">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_17_h"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_18_h">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_18_h"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_19_h">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_19_h"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_20_h">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_20_h"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_21_ia">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_21_ia"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_22_ib">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_22_ib"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_23_ic">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_23_ic"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_24_id">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_24_id"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_25_ie">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_25_ie"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_26_if">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_26_if"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_27_ig">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_27_ig"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_28_ih">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_28_ih"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_29_ii">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_29_ii"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_30_ij">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_30_ij"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_31_ik">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_31_ik"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_32_il">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_32_il"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_33_im">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_33_im"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_34_in">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_34_in"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_35_io">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_35_io"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_36_ip">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_36_ip"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_37_iq">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_37_iq"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_38_ir">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_38_ir"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_39_is">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_39_is"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_40_it">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_40_it"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_41_iu">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_41_iu"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_42_iv">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_42_iv"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_43_iw">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_43_iw"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_44_ix">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_44_ix"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_45_iy">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_45_iy"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_46_iz">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_46_iz"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_47_i">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_47_i"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_48_i">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_48_i"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_49_i">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_49_i"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_50_i">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_50_i"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_51_i">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_51_i"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_52_i">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_52_i"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_53_i">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_53_i"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_54_i">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_54_i"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_55_i">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_55_i"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_56_i">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_56_i"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_57_ja">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_57_ja"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_58_jb">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_58_jb"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_59_jc">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_59_jc"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_60_jd">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_60_jd"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_61_je">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_61_je"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_62_jf">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_62_jf"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_63_jg">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_63_jg"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_64_jh">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_64_jh"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_65_ji">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_65_ji"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_66_jj">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_66_jj"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_67_jk">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_67_jk"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_68_jl">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_68_jl"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_69_jm">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_69_jm"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_70_jn">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_70_jn"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_71_jo">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_71_jo"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_72_jp">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_72_jp"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_73_jq">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_73_jq"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_74_jr">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_74_jr"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_75_js">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_75_js"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_76_jt">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_76_jt"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_77_ju">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_77_ju"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_78_jv">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_78_jv"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_79_jw">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_79_jw"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_80_jx">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_80_jx"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_81_jy">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_81_jy"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_82_jz">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_82_jz"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_83_j">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_83_j"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_84_j">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_84_j"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_85_j">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_85_j"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_86_j">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_86_j"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_87_j">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_87_j"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_88_j">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_88_j"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_89_j">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_89_j"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_90_j">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_90_j"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_91_j">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_91_j"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_92_j">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_92_j"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_93_ka">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_93_ka"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_94_kb">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_94_kb"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_95_kc">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_95_kc"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_96_kd">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_96_kd"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_97_ke">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_97_ke"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_98_kf">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_98_kf"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_99_kg">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_99_kg"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_100_kh">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_100_kh"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_101_ki">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_101_ki"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_102_kj">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_102_kj"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_103_kk">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_103_kk"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_104_kl">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_104_kl"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_105_km">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_105_km"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_106_kn">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_106_kn"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_107_ko">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_107_ko"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_108_kp">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_108_kp"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_109_kq">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_109_kq"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_110_kr">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_110_kr"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_111_ks">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_111_ks"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_112_kt">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_112_kt"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_113_ku">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_113_ku"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_114_kv">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_114_kv"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_115_kw">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_115_kw"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_116_kx">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_116_kx"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_117_ky">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_117_ky"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_118_kz">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_118_kz"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_119_k">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_119_k"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_120_k">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_120_k"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_121_k">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_121_k"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_122_k">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_122_k"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_123_k">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_123_k"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_124_k">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_124_k"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
      </div>
      <div id="Sou_restaurante__quero_me_cada">
        <span
          style={{
            fontSize: fontSizes.fsSpan,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          Sou restaurante, quero me cadastrar
        </span>
      </div>
      <div id="Grupo_1">
        <svg className="Elipse_4_k">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_4_k"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_5_k">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_5_k"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_6_la">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_6_la"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_7_lb">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_7_lb"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_8_lc">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_8_lc"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_9_ld">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_9_ld"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_10_le">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_10_le"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_11_lf">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_11_lf"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_12_lg">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_12_lg"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_13_lh">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_13_lh"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_14_li">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_14_li"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_15_lj">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_15_lj"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_16_lk">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_16_lk"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_17_ll">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_17_ll"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_18_lm">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_18_lm"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_19_ln">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_19_ln"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_20_lo">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_20_lo"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_21_lp">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_21_lp"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_22_lq">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_22_lq"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_23_lr">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_23_lr"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_24_ls">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_24_ls"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_25_lt">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_25_lt"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_26_lu">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_26_lu"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_27_lv">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_27_lv"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_28_lw">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_28_lw"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_29_lx">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_29_lx"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_30_ly">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_30_ly"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_31_lz">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_31_lz"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_32_l">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_32_l"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_33_l">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_33_l"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_34_l">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_34_l"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_35_l">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_35_l"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_36_l">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_36_l"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_37_l">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_37_l"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_38_l">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_38_l"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_39_l">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_39_l"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_40_l">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_40_l"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_41_l">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_41_l"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_42_ma">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_42_ma"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_43_mb">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_43_mb"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_44_mc">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_44_mc"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_45_md">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_45_md"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_46_me">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_46_me"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_47_mf">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_47_mf"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_48_mg">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_48_mg"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_49_mh">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_49_mh"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_50_mi">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_50_mi"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_51_mj">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_51_mj"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_52_mk">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_52_mk"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_53_ml">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_53_ml"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_54_mm">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_54_mm"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_55_mn">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_55_mn"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_56_mo">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_56_mo"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_57_mp">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_57_mp"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_58_mq">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_58_mq"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_59_mr">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_59_mr"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_60_ms">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_60_ms"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_61_mt">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_61_mt"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_62_mu">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_62_mu"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_63_mv">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_63_mv"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_64_mw">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_64_mw"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_65_mx">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_65_mx"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_66_my">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_66_my"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_67_mz">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_67_mz"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_68_m">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_68_m"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_69_m">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_69_m"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_70_m">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_70_m"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_71_m">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_71_m"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_72_m">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_72_m"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_73_m">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_73_m"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_74_m">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_74_m"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_75_m">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_75_m"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_76_m">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_76_m"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_77_m">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_77_m"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_78_na">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_78_na"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_79_nb">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_79_nb"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_80_nc">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_80_nc"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_81_nd">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_81_nd"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_82_ne">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_82_ne"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_83_nf">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_83_nf"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_84_ng">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_84_ng"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_85_nh">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_85_nh"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_86_ni">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_86_ni"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_87_nj">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_87_nj"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_88_nk">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_88_nk"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_89_nl">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_89_nl"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_90_nm">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_90_nm"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_91_nn">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_91_nn"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_92_no">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_92_no"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_93_np">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_93_np"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_94_nq">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_94_nq"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_95_nr">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_95_nr"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_96_ns">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_96_ns"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_97_nt">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_97_nt"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_98_nu">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_98_nu"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_99_nv">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_99_nv"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_100_nw">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_100_nw"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_101_nx">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_101_nx"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_102_ny">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_102_ny"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_103_nz">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_103_nz"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_104_n">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_104_n"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_105_n">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_105_n"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_106_n">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_106_n"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_107_n">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_107_n"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_108_n">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_108_n"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_109_n">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_109_n"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_110_n">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_110_n"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_111_n">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_111_n"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_112_n">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_112_n"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_113_n">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_113_n"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_114_oa">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_114_oa"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_115_ob">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_115_ob"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_116_oc">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_116_oc"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_117_od">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_117_od"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_118_oe">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_118_oe"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_119_of">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_119_of"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_120_og">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_120_og"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_121_oh">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_121_oh"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_122_oi">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_122_oi"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_123_oj">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_123_oj"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
        <svg className="Elipse_124_ok">
          <ellipse
            fill="rgba(49,46,42,1)"
            id="Elipse_124_ok"
            rx="2.900526523590088"
            ry="2.900526523590088"
            cx="2.900526523590088"
            cy="2.900526523590088"
          ></ellipse>
        </svg>
      </div>
      <div id="Grupo_9972">
        <div id="Grupo_9888">
          <div id="t_seguro">
            <span>tô</span>
            <span>seguro</span>
          </div>
        </div>
        <div id="Grupo_9894">
          <svg className="Icon_awesome_star" viewBox="1.441 -0.001 9.32 8.92">
            <path
              fill="rgba(255,193,7,1)"
              id="Icon_awesome_star"
              d="M 5.601349830627441 0.3094110488891602 L 4.463803768157959 2.615860462188721 L 1.918697714805603 2.986912965774536 C 1.462285757064819 3.053109407424927 1.279372930526733 3.615785360336304 1.610358357429504 3.938060760498047 L 3.451684474945068 5.732352733612061 L 3.016177177429199 8.267005920410156 C 2.937785863876343 8.725161552429199 3.420328617095947 9.068341255187988 3.8244788646698 8.854069709777832 L 6.101311206817627 7.657295227050781 L 8.378147125244141 8.854069709777832 C 8.782297134399414 9.066598892211914 9.264840126037598 8.725161552429199 9.18644905090332 8.267005920410156 L 8.750942230224609 5.732352733612061 L 10.5922679901123 3.938060760498047 C 10.92325115203857 3.615785360336304 10.7403392791748 3.053109407424927 10.28392791748047 2.986912965774536 L 7.738821983337402 2.615860462188721 L 6.601276397705078 0.3094110488891602 C 6.397459983825684 -0.1017082035541534 5.806910991668701 -0.1069343537092209 5.601350784301758 0.3094110488891602 Z"
            ></path>
          </svg>
          <svg
            className="Icon_awesome_star_oq"
            viewBox="1.441 -0.001 9.32 8.92"
          >
            <path
              fill="rgba(255,193,7,1)"
              id="Icon_awesome_star_oq"
              d="M 5.601349830627441 0.3094110488891602 L 4.463803768157959 2.615860462188721 L 1.918697714805603 2.986912965774536 C 1.462285757064819 3.053109407424927 1.279372930526733 3.615785360336304 1.610358357429504 3.938060760498047 L 3.451684474945068 5.732352733612061 L 3.016177177429199 8.267005920410156 C 2.937785863876343 8.725161552429199 3.420328617095947 9.068341255187988 3.8244788646698 8.854069709777832 L 6.101311206817627 7.657295227050781 L 8.378147125244141 8.854069709777832 C 8.782297134399414 9.066598892211914 9.264840126037598 8.725161552429199 9.18644905090332 8.267005920410156 L 8.750942230224609 5.732352733612061 L 10.5922679901123 3.938060760498047 C 10.92325115203857 3.615785360336304 10.7403392791748 3.053109407424927 10.28392791748047 2.986912965774536 L 7.738821983337402 2.615860462188721 L 6.601276397705078 0.3094110488891602 C 6.397459983825684 -0.1017082035541534 5.806910991668701 -0.1069343537092209 5.601350784301758 0.3094110488891602 Z"
            ></path>
          </svg>
        </div>
      </div>
      <div id="Agora_seguran_a_na_hora_de_vis">
        <span
          style={{
            fontSize: fontSizes.fsSpan,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          Agora segurança na hora de visitar um restaurante não é mais uma
          opção,
        </span>
        <span
          style={{
            fontSize: fontSizes.fsSpan,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          {" "}
          é uma necessidade
        </span>
        <span
          style={{
            fontSize: fontSizes.fsSpan,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          . Vamos te ajudar a escolher seu restaurante favorito e sentir
          segurança na hora de visitá-lo!
        </span>
      </div>
      <img
        id="nathan_dumlao_2z3MOB3kfJU_unsp"
        src={require("../../assets/nathan_dumlao_2z3MOB3kfJU_unsp.png")}
      />
      <img
        id="chad_montano_MqT0asuoIcU_unspl"
        src={require("../../assets/chad_montano_MqT0asuoIcU_unspl.png")}
      />
      <div id="Nesse_novo_mundo__p_s_covid__q">
        <span
          style={{
            fontSize: fontSizes.fsSpan,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          Nesse novo mundo, pós-covid,{" "}
        </span>
        <span
          style={{
            fontSize: fontSizes.fsSpan,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          queremos ir a um restaurante com nossa família, ou algum barzinho com
          os amigos de forma segura e sem aquele medo de se contaminar com o
          covid19, certo? <br />
          <br />
          Saber que não estaremos causando ou sendo vítimas de aglomerações em
          restaurantes faz toda diferença. Por isso, criamos o TôSeguro.{" "}
        </span>
        <span
          style={{
            fontSize: fontSizes.fsSpan,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          Restaurantes vão manter seus estabelecimentos seguramente abertos e os
          clientes se sentirão seguros ao frequentar.
        </span>
        <span
          style={{
            fontSize: fontSizes.fsSpan,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          {" "}
          Estamos aqui pra facilitar as suas reservas nos restaurantes da sua
          cidade!
        </span>
      </div>
      <svg
        className="Caminho_11"
        style={{ cursor: "pointer" }}
        onClick={handleSearch}
        viewBox="0 5.563 20.132 12.942"
      >
        <path
          fill="rgba(46,38,111,1)"
          id="Caminho_11"
          d="M 13.30126667022705 5.742248058319092 C 13.39114189147949 5.622416019439697 13.51097297668457 5.562500953674316 13.66076278686523 5.562501907348633 C 13.81055068969727 5.562501907348633 13.93038082122803 5.622416019439697 14.0202579498291 5.742248058319092 L 19.95190048217773 11.67389392852783 C 20.07173156738281 11.76376724243164 20.13165092468262 11.88360118865967 20.13164901733398 12.03339004516602 C 20.13164901733398 12.18317699432373 20.07173156738281 12.30300807952881 19.95190048217773 12.39288139343262 L 14.0202579498291 18.32452964782715 C 13.93038177490234 18.44436073303223 13.81055068969727 18.50427627563477 13.66076278686523 18.50427627563477 C 13.51097297668457 18.50427627563477 13.39114189147949 18.44436073303223 13.30126667022705 18.32452964782715 L 12.40253257751465 17.47073173522949 C 12.28270244598389 17.35090065002441 12.22278499603271 17.21609115600586 12.22278499603271 17.06629943847656 C 12.22278499603271 16.91651153564453 12.28270244598389 16.79668045043945 12.40253257751465 16.70680618286133 L 16.04240798950195 13.20174312591553 L 0.5392405986785889 13.20174312591553 C 0.3894518315792084 13.20174312591553 0.2621306180953979 13.14931488037109 0.1572785079479218 13.04446411132812 C 0.05242639407515526 12.93961334228516 -6.308829014756157e-09 12.81229019165039 -6.308829014756157e-09 12.66250133514404 L -6.308829014756157e-09 11.40427684783936 C -6.308829014756157e-09 11.25448703765869 0.05242639407515526 11.12716484069824 0.1572785079479218 11.02231311798096 C 0.2621306180953979 10.91746234893799 0.3894518315792084 10.86503410339355 0.5392405986785889 10.86503410339355 L 16.04240798950195 10.86503410339355 L 12.40253257751465 7.359970569610596 C 12.28270244598389 7.270096778869629 12.22278499603271 7.150265693664551 12.22278499603271 7.000476360321045 C 12.22278499603271 6.850688457489014 12.28270244598389 6.715878009796143 12.40253257751465 6.596046447753906 L 13.30126667022705 5.742248058319092 Z"
        ></path>
      </svg>
      <div id="Grupo_9890">
        <div id="Grupo_59">
          <div id="Grupo_57">
            <svg className="Elipse_4_oz">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_4_oz"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_5_o">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_5_o"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_6_o">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_6_o"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_7_o">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_7_o"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_8_o">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_8_o"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_9_o">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_9_o"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_10_o">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_10_o"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_11_o">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_11_o"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_12_o">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_12_o"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_13_o">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_13_o"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_14_o">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_14_o"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_15_pa">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_15_pa"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_16_pb">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_16_pb"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_17_pc">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_17_pc"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_18_pd">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_18_pd"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_19_pe">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_19_pe"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_20_pf">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_20_pf"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_21_pg">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_21_pg"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_22_ph">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_22_ph"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_23_pi">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_23_pi"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_24_pj">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_24_pj"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_25_pk">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_25_pk"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_26_pl">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_26_pl"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_27_pm">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_27_pm"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_28_pn">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_28_pn"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_29_po">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_29_po"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_30_pp">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_30_pp"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_31_pq">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_31_pq"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_32_pr">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_32_pr"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_33_ps">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_33_ps"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_34_pt">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_34_pt"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_35_pu">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_35_pu"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_36_pv">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_36_pv"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_37_pw">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_37_pw"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_38_px">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_38_px"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_39_py">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_39_py"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_40_pz">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_40_pz"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_41_p">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_41_p"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_42_p">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_42_p"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_43_p">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_43_p"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_44_p">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_44_p"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_45_p">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_45_p"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_46_p">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_46_p"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_47_p">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_47_p"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_48_p">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_48_p"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_49_p">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_49_p"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_50_p">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_50_p"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_51_qa">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_51_qa"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_52_qb">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_52_qb"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_53_qc">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_53_qc"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_54_qd">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_54_qd"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_55_qe">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_55_qe"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_56_qf">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_56_qf"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_57_qg">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_57_qg"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_58_qh">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_58_qh"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_59_qi">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_59_qi"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_60_qj">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_60_qj"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_61_qk">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_61_qk"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_62_ql">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_62_ql"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_63_qm">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_63_qm"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_64_qn">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_64_qn"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_65_qo">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_65_qo"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_66_qp">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_66_qp"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_67_qq">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_67_qq"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_68_qr">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_68_qr"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_69_qs">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_69_qs"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_70_qt">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_70_qt"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_71_qu">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_71_qu"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_72_qv">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_72_qv"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_73_qw">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_73_qw"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_74_qx">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_74_qx"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_75_qy">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_75_qy"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_76_qz">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_76_qz"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_77_q">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_77_q"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_78_q">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_78_q"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_79_q">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_79_q"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_80_q">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_80_q"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_81_q">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_81_q"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_82_q">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_82_q"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_83_q">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_83_q"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_84_q">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_84_q"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_85_q">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_85_q"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_86_q">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_86_q"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_87_ra">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_87_ra"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_88_rb">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_88_rb"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_89_rc">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_89_rc"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_90_rd">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_90_rd"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_91_re">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_91_re"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_92_rf">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_92_rf"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_93_rg">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_93_rg"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_94_rh">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_94_rh"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_95_ri">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_95_ri"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_96_rj">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_96_rj"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_97_rk">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_97_rk"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_98_rl">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_98_rl"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_99_rm">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_99_rm"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_100_rn">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_100_rn"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_101_ro">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_101_ro"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_102_rp">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_102_rp"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_103_rq">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_103_rq"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_104_rr">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_104_rr"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_105_rs">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_105_rs"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_106_rt">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_106_rt"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_107_ru">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_107_ru"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_108_rv">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_108_rv"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_109_rw">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_109_rw"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_110_rx">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_110_rx"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_111_ry">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_111_ry"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_112_rz">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_112_rz"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_113_r">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_113_r"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_114_r">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_114_r"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_115_r">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_115_r"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_116_r">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_116_r"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_117_r">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_117_r"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_118_r">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_118_r"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_119_r">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_119_r"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_120_r">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_120_r"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_121_r">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_121_r"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_122_r">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_122_r"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_123_sa">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_123_sa"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_124_sb">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_124_sb"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
          </div>
        </div>
        <div id="Grupo_61">
          <div id="Grupo_57_sd">
            <svg className="Elipse_4_se">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_4_se"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_5_sf">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_5_sf"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_6_sg">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_6_sg"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_7_sh">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_7_sh"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_8_si">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_8_si"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_9_sj">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_9_sj"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_10_sk">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_10_sk"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_11_sl">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_11_sl"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_12_sm">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_12_sm"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_13_sn">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_13_sn"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_14_so">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_14_so"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_15_sp">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_15_sp"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_16_sq">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_16_sq"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_17_sr">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_17_sr"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_18_ss">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_18_ss"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_19_st">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_19_st"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_20_su">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_20_su"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_21_sv">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_21_sv"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_22_sw">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_22_sw"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_23_sx">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_23_sx"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_24_sy">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_24_sy"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_25_sz">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_25_sz"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_26_s">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_26_s"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_27_s">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_27_s"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_28_s">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_28_s"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_29_s">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_29_s"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_30_s">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_30_s"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_31_s">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_31_s"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_32_s">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_32_s"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_33_s">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_33_s"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_34_s">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_34_s"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_35_s">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_35_s"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_36_ta">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_36_ta"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_37_tb">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_37_tb"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_38_tc">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_38_tc"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_39_td">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_39_td"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_40_te">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_40_te"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_41_tf">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_41_tf"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_42_tg">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_42_tg"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_43_th">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_43_th"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_44_ti">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_44_ti"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_45_tj">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_45_tj"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_46_tk">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_46_tk"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_47_tl">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_47_tl"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_48_tm">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_48_tm"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_49_tn">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_49_tn"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_50_to">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_50_to"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_51_tp">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_51_tp"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_52_tq">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_52_tq"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_53_tr">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_53_tr"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_54_ts">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_54_ts"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_55_tt">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_55_tt"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_56_tu">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_56_tu"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_57_tv">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_57_tv"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_58_tw">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_58_tw"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_59_tx">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_59_tx"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_60_ty">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_60_ty"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_61_tz">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_61_tz"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_62_t">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_62_t"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_63_t">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_63_t"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_64_t">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_64_t"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_65_t">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_65_t"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_66_t">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_66_t"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_67_t">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_67_t"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_68_t">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_68_t"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_69_t">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_69_t"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_70_t">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_70_t"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_71_t">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_71_t"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_72_ua">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_72_ua"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_73_ub">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_73_ub"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_74_uc">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_74_uc"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_75_ud">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_75_ud"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_76_ue">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_76_ue"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_77_uf">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_77_uf"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_78_ug">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_78_ug"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_79_uh">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_79_uh"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_80_ui">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_80_ui"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_81_uj">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_81_uj"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_82_uk">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_82_uk"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_83_ul">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_83_ul"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_84_um">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_84_um"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_85_un">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_85_un"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_86_uo">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_86_uo"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_87_up">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_87_up"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_88_uq">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_88_uq"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_89_ur">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_89_ur"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_90_us">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_90_us"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_91_ut">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_91_ut"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_92_uu">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_92_uu"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_93_uv">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_93_uv"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_94_uw">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_94_uw"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_95_ux">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_95_ux"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_96_uy">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_96_uy"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_97_uz">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_97_uz"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_98_u">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_98_u"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_99_u">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_99_u"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_100_u">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_100_u"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_101_u">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_101_u"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_102_u">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_102_u"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_103_u">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_103_u"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_104_u">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_104_u"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_105_u">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_105_u"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_106_u">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_106_u"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_107_u">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_107_u"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_108_va">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_108_va"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_109_vb">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_109_vb"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_110_vc">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_110_vc"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_111_vd">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_111_vd"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_112_ve">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_112_ve"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_113_vf">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_113_vf"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_114_vg">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_114_vg"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_115_vh">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_115_vh"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_116_vi">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_116_vi"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_117_vj">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_117_vj"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_118_vk">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_118_vk"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_119_vl">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_119_vl"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_120_vm">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_120_vm"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_121_vn">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_121_vn"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_122_vo">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_122_vo"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_123_vp">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_123_vp"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_124_vq">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_124_vq"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
          </div>
          <div id="Grupo_58">
            <svg className="Elipse_4_vs">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_4_vs"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_5_vt">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_5_vt"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_6_vu">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_6_vu"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_7_vv">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_7_vv"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_8_vw">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_8_vw"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_9_vx">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_9_vx"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_10_vy">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_10_vy"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_11_vz">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_11_vz"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_12_v">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_12_v"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_13_v">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_13_v"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_14_v">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_14_v"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_15_v">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_15_v"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_16_v">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_16_v"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_17_v">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_17_v"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_18_v">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_18_v"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_19_v">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_19_v"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_20_v">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_20_v"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_21_v">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_21_v"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_22_wa">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_22_wa"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_23_wb">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_23_wb"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_24_wc">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_24_wc"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_25_wd">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_25_wd"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_26_we">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_26_we"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_27_wf">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_27_wf"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_28_wg">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_28_wg"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_29_wh">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_29_wh"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_30_wi">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_30_wi"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_31_wj">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_31_wj"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_32_wk">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_32_wk"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_33_wl">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_33_wl"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_34_wm">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_34_wm"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_35_wn">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_35_wn"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_36_wo">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_36_wo"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_37_wp">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_37_wp"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_38_wq">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_38_wq"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_39_wr">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_39_wr"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_40_ws">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_40_ws"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_41_wt">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_41_wt"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_42_wu">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_42_wu"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_43_wv">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_43_wv"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_44_ww">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_44_ww"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_45_wx">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_45_wx"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_46_wy">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_46_wy"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_47_wz">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_47_wz"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_48_w">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_48_w"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_49_w">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_49_w"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_50_w">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_50_w"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_51_w">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_51_w"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_52_w">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_52_w"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_53_w">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_53_w"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_54_w">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_54_w"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_55_w">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_55_w"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_56_w">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_56_w"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_57_w">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_57_w"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_58_xa">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_58_xa"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_59_xb">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_59_xb"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_60_xc">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_60_xc"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_61_xd">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_61_xd"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_62_xe">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_62_xe"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_63_xf">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_63_xf"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_64_xg">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_64_xg"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_65_xh">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_65_xh"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_66_xi">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_66_xi"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_67_xj">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_67_xj"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_68_xk">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_68_xk"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_69_xl">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_69_xl"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_70_xm">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_70_xm"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_71_xn">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_71_xn"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_72_xo">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_72_xo"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_73_xp">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_73_xp"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_74_xq">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_74_xq"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_75_xr">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_75_xr"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_76_xs">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_76_xs"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_77_xt">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_77_xt"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_78_xu">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_78_xu"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_79_xv">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_79_xv"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_80_xw">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_80_xw"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_81_xx">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_81_xx"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_82_xy">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_82_xy"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_83_xz">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_83_xz"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_84_x">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_84_x"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_85_x">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_85_x"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_86_x">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_86_x"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_87_x">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_87_x"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_88_x">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_88_x"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_89_x">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_89_x"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_90_x">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_90_x"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_91_x">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_91_x"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_92_x">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_92_x"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_93_x">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_93_x"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_94_ya">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_94_ya"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_95_yb">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_95_yb"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_96_yc">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_96_yc"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_97_yd">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_97_yd"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_98_ye">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_98_ye"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_99_yf">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_99_yf"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_100_yg">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_100_yg"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_101_yh">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_101_yh"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_102_yi">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_102_yi"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_103_yj">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_103_yj"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_104_yk">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_104_yk"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_105_yl">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_105_yl"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_106_ym">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_106_ym"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_107_yn">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_107_yn"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_108_yo">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_108_yo"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_109_yp">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_109_yp"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_110_yq">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_110_yq"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_111_yr">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_111_yr"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_112_ys">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_112_ys"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_113_yt">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_113_yt"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_114_yu">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_114_yu"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_115_yv">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_115_yv"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_116_yw">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_116_yw"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_117_yx">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_117_yx"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_118_yy">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_118_yy"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_119_yz">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_119_yz"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_120_y">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_120_y"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_121_y">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_121_y"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_122_y">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_122_y"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_123_y">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_123_y"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
            <svg className="Elipse_124_y">
              <ellipse
                fill="rgba(46,38,111,1)"
                id="Elipse_124_y"
                rx="2.900526523590088"
                ry="2.900526523590088"
                cx="2.900526523590088"
                cy="2.900526523590088"
              ></ellipse>
            </svg>
          </div>
        </div>
      </div>
      <div id="Como_Funciona">
        <span
          style={{
            fontSize: fontSizes.fsTitle,
            color: darkTheme ? "#fff" : "#2558e6",
          }}
        >
          Como Funciona
        </span>
      </div>
      <div id="Analise_e_escolha_o_restaurant">
        <span
          style={{
            fontSize: fontSizes.fsSpan,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          Analise e escolha o restaurante mais seguro para você seus amigos.
        </span>
      </div>
      <div id="Voc__ter__acesso_a_v_rios_rest">
        <span
          style={{
            fontSize: fontSizes.fsSpan,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          Você terá acesso a vários restaurantes e dados de segurança de cada
          região.
        </span>
      </div>
      <svg className="Ret_ngulo_2314">
        <rect
          fill="rgba(247,247,253,1)"
          id="Ret_ngulo_2314"
          rx="241.5"
          ry="241.5"
          x="0"
          y="0"
          width="513"
          height="483"
        ></rect>
      </svg>
      <svg className="Ret_ngulo_2315">
        <rect
          fill="rgba(247,247,253,1)"
          id="Ret_ngulo_2315"
          rx="127.5"
          ry="127.5"
          x="0"
          y="0"
          width="269"
          height="255"
        ></rect>
      </svg>
      <svg className="Ret_ngulo_2316">
        <rect
          fill="rgba(247,247,253,1)"
          id="Ret_ngulo_2316"
          rx="120.5"
          ry="120.5"
          x="0"
          y="0"
          width="258"
          height="241"
        ></rect>
      </svg>
      <div id="Voc__pode_filtrar_por__todo_ti">
        <span
          style={{
            fontSize: fontSizes.fsTitle / 2,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          Você pode filtrar por <br />
          todo tipo de restaurante{" "}
        </span>
      </div>
      <div id="Primeiro_voc___escolhe_a_cidad">
        <span
          style={{
            fontSize: fontSizes.fsTitle / 2,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          Primeiro você <br />
          escolhe a cidade
        </span>
      </div>
      <div id="Depois_de_escolhido___s__garan">
        <span style={{ fontSize: fontSizes.fsTitle / 2 }}>
          Depois de escolhido é só
          <br />
          garantir sua reserva!
        </span>
      </div>
      <div id="Fique_atento_a_promo__es_para_">
        <span>
          Fique atento a promoções para horários menos aglomerados e menos
          concorridos.
        </span>
      </div>
      <div id="Os_restaurantes_da__sua_cidade">
        <span
          style={{
            fontSize: fontSizes.fsTitle,
            color: darkTheme ? "#fff" : "#2558e6",
          }}
        >
          Os restaurantes da <br />
          sua cidade estão aqui
        </span>
      </div>
      <div id="Ainda_n_o_tem_cadastro__N_o_pe">
        <span
          style={{
            fontSize: fontSizes.fsSpan,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          Ainda não tem cadastro? Não perca tempo, ele é gratuito e te dá acesso
          a algumas promoções para poder fomentar a volta dos clientes pro seu
          negócio!
        </span>
      </div>
      <div id="Sou_restaurante">
        <span
          style={{
            fontSize: fontSizes.fsTitle,
            color: darkTheme ? "#fff" : "#41414d",
          }}
        >
          Sou restaurante
        </span>
      </div>
      <div id="Grupo_9892">
        <svg className="Ret_ngulo_2_zj">
          <rect
            fill="rgba(255,193,7,1)"
            id="Ret_ngulo_2_zj"
            rx="10"
            ry="10"
            x="0"
            y="0"
            width="203"
            height="45"
          ></rect>
        </svg>
        <div id="_Quero_me_cadastrar">
          <span> Quero me cadastrar</span>
        </div>
      </div>
      <div id="Grupo_9895">
        <div id="g10">
          <svg className="path68" viewBox="92.623 -489.116 108.894 58.859">
            <path
              fill="rgba(29,102,196,1)"
              id="path68"
              d="M 160.7556915283203 -450.3660583496094 L 172.2505187988281 -468.9467163085938 L 178.6547088623047 -468.9467163085938 L 182.1194763183594 -450.3637390136719 L 176.1876373291016 -450.3637390136719 L 175.6887817382812 -454.0958862304688 L 168.1036376953125 -454.0958862304688 L 166.0037536621094 -450.3637390136719 L 160.7559204101562 -450.3637390136719 L 160.7542419433594 -450.3637390136719 L 155.0602569580078 -450.3637390136719 C 155.0252990722656 -451.0535888671875 155.1215362548828 -452.458984375 155.3488616943359 -454.5798950195312 C 155.4189910888672 -455.3214111328125 155.4539794921875 -455.8302612304688 155.4539794921875 -456.1060791015625 C 155.4539794921875 -456.6751403808594 155.3096008300781 -457.075927734375 155.02099609375 -457.3088073730469 C 154.7321319580078 -457.5416259765625 154.1679229736328 -457.6579895019531 153.327880859375 -457.6579895019531 L 151.1233825683594 -457.6579895019531 L 149.5484008789062 -450.3637390136719 L 144.2726593017578 -450.3637390136719 L 148.2886352539062 -469.0390319824219 L 157.0550231933594 -469.0390319824219 C 158.5600433349609 -469.0390319824219 159.5572509765625 -469.0045471191406 160.0472564697266 -468.935546875 C 161.2371368408203 -468.76318359375 162.0857849121094 -468.349365234375 162.5930938720703 -467.6939697265625 C 163.0656585693359 -467.1076049804688 163.3019409179688 -466.3747863769531 163.3019409179688 -465.4954528808594 C 163.3019409179688 -465.0469970703125 163.2493896484375 -464.5729675292969 163.1443481445312 -464.0729064941406 C 162.7944641113281 -462.4692077636719 161.9633331298828 -461.3137817382812 160.6509552001953 -460.6067504882812 C 159.7935638427734 -460.1409912109375 158.7610931396484 -459.822021484375 157.5538635253906 -459.6497192382812 L 157.5276031494141 -459.5462341308594 C 158.8922424316406 -459.5117492675781 159.8198089599609 -459.2445983886719 160.3097991943359 -458.7443542480469 C 160.7297821044922 -458.3305358886719 160.9395751953125 -457.6321105957031 160.9395751953125 -456.6492919921875 C 160.9395751953125 -456.3215942382812 160.9132690429688 -455.7610473632812 160.8609619140625 -454.9678955078125 C 160.7035217285156 -452.6593627929688 160.6685333251953 -451.1255798339844 160.7555999755859 -450.3660583496094 Z M 122.117546081543 -430.2564697265625 L 156.5221710205078 -430.2564697265625 L 157.8023223876953 -436.6213684082031 L 123.3977203369141 -436.6213684082031 L 122.117546081543 -430.2564697265625 Z M 124.2194442749023 -440.1336975097656 L 158.6240539550781 -440.1336975097656 L 159.9042205810547 -446.4985961914062 L 125.4996032714844 -446.4985961914062 L 124.2194442749023 -440.1336975097656 Z M 131.1032867431641 -472.8737487792969 L 165.5076751708984 -472.8737487792969 L 166.7880859375 -479.2388916015625 L 132.3834686279297 -479.2388916015625 L 131.1032867431641 -472.8737487792969 Z M 133.2051849365234 -482.7509460449219 L 167.6095581054688 -482.7509460449219 L 168.8899841308594 -489.1157836914062 L 134.4853668212891 -489.1157836914062 L 133.2051849365234 -482.7509460449219 Z M 183.2756042480469 -450.3637084960938 L 187.2913055419922 -469.0330810546875 L 201.5171661376953 -469.0330810546875 L 200.7559814453125 -465.4547119140625 L 191.7270355224609 -465.4547119140625 L 190.8872375488281 -461.5653686523438 L 199.3912506103516 -461.5653686523438 L 198.6037902832031 -457.9870910644531 L 190.0997924804688 -457.9870910644531 L 189.2599334716797 -453.9938659667969 L 198.4986877441406 -453.9938659667969 L 197.7114410400391 -450.3637390136719 L 183.2756042480469 -450.3637084960938 Z M 109.8675003051758 -450.3637084960938 L 113.8832092285156 -469.0330810546875 L 128.1088256835938 -469.0330810546875 L 127.34765625 -465.4547119140625 L 118.3186874389648 -465.4547119140625 L 117.4789123535156 -461.5653686523438 L 125.9829025268555 -461.5653686523438 L 125.1954574584961 -457.9870910644531 L 116.6914596557617 -457.9870910644531 L 115.8516082763672 -453.9938659667969 L 125.0905609130859 -453.9938659667969 L 124.3031005859375 -450.3637390136719 L 109.8675003051758 -450.3637084960938 Z M 92.80413818359375 -456.4493713378906 L 98.00127410888672 -456.4493713378906 C 97.93225860595703 -456.1195373535156 97.89776611328125 -455.8473815917969 97.89776611328125 -455.633056640625 C 97.89776611328125 -454.330078125 98.77687072753906 -453.6788330078125 100.5350189208984 -453.6788330078125 C 102.3794326782227 -453.6788330078125 103.4568481445312 -454.35498046875 103.7669906616211 -455.7073974609375 C 103.8014984130859 -455.8720703125 103.8185729980469 -456.0288696289062 103.8185729980469 -456.177490234375 C 103.8185729980469 -456.7875671386719 103.3878555297852 -457.2080078125 102.5259094238281 -457.4390869140625 L 98.20803833007812 -458.5767822265625 C 95.76039886474609 -459.2201232910156 94.53647613525391 -460.46533203125 94.53647613525391 -462.3123474121094 C 94.53647613525391 -462.6753234863281 94.57945251464844 -463.0626220703125 94.66580200195312 -463.47509765625 C 95.02783966064453 -465.0582580566406 95.93275451660156 -466.3529968261719 97.380615234375 -467.3590393066406 C 99.01815795898438 -468.4969482421875 101.1470565795898 -469.06591796875 103.7669906616211 -469.06591796875 C 108.1454010009766 -469.06591796875 110.3345718383789 -467.7135925292969 110.3345718383789 -465.0088806152344 C 110.3345718383789 -464.5634765625 110.2655792236328 -464.0191955566406 110.1277313232422 -463.3761901855469 L 104.8789138793945 -463.3761901855469 C 104.9651031494141 -463.7059020996094 105.0080642700195 -463.9862976074219 105.0080642700195 -464.2173767089844 C 105.0080642700195 -465.3056945800781 104.3359832763672 -465.8499145507812 102.9913711547852 -465.8499145507812 C 102.2500381469727 -465.8499145507812 101.6122894287109 -465.6727600097656 101.0780563354492 -465.3180541992188 C 100.5437316894531 -464.9634094238281 100.2247314453125 -464.51416015625 100.1214599609375 -463.9698486328125 C 100.0869598388672 -463.8212585449219 100.0695495605469 -463.6812133789062 100.0695495605469 -463.5491333007812 C 100.0695495605469 -462.8731079101562 100.5782241821289 -462.4031982421875 101.5951232910156 -462.1392211914062 L 104.8789138793945 -461.2733154296875 C 106.309684753418 -460.8940124511719 107.3092346191406 -460.5146484375 107.8779983520508 -460.1353759765625 C 108.8435211181641 -459.5087585449219 109.3260879516602 -458.6017150878906 109.3260879516602 -457.4141540527344 C 109.3260879516602 -457.0183410644531 109.2744903564453 -456.5896301269531 109.1709747314453 -456.1277770996094 C 108.7573318481445 -454.2146911621094 107.6453094482422 -452.7551574707031 105.8355026245117 -451.7492370605469 C 104.180778503418 -450.8255004882812 102.120964050293 -450.3637084960938 99.65599060058594 -450.3637084960938 C 96.46698760986328 -450.3637084960938 94.36396789550781 -451.0729675292969 93.34707641601562 -452.4911804199219 C 92.86444091796875 -453.1509094238281 92.62315368652344 -453.9591979980469 92.62315368652344 -454.9155883789062 C 92.62315368652344 -455.3113098144531 92.68345642089844 -455.8226928710938 92.80413055419922 -456.4493713378906 Z M 126.333740234375 -450.3637084960938 L 130.3318786621094 -469.0935974121094 L 140.5854034423828 -469.0935974121094 C 140.9126129150391 -469.0671691894531 141.1925964355469 -469.0340270996094 141.4256439208984 -468.9944763183594 C 142.6329498291016 -468.7686767578125 143.5515899658203 -468.3171997070312 144.1815795898438 -467.6396484375 C 144.7590484619141 -467.01416015625 145.0476226806641 -466.2586669921875 145.0476226806641 -465.3727416992188 C 145.0476226806641 -465.0600891113281 145.0127258300781 -464.7385864257812 144.9427642822266 -464.4085693359375 C 144.4701690673828 -462.2372741699219 142.8168182373047 -460.8125915527344 139.9821472167969 -460.1351623535156 L 139.9558410644531 -460.0829772949219 C 142.4231109619141 -459.6314697265625 143.6566772460938 -458.4674377441406 143.6566772460938 -456.5915222167969 C 143.6566772460938 -455.4103088378906 143.3241271972656 -454.337646484375 142.6592254638672 -453.373291015625 C 141.9944610595703 -452.4091491699219 141.1061553955078 -451.6666870117188 139.9951019287109 -451.1455078125 C 138.8840484619141 -450.62451171875 137.1213073730469 -450.3637390136719 134.706298828125 -450.3637390136719 L 126.333740234375 -450.3637084960938 Z M 134.7326049804688 -465.7634582519531 L 133.8402709960938 -461.5944213867188 L 136.3076019287109 -461.5944213867188 C 137.2349243164062 -461.5944213867188 137.8649139404297 -461.6725769042969 138.1974029541016 -461.8288879394531 C 138.9322509765625 -462.1935119628906 139.3870239257812 -462.8016357421875 139.5621337890625 -463.65283203125 C 139.7195739746094 -464.3825073242188 139.5970458984375 -464.9382629394531 139.1945953369141 -465.3206481933594 C 138.8797302246094 -465.6158142089844 138.3461303710938 -465.7634582519531 137.5936737060547 -465.7634582519531 L 134.7326049804688 -465.7634582519531 Z M 133.1316680908203 -458.2589721679688 L 132.1869201660156 -453.8033447265625 L 135.1000671386719 -453.8033447265625 C 136.9023742675781 -453.8033447265625 137.9610900878906 -454.532958984375 138.2760009765625 -455.9920959472656 C 138.3285522460938 -456.2178344726562 138.3548278808594 -456.4264526367188 138.3548278808594 -456.6175537109375 C 138.3548278808594 -457.7118835449219 137.5324096679688 -458.2589721679688 135.8875274658203 -458.2589721679688 L 133.1316680908203 -458.2589721679688 Z M 170.0721282958984 -457.5190734863281 L 175.2164459228516 -457.5190734863281 L 174.4552764892578 -465.317626953125 L 174.3766784667969 -465.317626953125 L 170.0721282958984 -457.5190734863281 Z M 152.8293151855469 -465.5989379882812 L 151.8581085205078 -461.0205993652344 L 153.8268585205078 -461.0205993652344 C 154.9465026855469 -461.0205993652344 155.6815185546875 -461.0722961425781 156.0315093994141 -461.1757507324219 C 157.02880859375 -461.4690246582031 157.6414184570312 -462.1759643554688 157.8688659667969 -463.2968444824219 C 157.9211578369141 -463.5381774902344 157.9474334716797 -463.753662109375 157.9474334716797 -463.9433288574219 C 157.9474334716797 -464.667724609375 157.5975799560547 -465.150634765625 156.8976593017578 -465.3919372558594 C 156.4778137207031 -465.5298767089844 155.7776794433594 -465.5989379882812 154.7980194091797 -465.5989379882812 L 152.8293151855469 -465.5989379882812 Z"
            ></path>
          </svg>
        </div>
        <img
          id="logo_mctic_horizontal_cor_grad"
          src={require("../../assets/logo_mctic_horizontal_cor_grad.png")}
        />
      </div>
      <svg className="Ret_ngulo_2_zp" style={{ cursor: "pointer" }} onClick={handleNavigateToRegister}>
        <rect
          fill="transparent"
          stroke="rgba(37,88,230,1)"
          stroke-width="2px"
          stroke-linejoin="miter"
          stroke-linecap="butt"
          stroke-miterlimit="4"
          shape-rendering="auto"
          id="Ret_ngulo_2_zp"
          rx="10"
          ry="10"
          x="0"
          y="0"
          width="208"
          height="36"
        ></rect>
      </svg>
      <img
        id="mae_mu_I7A_pHLcQK8_unsplash"
        src={require("../../assets/mae_mu_I7A_pHLcQK8_unsplash.png")}
      />
      <img id="elevate_snnhGYNqm44_unsplash" src={img1} />
      <div id="ID2944348">
        <svg className="Caminho_18910" viewBox="47.711 0 27.958 120.161">
          <path
            fill="rgba(37,88,230,1)"
            id="Caminho_18910"
            d="M 73.90818786621094 -1.16760147648165e-05 C 72.93540954589844 -1.16760147648165e-05 72.14718627929688 0.7884490489959717 72.14718627929688 1.760993480682373 L 72.14718627929688 26.41576957702637 L 67.49226379394531 26.41576957702637 L 67.49226379394531 1.760993480682373 C 67.49226379394531 0.7884489893913269 66.70404052734375 -1.16760147648165e-05 65.73126220703125 -1.16760147648165e-05 C 64.75848388671875 -1.16760147648165e-05 63.97025299072266 0.7884490489959717 63.97025299072266 1.760993480682373 L 63.97025299072266 26.41576957702637 L 59.41911315917969 26.41576957702637 L 59.41911315917969 1.760993480682373 C 59.41911315917969 0.7884489893913269 58.63088607788086 -1.16760147648165e-05 57.65811157226562 -1.16760147648165e-05 C 56.68532943725586 -1.16760147648165e-05 55.8971061706543 0.7884490489959717 55.8971061706543 1.760993480682373 L 55.8971061706543 26.41576957702637 L 51.23302459716797 26.41576957702637 L 51.23302459716797 1.760993480682373 C 51.23302459716797 0.7884489893913269 50.44479751586914 -1.16760147648165e-05 49.47201919555664 -1.16760147648165e-05 C 48.49924087524414 -1.16760147648165e-05 47.71101379394531 0.7884490489959717 47.71101379394531 1.760993480682373 L 47.71101379394531 38.01609802246094 C 47.71101379394531 41.76163482666016 49.7293586730957 45.2460823059082 52.97806167602539 47.10969543457031 L 55.8971061706543 48.78429412841797 L 55.8971061706543 59.58465957641602 C 54.72098922729492 60.95965194702148 54.05908584594727 62.72981262207031 54.05908584594727 64.55092620849609 L 54.05908584594727 66.35395812988281 C 54.05908584594727 67.44648742675781 54.43758392333984 68.45213317871094 55.06990051269531 69.2469482421875 C 54.43734741210938 70.041748046875 54.05908584594727 71.04739379882812 54.05908584594727 72.13992309570312 L 54.05908584594727 99.68814849853516 C 54.05908584594727 100.6606903076172 54.84730911254883 101.4491500854492 55.82008743286133 101.4491500854492 C 56.79286956787109 101.4491500854492 57.58109664916992 100.6606903076172 57.58109664916992 99.68814849853516 L 57.58109664916992 72.13968658447266 C 57.58109664916992 71.51559448242188 58.08897018432617 71.00771331787109 58.71306991577148 71.00771331787109 L 64.66714477539062 71.00771331787109 C 65.29124450683594 71.00771331787109 65.79888916015625 71.51557922363281 65.79888916015625 72.13968658447266 L 65.79888916015625 112.5296325683594 C 65.79888916015625 114.7952117919922 63.95546722412109 116.6386413574219 61.68987274169922 116.6386413574219 C 59.42428207397461 116.6386413574219 57.58086013793945 114.7952117919922 57.58086013793945 112.5296325683594 L 57.58086013793945 107.8873901367188 C 57.58086013793945 106.9148406982422 56.79263305664062 106.1263809204102 55.81985473632812 106.1263809204102 C 54.84707641601562 106.1263809204102 54.05885314941406 106.9148406982422 54.05885314941406 107.8873901367188 L 54.05885314941406 112.5296325683594 C 54.05885314941406 116.7372512817383 57.48200988769531 120.1606521606445 61.68987274169922 120.1606521606445 C 65.89773559570312 120.1606521606445 69.32089233398438 116.7372512817383 69.32089233398438 112.5296325683594 L 69.32089233398438 72.13968658447266 C 69.32089233398438 71.04716491699219 68.94239044189453 70.04151153564453 68.31007385253906 69.24671173095703 C 68.94263458251953 68.45189666748047 69.32089233398438 67.44625091552734 69.32089233398438 66.35372161865234 L 69.32089233398438 64.55068969726562 C 69.32089233398438 62.73473739624023 68.66203308105469 60.96833419799805 67.49203491210938 59.5949821472168 L 67.49203491210938 48.78358459472656 L 70.4063720703125 47.10992431640625 C 73.65225219726562 45.24560546875 75.66873168945312 41.76210021972656 75.66873168945312 38.0189094543457 L 75.66920471191406 1.760990023612976 C 75.66920471191406 0.7884454131126404 74.8807373046875 -1.52587890625e-05 73.90818786621094 -1.52587890625e-05 Z M 72.14694976806641 38.01891326904297 C 72.14694976806641 40.50451278686523 70.80787658691406 42.81777191162109 68.65242004394531 44.05564117431641 L 64.85404205322266 46.23717498779297 C 64.30718994140625 46.55133819580078 63.97002029418945 47.13364028930664 63.97002029418945 47.76431655883789 L 63.97002029418945 60.29304885864258 C 63.97002029418945 60.77603530883789 64.16842651367188 61.23765563964844 64.51850891113281 61.57012939453125 C 65.34430694580078 62.35412216186523 65.79888916015625 63.41261291503906 65.79888916015625 64.55068969726562 L 65.79888916015625 66.35372161865234 C 65.79888916015625 66.97782135009766 65.29124450683594 67.48569488525391 64.66714477539062 67.48569488525391 L 58.71306610107422 67.48569488525391 C 58.08896636962891 67.48569488525391 57.58109283447266 66.97782897949219 57.58109283447266 66.35372161865234 L 57.58109283447266 64.55068969726562 C 57.58109283447266 63.40956115722656 58.03801345825195 62.34896087646484 58.86780166625977 61.56425857543945 C 59.21976852416992 61.23154830932617 59.41911315917969 60.76875305175781 59.41911315917969 60.28459548950195 L 59.41911315917969 47.76431655883789 C 59.41911315917969 47.13340377807617 59.08147048950195 46.55086517333984 58.53438568115234 46.23693466186523 L 54.73061370849609 44.05469512939453 C 52.57326507568359 42.81729507446289 51.23302459716797 40.50333404541016 51.23302459716797 38.01632690429688 L 51.23302459716797 29.93800926208496 L 72.14672088623047 29.93800926208496 L 72.14672088623047 38.0189094543457 Z"
          ></path>
        </svg>
        <svg className="Caminho_18913" viewBox="381.822 0 19.306 120.161">
          <path
            fill="rgba(37,88,230,1)"
            id="Caminho_18913"
            d="M 401.1277465820312 73.94240570068359 C 401.1277465820312 72.126220703125 400.4689331054688 70.36005401611328 399.2986450195312 68.98670196533203 L 399.2986450195312 25.23910713195801 C 399.2986450195312 24.26656532287598 398.5104370117188 23.47810363769531 397.5376586914062 23.47810363769531 C 396.5648803710938 23.47810363769531 395.7766723632812 24.26656532287598 395.7766723632812 25.23910713195801 L 395.7766723632812 69.68476104736328 C 395.7766723632812 70.16775512695312 395.9750366210938 70.62937164306641 396.3253784179688 70.96184539794922 C 397.1511840820312 71.74561309814453 397.6057739257812 72.80409240722656 397.6057739257812 73.94216918945312 L 397.6057739257812 75.74520111083984 C 397.6057739257812 76.36930084228516 397.0980834960938 76.87718200683594 396.4739990234375 76.87718200683594 L 390.5199584960938 76.87718200683594 C 389.8958740234375 76.87718200683594 389.387939453125 76.36930084228516 389.387939453125 75.74520111083984 L 389.387939453125 73.94216918945312 C 389.387939453125 72.80104064941406 389.8449096679688 71.74044036865234 390.6746826171875 70.95574188232422 C 391.026611328125 70.62303161621094 391.2260131835938 70.16024017333984 391.2260131835938 69.67607116699219 L 391.2260131835938 61.38009262084961 C 391.2260131835938 60.40754699707031 390.437744140625 59.61908721923828 389.4649658203125 59.61908721923828 L 385.34375 59.61908721923828 L 385.34375 18.2601203918457 C 385.34375 11.63756561279297 389.6227416992188 5.934023857116699 395.7769165039062 3.991047859191895 L 395.7769165039062 17.19553375244141 C 395.7769165039062 18.16807746887207 396.5651245117188 18.95653915405273 397.5379028320312 18.95653915405273 C 398.5106811523438 18.95653915405273 399.2988891601562 18.16807746887207 399.2988891601562 17.19553375244141 L 399.2988891601562 1.760676980018616 C 399.2988891601562 1.242471933364868 399.0706787109375 0.750799298286438 398.67529296875 0.415973424911499 C 398.2794189453125 0.08138247579336166 397.7562255859375 -0.0620807558298111 397.2457885742188 0.02409109100699425 C 388.30859375 1.527754664421082 381.8219604492188 9.197050094604492 381.8219604492188 18.2601203918457 L 381.8219604492188 61.38056564331055 C 381.8219604492188 62.35311126708984 382.6102294921875 63.14156723022461 383.5829467773438 63.14156723022461 L 387.7042236328125 63.14156723022461 L 387.7042236328125 68.97637176513672 C 386.528076171875 70.35136413574219 385.8661499023438 72.12152862548828 385.8661499023438 73.94264221191406 L 385.8661499023438 75.74567413330078 C 385.8661499023438 76.83820343017578 386.2446899414062 77.84385681152344 386.8770141601562 78.63865661621094 C 386.2444458007812 79.43345642089844 385.8661499023438 80.43910217285156 385.8661499023438 81.53163909912109 L 385.8661499023438 112.5295639038086 C 385.8661499023438 116.7371978759766 389.289306640625 120.1605834960938 393.4971923828125 120.1605834960938 C 397.705078125 120.1605834960938 401.1282348632812 116.7371978759766 401.1282348632812 112.5295639038086 L 401.1282348632812 81.53141021728516 C 401.1282348632812 80.43887329101562 400.749755859375 79.4332275390625 400.117431640625 78.638427734375 C 400.7499389648438 77.84362030029297 401.1282348632812 76.83797454833984 401.1282348632812 75.74544525146484 L 401.1282348632812 73.94241333007812 Z M 397.6057739257812 112.5293197631836 C 397.6057739257812 114.7948989868164 395.7623291015625 116.6383285522461 393.4967651367188 116.6383285522461 C 391.2311401367188 116.6383285522461 389.3877563476562 114.7948989868164 389.3877563476562 112.5293197631836 L 389.3877563476562 81.53139495849609 C 389.3877563476562 80.90729522705078 389.8953857421875 80.3994140625 390.5194702148438 80.3994140625 L 396.4737548828125 80.3994140625 C 397.0978393554688 80.3994140625 397.6055297851562 80.90729522705078 397.6055297851562 81.53139495849609 L 397.6055297851562 112.5293197631836 Z"
          ></path>
        </svg>
      </div>
      <div id="ID3003388">
        <div id="Grupo_9974">
          <svg
            className="Caminho_18914"
            viewBox="422.248 227.287 15.627 15.627"
          >
            <path
              fill="rgba(37,88,230,1)"
              id="Caminho_18914"
              d="M 422.248046875 234.2759094238281 C 422.248046875 238.1298217773438 425.3832397460938 241.2650756835938 429.2371215820312 241.2650756835938 C 430.4228515625 241.2650756835938 431.5399169921875 240.9673461914062 432.51904296875 240.4443054199219 L 434.391357421875 242.3165893554688 C 434.7897338867188 242.7149658203125 435.3121948242188 242.9144592285156 435.8344116210938 242.9144592285156 C 436.356689453125 242.9144592285156 436.879150390625 242.7152404785156 437.2775268554688 242.3165893554688 C 438.0746459960938 241.51953125 438.0746459960938 240.2271423339844 437.2775268554688 239.4303588867188 L 435.4052734375 237.55810546875 C 435.9283447265625 236.5789794921875 436.2260131835938 235.4618530273438 436.2260131835938 234.2761840820312 C 436.2260131835938 230.4222717285156 433.0908203125 227.2870483398438 429.2368774414062 227.2870483398438 C 425.3829345703125 227.2870483398438 422.248046875 230.4222717285156 422.248046875 234.2759094238281 Z M 432.144287109375 234.2759094238281 C 432.144287109375 235.0367736816406 431.8482055664062 235.728271484375 431.3679809570312 236.2469482421875 C 431.3399047851562 236.2720031738281 431.31103515625 236.2959289550781 431.2841186523438 236.3228759765625 C 431.2572021484375 236.3498229980469 431.2335205078125 236.378662109375 431.2081909179688 236.406982421875 C 430.6895141601562 236.8870239257812 429.998046875 237.183349609375 429.2371215820312 237.183349609375 C 427.634033203125 237.183349609375 426.3299560546875 235.8793334960938 426.3299560546875 234.2761840820312 C 426.3299560546875 232.6730651855469 427.634033203125 231.3690185546875 429.2371215820312 231.3690185546875 C 430.8402709960938 231.3690185546875 432.144287109375 232.6730651855469 432.144287109375 234.2759094238281 Z"
            ></path>
          </svg>
          <svg className="Caminho_18915" viewBox="0 56.571 139.331 108.541">
            <path
              fill="rgba(37,88,230,1)"
              id="Caminho_18915"
              d="M 137.2902221679688 94.23078155517578 L 131.7033538818359 94.23078155517578 C 130.5762023925781 94.23078155517578 129.6623687744141 95.14459228515625 129.6623687744141 96.27176666259766 C 129.6623687744141 97.39892578125 130.5762023925781 98.31275177001953 131.7033538818359 98.31275177001953 L 135.2492370605469 98.31275177001953 L 135.2492370605469 123.3705978393555 L 119.8082275390625 123.3705978393555 C 119.8019638061523 123.3705978393555 119.7957153320312 123.3705978393555 119.7894515991211 123.3705978393555 L 110.1913833618164 123.3705978393555 L 110.1913833618164 98.31275177001953 L 119.8280868530273 98.31275177001953 C 119.8302688598633 98.31275177001953 119.8324432373047 98.31330108642578 119.8346252441406 98.31330108642578 C 119.8370666503906 98.31330108642578 119.8397903442383 98.31275177001953 119.8422470092773 98.31275177001953 L 122.1787643432617 98.31275177001953 C 123.3059310913086 98.31275177001953 124.2197494506836 97.39892578125 124.2197494506836 96.27176666259766 C 124.2197494506836 95.14459228515625 123.3059310913086 94.23078155517578 122.1787643432617 94.23078155517578 L 121.3427734375 94.23078155517578 C 117.9868545532227 83.80597686767578 111.3963851928711 74.44602203369141 102.6571578979492 67.74614715576172 C 93.21311187744141 60.50582885742188 81.91777038574219 56.64265441894531 69.99215698242188 56.57353973388672 C 69.76030731201172 56.56809234619141 69.99297332763672 56.57353973388672 69.33931732177734 56.57353973388672 C 59.61116790771484 56.63176727294922 50.08412551879883 59.29267120361328 41.78657531738281 64.26859283447266 C 40.81996536254883 64.84822845458984 40.50619506835938 66.10193634033203 41.08583831787109 67.06881713867188 C 41.66547775268555 68.03543090820312 42.91891479492188 68.34947204589844 43.88606643676758 67.76955413818359 C 47.70053100585938 65.48202514648438 51.79692459106445 63.72486877441406 56.05767822265625 62.52857971191406 C 51.96318817138672 66.37515258789062 48.42031478881836 71.94812774658203 45.71805191040039 78.83713531494141 L 31.0096378326416 78.83713531494141 C 32.68405914306641 76.81929016113281 34.5165901184082 74.92034912109375 36.50777435302734 73.1680908203125 C 37.35410308837891 72.42327880859375 37.43628692626953 71.13364410400391 36.69173431396484 70.28759002685547 C 35.94718170166016 69.4415283203125 34.65728378295898 69.35880279541016 33.81122589111328 70.10362243652344 C 26.42177772521973 76.60647583007812 20.97452735900879 84.92307281494141 17.9870719909668 94.23078155517578 L 2.040999412536621 94.23078155517578 C 0.913831889629364 94.23078155517578 1.52587890625e-05 95.14459228515625 1.52587890625e-05 96.27176666259766 L 1.52587890625e-05 125.4115829467773 C 1.52587890625e-05 126.5387344360352 0.913831889629364 127.4525527954102 2.040999412536621 127.4525527954102 L 17.98843383789062 127.4525527954102 C 21.34435653686523 137.8773498535156 27.93482971191406 147.2373199462891 36.67404937744141 153.9371795654297 C 46.11808776855469 161.1775207519531 57.41316604614258 165.0406951904297 69.33932495117188 165.1098022460938 C 69.44518280029297 165.1106262207031 69.49797058105469 165.1155242919922 69.99215698242188 165.1098022460938 C 81.91803741455078 165.0406951904297 93.21338653564453 161.1775207519531 102.6574325561523 153.9371795654297 C 111.3966522216797 147.2373199462891 117.9871292114258 137.8773498535156 121.3430480957031 127.4525527954102 L 137.2902221679688 127.4525527954102 C 138.4173889160156 127.4525527954102 139.3312072753906 126.5387344360352 139.3312072753906 125.4115829467773 L 139.3312072753906 96.27176666259766 C 139.3312072753906 95.14459228515625 138.4173889160156 94.23078155517578 137.2902221679688 94.23078155517578 Z M 108.1503982543945 94.23078155517578 L 97.80587768554688 94.23078155517578 C 97.11573791503906 90.20950317382812 96.19241333007812 86.42415618896484 95.06606292724609 82.9188232421875 L 111.3476715087891 82.9188232421875 C 113.6918106079102 86.39094543457031 115.6160430908203 90.18310546875 117.0373840332031 94.23077392578125 L 108.1503982543945 94.23078155517578 Z M 45.6704216003418 94.23078155517578 C 46.40055084228516 90.18527221679688 47.38485336303711 86.39259338378906 48.58168411254883 82.9188232421875 L 67.62460327148438 82.9188232421875 L 67.62460327148438 94.23077392578125 L 45.6704216003418 94.23078155517578 Z M 71.70658111572266 82.91910552978516 L 90.74978637695312 82.91910552978516 C 91.94635009765625 86.39285278320312 92.93064880371094 90.185546875 93.6607666015625 94.23105621337891 L 71.70658111572266 94.23105621337891 L 71.70658111572266 82.91910552978516 Z M 71.70658111572266 60.82095336914062 C 78.55667114257812 61.93914794921875 84.85134124755859 68.64118957519531 89.18476104736328 78.83713531494141 L 71.70658111572266 78.83713531494141 L 71.70658111572266 60.82095336914062 Z M 108.2774887084961 78.83713531494141 L 93.61369323730469 78.83713531494141 C 90.92258453369141 71.97506713867188 87.39793395996094 66.41978454589844 83.32630920410156 62.57456970214844 C 93.09881591796875 65.37181091308594 101.8135528564453 71.09310150146484 108.277473449707 78.83713531494141 Z M 67.62461090087891 60.82313537597656 L 67.62461090087891 78.83713531494141 L 50.1469841003418 78.83713531494141 C 54.47849273681641 68.64853668212891 60.77017211914062 61.94866943359375 67.62461090087891 60.82313537597656 Z M 27.95741081237793 82.91910552978516 L 44.26541519165039 82.91910552978516 C 43.1387939453125 86.42415618896484 42.21572494506836 90.20977020263672 41.52532577514648 94.23105621337891 L 22.29844284057617 94.23105621337891 C 23.70264053344727 90.22254943847656 25.60456466674805 86.42578125 27.95741081237793 82.91910552978516 Z M 24.45372009277344 123.3708572387695 L 4.081979274749756 123.3708572387695 L 4.081979274749756 98.31301116943359 L 106.1094131469727 98.31301116943359 L 106.1094131469727 123.3708572387695 L 33.97831344604492 123.3708572387695 C 32.85114669799805 123.3708572387695 31.93733215332031 124.2846755981445 31.93733215332031 125.4118423461914 C 31.93733215332031 126.5389938354492 32.85114669799805 127.4528274536133 33.97831344604492 127.4528274536133 L 41.52532958984375 127.4528274536133 C 42.2154541015625 131.47412109375 43.13879776000977 135.2594604492188 44.2651481628418 138.7647705078125 L 27.9835376739502 138.7647705078125 C 25.63940048217773 135.2926483154297 23.71516036987305 131.5005035400391 22.2938175201416 127.4528274536133 L 24.45344924926758 127.4528274536133 C 25.58061599731445 127.4528274536133 26.49443244934082 126.5389938354492 26.49443244934082 125.4118423461914 C 26.49443244934082 124.2846755981445 25.58088684082031 123.3708572387695 24.45372009277344 123.3708572387695 Z M 67.62461090087891 142.8464813232422 L 67.62461090087891 160.8626556396484 C 60.77452850341797 159.7444763183594 54.47985458374023 153.0424194335938 50.14644241333008 142.8464813232422 L 67.62461090087891 142.8464813232422 Z M 48.58141326904297 138.7645111083984 C 47.38485717773438 135.2907562255859 46.40055465698242 131.4980621337891 45.67042922973633 127.4525527954102 L 67.62461090087891 127.4525527954102 L 67.62461090087891 138.7645111083984 L 48.58141326904297 138.7645111083984 Z M 71.70658111572266 160.8604736328125 L 71.70658111572266 142.8464813232422 L 89.18421173095703 142.8464813232422 C 84.85269927978516 153.0350799560547 78.56102752685547 159.7349395751953 71.70658111572266 160.8604736328125 Z M 71.70658111572266 138.7645111083984 L 71.70658111572266 127.4528274536133 L 93.6607666015625 127.4528274536133 C 92.93063354492188 131.4983367919922 91.94635009765625 135.2910308837891 90.74951171875 138.7647705078125 L 71.70658111572266 138.7647705078125 Z M 31.05372047424316 142.8464813232422 L 45.71750640869141 142.8464813232422 C 48.40861129760742 149.7085418701172 51.93325805664062 155.2638244628906 56.00487899780273 159.1090393066406 C 46.23237609863281 156.3117980957031 37.51765060424805 150.5905303955078 31.0537166595459 142.8464813232422 Z M 83.31951141357422 159.1109313964844 C 87.39440155029297 155.2657318115234 90.92095947265625 149.7096405029297 93.61315155029297 142.8464813232422 L 108.2774887084961 142.8464813232422 C 101.8121948242188 150.5924224853516 93.09501647949219 156.3142395019531 83.31951141357422 159.1109313964844 Z M 111.3474044799805 138.7645111083984 L 95.06578826904297 138.7645111083984 C 96.19241333007812 135.2594604492188 97.11548614501953 131.4738464355469 97.80587768554688 127.4525527954102 L 108.1503982543945 127.4525527954102 L 117.0373992919922 127.4525527954102 C 115.6157760620117 131.5005187988281 113.691535949707 135.2923889160156 111.3474044799805 138.7645111083984 Z"
            ></path>
          </svg>
        </div>
      </div>
      <div id="ID701358">
        <div id="Grupo_9976">
          <div id="Grupo_9975">
            <svg
              className="Caminho_18916"
              viewBox="16.93 273.067 42.499 40.893"
            >
              <path
                fill="rgba(37,88,230,1)"
                id="Caminho_18916"
                d="M 52.98357391357422 301.0599975585938 L 33.32190704345703 301.0212097167969 L 29.84319114685059 278.581787109375 C 29.38085746765137 275.4277954101562 26.64389038085938 273.0670166015625 23.50077247619629 273.0670166015625 C 23.46197319030762 273.0670166015625 23.42115592956543 273.0670166015625 23.38034057617188 273.0670166015625 C 19.84795761108398 273.0670166015625 16.96032333374023 275.9264526367188 16.93033981323242 279.471923828125 C 16.92807388305664 279.7598876953125 16.94319152832031 280.0458679199219 16.97770881652832 280.3081359863281 L 20.26720809936523 308.2537841796875 C 20.6456413269043 311.5133056640625 23.39545631408691 313.9597778320312 26.65925788879395 313.9597778320312 C 26.67437744140625 313.9597778320312 26.68949317932129 313.9597778320312 26.7043571472168 313.9597778320312 L 52.97954559326172 313.9597778320312 C 56.53561401367188 313.9597778320312 59.42955017089844 311.0658264160156 59.42955017089844 307.509765625 C 59.42955017089844 303.9536743164062 56.53535842895508 301.0599975585938 52.98357391357422 301.0599975585938 Z M 52.97702407836914 309.6599426269531 L 26.68672180175781 309.6599426269531 C 26.68243980407715 309.6599426269531 26.67588806152344 309.6599426269531 26.67160224914551 309.6599426269531 C 25.57938957214355 309.6599426269531 24.66353797912598 308.8451232910156 24.53655242919922 307.7528991699219 L 21.24528884887695 279.7813110351562 C 21.23445510864258 279.6868286132812 21.23017311096191 279.5900573730469 21.23017311096191 279.4996337890625 C 21.23873901367188 278.3192443847656 22.20195388793945 277.3668212890625 23.41888999938965 277.3668212890625 C 23.43400573730469 277.3668212890625 23.44685554504395 277.3645629882812 23.4597053527832 277.3668212890625 C 24.52168846130371 277.3668212890625 25.43350601196289 278.1536865234375 25.59047317504883 279.2222290039062 L 29.35289001464844 303.4956359863281 C 29.51413917541504 304.5427551269531 30.41512489318848 305.3144836425781 31.47282218933105 305.3167419433594 L 52.97702407836914 305.35986328125 C 54.16170501708984 305.35986328125 55.12694549560547 306.3230590820312 55.12694549560547 307.509765625 C 55.12694549560547 308.6966857910156 54.16170501708984 309.6599426269531 52.97702407836914 309.6599426269531 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_9978">
          <div id="Grupo_9977">
            <svg className="Ret_ngulo_2339">
              <rect
                fill="rgba(37,88,230,1)"
                id="Ret_ngulo_2339"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="20.397"
                height="4.3"
              ></rect>
            </svg>
          </div>
        </div>
        <div id="Grupo_9980">
          <div id="Grupo_9979">
            <svg className="Ret_ngulo_2340">
              <rect
                fill="rgba(37,88,230,1)"
                id="Ret_ngulo_2340"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="4.3"
                height="20.397"
              ></rect>
            </svg>
          </div>
        </div>
        <div id="Grupo_9982">
          <div id="Grupo_9981">
            <svg className="Caminho_18917" viewBox="128 307.2 64.5 12.9">
              <path
                fill="rgba(37,88,230,1)"
                id="Caminho_18917"
                d="M 190.35009765625 307.2000427246094 L 130.1499176025391 307.2000427246094 C 128.9632263183594 307.2000427246094 128 308.1609802246094 128 309.3499450683594 L 128 317.9498596191406 C 128 319.1388244628906 128.9632263183594 320.0997924804688 130.1499176025391 320.0997924804688 L 190.3498382568359 320.0997924804688 C 191.5388031005859 320.0997924804688 192.499755859375 319.1388244628906 192.499755859375 317.9498596191406 L 192.499755859375 309.3499450683594 C 192.5000152587891 308.1609802246094 191.5390625 307.2000427246094 190.35009765625 307.2000427246094 Z M 188.1999359130859 315.7999572753906 L 132.3000793457031 315.7999572753906 L 132.3000793457031 311.4998779296875 L 188.2001800537109 311.4998779296875 L 188.2001800537109 315.7999572753906 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_9984">
          <div id="Grupo_9983">
            <svg className="Caminho_18918" viewBox="230.401 341.333 12.9 43">
              <path
                fill="rgba(37,88,230,1)"
                id="Caminho_18918"
                d="M 241.1508331298828 341.3330078125 L 232.5509185791016 341.3330078125 C 231.3642120361328 341.3330078125 230.4009857177734 342.2939453125 230.4009857177734 343.48291015625 L 230.4009857177734 382.1829223632812 C 230.4009857177734 383.3718872070312 231.3642120361328 384.3328247070312 232.5509185791016 384.3328247070312 L 241.1508331298828 384.3328247070312 C 242.3397979736328 384.3328247070312 243.3007354736328 383.3718872070312 243.3007354736328 382.1829223632812 L 243.3007354736328 343.48291015625 C 243.3007507324219 342.2942199707031 242.3397979736328 341.3330078125 241.1508331298828 341.3330078125 Z M 239.0006561279297 380.0330200195312 L 234.7005767822266 380.0330200195312 L 234.7005767822266 345.6330871582031 L 239.0006561279297 345.6330871582031 L 239.0006561279297 380.0330200195312 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_9986">
          <div id="Grupo_9985">
            <svg className="Caminho_18919" viewBox="8.534 0 124.7 21.5">
              <path
                fill="rgba(37,88,230,1)"
                id="Caminho_18919"
                d="M 133.1692047119141 18.82744789123535 L 128.8691253662109 1.627617239952087 C 128.6282501220703 0.6729668378829956 127.7706069946289 0 126.7836990356445 0 L 14.98353576660156 0 C 13.99663543701172 0 13.13671875 0.6729668378829956 12.89811992645264 1.627617239952087 L 8.59803581237793 18.82744789123535 C 8.436785697937012 19.47043418884277 8.582918167114258 20.14970016479492 8.989317893981934 20.67225074768066 C 9.395718574523926 21.19480133056641 10.02131843566895 21.49991798400879 10.68345069885254 21.49991798400879 L 131.0835418701172 21.49991798400879 C 131.7456665039062 21.49991798400879 132.3692474365234 21.19455146789551 132.7776794433594 20.67225074768066 C 133.1863250732422 20.14970016479492 133.3304595947266 19.47043418884277 133.1692047119141 18.82744789123535 Z M 13.4378023147583 17.2000846862793 L 16.66280555725098 4.300083637237549 L 125.1044311523438 4.300083637237549 L 128.3294219970703 17.2000846862793 L 13.4378023147583 17.2000846862793 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_9988">
          <div id="Grupo_9987">
            <svg className="Caminho_18920" viewBox="213.333 68.267 21.5 19.35">
              <path
                fill="rgba(37,88,230,1)"
                id="Caminho_18920"
                d="M 232.6829986572266 68.26699829101562 L 215.48291015625 68.26699829101562 C 214.2962188720703 68.26699829101562 213.3329925537109 69.23021697998047 213.3329925537109 70.41692352294922 L 213.3329925537109 76.86691284179688 C 213.3329925537109 82.79436492919922 218.1553802490234 87.61698913574219 224.0830841064453 87.61698913574219 C 230.0105285644531 87.61698913574219 234.8331604003906 82.79461669921875 234.8331604003906 76.86691284179688 L 234.8331604003906 70.41692352294922 C 234.8331604003906 69.23021697998047 233.8719482421875 68.26699829101562 232.6829986572266 68.26699829101562 Z M 230.5330810546875 76.86691284179688 C 230.5330810546875 80.42298126220703 227.6391448974609 83.31690979003906 224.0830841064453 83.31690979003906 C 220.5270233154297 83.31690979003906 217.6330871582031 80.42298126220703 217.6330871582031 76.86691284179688 L 217.6330871582031 72.56683349609375 L 230.5330810546875 72.56683349609375 L 230.5330810546875 76.86691284179688 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_9990">
          <div id="Grupo_9989">
            <svg className="Caminho_18921" viewBox="145.067 68.267 21.5 19.35">
              <path
                fill="rgba(37,88,230,1)"
                id="Caminho_18921"
                d="M 164.4169921875 68.26699829101562 L 147.2169189453125 68.26699829101562 C 146.0302276611328 68.26699829101562 145.0670013427734 69.23021697998047 145.0670013427734 70.41692352294922 L 145.0670013427734 76.86691284179688 C 145.0670013427734 82.79436492919922 149.8893890380859 87.61698913574219 155.8170776367188 87.61698913574219 C 161.7445373535156 87.61698913574219 166.5671691894531 82.79461669921875 166.5671691894531 76.86691284179688 L 166.5671691894531 70.41692352294922 C 166.5669250488281 69.23021697998047 165.6036987304688 68.26699829101562 164.4169921875 68.26699829101562 Z M 162.266845703125 76.86691284179688 C 162.266845703125 80.42298126220703 159.3729095458984 83.31690979003906 155.8168334960938 83.31690979003906 C 152.2607574462891 83.31690979003906 149.3668365478516 80.42298126220703 149.3668365478516 76.86691284179688 L 149.3668365478516 72.56683349609375 L 162.2668304443359 72.56683349609375 L 162.2668304443359 76.86691284179688 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_9992">
          <div id="Grupo_9991">
            <svg className="Caminho_18922" viewBox="76.8 68.267 21.5 19.35">
              <path
                fill="rgba(37,88,230,1)"
                id="Caminho_18922"
                d="M 96.15000915527344 68.26699829101562 L 78.94992828369141 68.26699829101562 C 77.76322174072266 68.26699829101562 76.80001068115234 69.23021697998047 76.80001068115234 70.41692352294922 L 76.80001068115234 76.86691284179688 C 76.80001068115234 82.79436492919922 81.62239074707031 87.61698913574219 87.55009460449219 87.61698913574219 C 93.47779083251953 87.61698913574219 98.3001708984375 82.79461669921875 98.3001708984375 76.86691284179688 L 98.3001708984375 70.41692352294922 C 98.29991912841797 69.23021697998047 97.33670043945312 68.26699829101562 96.15000915527344 68.26699829101562 Z M 94.00009155273438 76.86691284179688 C 94.00009155273438 80.42298126220703 91.10615539550781 83.31690979003906 87.55009460449219 83.31690979003906 C 83.99402618408203 83.31690979003906 81.10009002685547 80.42298126220703 81.10009002685547 76.86691284179688 L 81.10009002685547 72.56683349609375 L 94.00009155273438 72.56683349609375 L 94.00009155273438 76.86691284179688 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_9994">
          <div id="Grupo_9993">
            <svg className="Caminho_18923" viewBox="8.534 68.267 21.5 19.35">
              <path
                fill="rgba(37,88,230,1)"
                id="Caminho_18923"
                d="M 27.88375091552734 68.26699829101562 L 10.68391513824463 68.26699829101562 C 9.49721622467041 68.26699829101562 8.533999443054199 69.23021697998047 8.533999443054199 70.41692352294922 L 8.533999443054199 76.86691284179688 C 8.533999443054199 82.79436492919922 13.35638236999512 87.61698913574219 19.28408432006836 87.61698913574219 C 25.21153450012207 87.61698913574219 30.0341682434082 82.79461669921875 30.0341682434082 76.86691284179688 L 30.0341682434082 70.41692352294922 C 30.03391456604004 69.23021697998047 29.07069969177246 68.26699829101562 27.88375091552734 68.26699829101562 Z M 25.73383331298828 76.86691284179688 C 25.73383331298828 80.42298126220703 22.83990097045898 83.31690979003906 19.28383445739746 83.31690979003906 C 15.72776699066162 83.31690979003906 12.83383274078369 80.42298126220703 12.83383274078369 76.86691284179688 L 12.83383274078369 72.56683349609375 L 25.73383331298828 72.56683349609375 L 25.73383331298828 76.86691284179688 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_9996">
          <div id="Grupo_9995">
            <svg className="Caminho_18924" viewBox="281.6 68.267 21.5 19.35">
              <path
                fill="rgba(37,88,230,1)"
                id="Caminho_18924"
                d="M 300.9500122070312 68.26699829101562 L 283.7499084472656 68.26699829101562 C 282.5609436035156 68.26699829101562 281.6000061035156 69.23021697998047 281.6000061035156 70.41692352294922 L 281.6000061035156 76.86691284179688 C 281.6000061035156 82.79436492919922 286.4224243164062 87.61698913574219 292.35009765625 87.61698913574219 C 298.2775573730469 87.61698913574219 303.1001586914062 82.79461669921875 303.1001586914062 76.86691284179688 L 303.1001586914062 70.41692352294922 C 303.0999450683594 69.23021697998047 302.1389770507812 68.26699829101562 300.9500122070312 68.26699829101562 Z M 298.8000793457031 76.86691284179688 C 298.8000793457031 80.42298126220703 295.9061584472656 83.31690979003906 292.35009765625 83.31690979003906 C 288.7940063476562 83.31690979003906 285.9000854492188 80.42298126220703 285.9000854492188 76.86691284179688 L 285.9000854492188 72.56683349609375 L 298.8000793457031 72.56683349609375 L 298.8000793457031 76.86691284179688 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_9998">
          <div id="Grupo_9997">
            <svg className="Caminho_18925" viewBox="349.867 68.267 21.5 19.35">
              <path
                fill="rgba(37,88,230,1)"
                id="Caminho_18925"
                d="M 369.217041015625 68.26699829101562 L 352.0169372558594 68.26699829101562 C 350.8279724121094 68.26699829101562 349.8670349121094 69.23021697998047 349.8670349121094 70.41692352294922 L 349.8670349121094 76.86691284179688 C 349.8670349121094 82.79436492919922 354.6894226074219 87.61698913574219 360.6171264648438 87.61698913574219 C 366.5445556640625 87.61698913574219 371.3671875 82.79461669921875 371.3671875 76.86691284179688 L 371.3671875 70.41692352294922 C 371.366943359375 69.23021697998047 370.4059753417969 68.26699829101562 369.217041015625 68.26699829101562 Z M 367.0668640136719 76.86691284179688 C 367.0668640136719 80.42298126220703 364.1729125976562 83.31690979003906 360.6168518066406 83.31690979003906 C 357.060791015625 83.31690979003906 354.1668701171875 80.42298126220703 354.1668701171875 76.86691284179688 L 354.1668701171875 72.56683349609375 L 367.0668640136719 72.56683349609375 L 367.0668640136719 76.86691284179688 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_10000">
          <div id="Grupo_9999">
            <svg className="Caminho_18926" viewBox="418.133 68.267 21.5 19.35">
              <path
                fill="rgba(37,88,230,1)"
                id="Caminho_18926"
                d="M 437.4830627441406 68.26699829101562 L 420.282958984375 68.26699829101562 C 419.0940246582031 68.26699829101562 418.133056640625 69.23021697998047 418.133056640625 70.41692352294922 L 418.133056640625 76.86691284179688 C 418.133056640625 82.79436492919922 422.9554443359375 87.61698913574219 428.8831481933594 87.61698913574219 C 434.8105773925781 87.61698913574219 439.6332092285156 82.79461669921875 439.6332092285156 76.86691284179688 L 439.6332092285156 70.41692352294922 C 439.6332092285156 69.23021697998047 438.6720275878906 68.26699829101562 437.4830627441406 68.26699829101562 Z M 435.3331298828125 76.86691284179688 C 435.3331298828125 80.42298126220703 432.439208984375 83.31690979003906 428.8831176757812 83.31690979003906 C 425.3270568847656 83.31690979003906 422.4331359863281 80.42298126220703 422.4331359863281 76.86691284179688 L 422.4331359863281 72.56683349609375 L 435.3331298828125 72.56683349609375 L 435.3331298828125 76.86691284179688 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_10002">
          <div id="Grupo_10001">
            <svg className="Ret_ngulo_2341">
              <rect
                fill="rgba(37,88,230,1)"
                id="Ret_ngulo_2341"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="4.3"
                height="17.2"
              ></rect>
            </svg>
          </div>
        </div>
        <div id="Grupo_10004">
          <div id="Grupo_10003">
            <svg className="Ret_ngulo_2342">
              <rect
                fill="rgba(37,88,230,1)"
                id="Ret_ngulo_2342"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="4.3"
                height="17.2"
              ></rect>
            </svg>
          </div>
        </div>
        <div id="Grupo_10006">
          <div id="Grupo_10005">
            <svg className="Ret_ngulo_2343">
              <rect
                fill="rgba(37,88,230,1)"
                id="Ret_ngulo_2343"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="4.3"
                height="17.2"
              ></rect>
            </svg>
          </div>
        </div>
        <div id="Grupo_10008">
          <div id="Grupo_10007">
            <svg className="Ret_ngulo_2344">
              <rect
                fill="rgba(37,88,230,1)"
                id="Ret_ngulo_2344"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="4.3"
                height="17.2"
              ></rect>
            </svg>
          </div>
        </div>
        <div id="Grupo_10010">
          <div id="Grupo_10009">
            <svg className="Ret_ngulo_2345">
              <rect
                fill="rgba(37,88,230,1)"
                id="Ret_ngulo_2345"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="17.329"
                height="4.3"
              ></rect>
            </svg>
          </div>
        </div>
        <div id="Grupo_10012">
          <div id="Grupo_10011">
            <svg className="Ret_ngulo_2346">
              <rect
                fill="rgba(37,88,230,1)"
                id="Ret_ngulo_2346"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="4.3"
                height="17.329"
              ></rect>
            </svg>
          </div>
        </div>
        <div id="Grupo_10014">
          <div id="Grupo_10013">
            <svg
              className="Caminho_18927"
              viewBox="326.4 273.067 42.497 40.893"
            >
              <path
                fill="rgba(37,88,230,1)"
                id="Caminho_18927"
                d="M 362.4900207519531 273.0669860839844 C 362.4426574707031 273.0669860839844 362.4083862304688 273.0669860839844 362.3675537109375 273.0669860839844 C 359.1856689453125 273.0669860839844 356.4507141113281 275.4255065917969 355.9886169433594 278.5646057128906 L 352.5079040527344 301.0214538574219 L 332.8499755859375 301.0599975585938 C 329.2939453125 301.0599975585938 326.3999938964844 303.9539184570312 326.3999938964844 307.510009765625 C 326.3999938964844 311.0660400390625 329.2939453125 313.9600219726562 332.8499755859375 313.9600219726562 L 359.1057739257812 313.9600219726562 C 359.1209106445312 313.9600219726562 359.1357421875 313.9600219726562 359.15087890625 313.9600219726562 C 362.4318237304688 313.9600219726562 365.1816101074219 311.5132751464844 365.56005859375 308.25830078125 L 368.8472900390625 280.3169555664062 C 368.8818054199219 280.0332336425781 368.8989562988281 279.7472839355469 368.8966674804688 279.4676208496094 C 368.8709716796875 275.9264221191406 365.9815979003906 273.0669860839844 362.4900207519531 273.0669860839844 Z M 364.5774536132812 279.802978515625 L 361.2879638671875 307.7571411132812 C 361.1612243652344 308.8450927734375 360.2450866699219 309.659912109375 359.1380310058594 309.659912109375 C 359.1337585449219 309.659912109375 359.1272277832031 309.659912109375 359.1229248046875 309.659912109375 L 332.8499755859375 309.659912109375 C 331.6632995605469 309.659912109375 330.7000732421875 308.6966857910156 330.7000732421875 307.510009765625 C 330.7000732421875 306.3233032226562 331.6632995605469 305.360107421875 332.8542785644531 305.360107421875 L 354.3541870117188 305.3170166015625 C 355.4118957519531 305.3147583007812 356.3128662109375 304.5407409667969 356.4741516113281 303.4958801269531 L 360.2388305664062 279.205078125 C 360.3935241699219 278.1536865234375 361.3053588867188 277.3668212890625 362.4060974121094 277.3668212890625 C 362.4189453125 277.3668212890625 362.4360961914062 277.3668212890625 362.4469299316406 277.3668212890625 C 363.6250610351562 277.3668212890625 364.5882873535156 278.3192443847656 364.5968322753906 279.5061645507812 C 364.59912109375 279.6029052734375 364.5905456542969 279.6996765136719 364.5774536132812 279.802978515625 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_10016">
          <div id="Grupo_10015">
            <svg className="Ret_ngulo_2347">
              <rect
                fill="rgba(37,88,230,1)"
                id="Ret_ngulo_2347"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="4.298"
                height="20.397"
              ></rect>
            </svg>
          </div>
        </div>
        <div id="Grupo_10018">
          <div id="Grupo_10017">
            <svg className="Ret_ngulo_2348">
              <rect
                fill="rgba(37,88,230,1)"
                id="Ret_ngulo_2348"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="20.397"
                height="4.298"
              ></rect>
            </svg>
          </div>
        </div>
        <div id="Grupo_10020">
          <div id="Grupo_10019">
            <svg className="Ret_ngulo_2349">
              <rect
                fill="rgba(37,88,230,1)"
                id="Ret_ngulo_2349"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="129"
                height="4.3"
              ></rect>
            </svg>
          </div>
        </div>
      </div>
      <div id="Grupo_10021">
        <svg className="Elipse_141">
          <ellipse
            fill="rgba(46,38,111,1)"
            id="Elipse_141"
            rx="29.5"
            ry="29.5"
            cx="29.5"
            cy="29.5"
          ></ellipse>
        </svg>
        <div id="ID1">
          <span>1</span>
        </div>
      </div>
      <div id="Grupo_10022">
        <svg className="Elipse_141_">
          <ellipse
            fill="rgba(46,38,111,1)"
            id="Elipse_141_"
            rx="29.5"
            ry="29.5"
            cx="29.5"
            cy="29.5"
          ></ellipse>
        </svg>
        <div id="ID2">
          <span>2</span>
        </div>
      </div>
      <div id="Grupo_10023">
        <svg className="Elipse_141_a">
          <ellipse
            fill="rgba(46,38,111,1)"
            id="Elipse_141_a"
            rx="29.5"
            ry="29.5"
            cx="29.5"
            cy="29.5"
          ></ellipse>
        </svg>
        <div id="ID3">
          <span>3</span>
        </div>
      </div>
      <div id="Grupo_10026">
        <div id="Grupo_9888_">
          <div id="t_seguro_">
            <span>tô</span>
            <span>seguro</span>
          </div>
        </div>
        <div id="Grupo_9894_">
          <svg
            className="Icon_awesome_star_a"
            viewBox="1.441 -0.001 11.624 11.126"
          >
            <path
              fill="rgba(255,193,7,1)"
              id="Icon_awesome_star_a"
              d="M 6.629766464233398 0.3861230611801147 L 5.210999965667725 3.262765884399414 L 2.036700487136841 3.72554874420166 C 1.467455625534058 3.808110237121582 1.239323616027832 4.509889125823975 1.652134418487549 4.911836624145508 L 3.948667526245117 7.149708271026611 L 3.405495166778564 10.31097030639648 C 3.307724237442017 10.88239002227783 3.909559965133667 11.31040859222412 4.413622856140137 11.0431661605835 L 7.253326892852783 9.550529479980469 L 10.0930347442627 11.0431661605835 C 10.59709739685059 11.30823612213135 11.19893360137939 10.88239002227783 11.10116291046143 10.31097030639648 L 10.55799102783203 7.149708271026611 L 12.85452461242676 4.911836624145508 C 13.26733207702637 4.509889125823975 13.03920078277588 3.808110237121582 12.46995735168457 3.72554874420166 L 9.295658111572266 3.262765884399414 L 7.87689208984375 0.3861230611801147 C 7.622688770294189 -0.1266318559646606 6.88614559173584 -0.1331499963998795 6.629767894744873 0.3861230611801147 Z"
            ></path>
          </svg>
          <svg
            className="Icon_awesome_star_b"
            viewBox="1.441 -0.001 11.624 11.126"
          >
            <path
              fill="rgba(255,193,7,1)"
              id="Icon_awesome_star_b"
              d="M 6.629766464233398 0.3861230611801147 L 5.210999965667725 3.262765884399414 L 2.036700487136841 3.72554874420166 C 1.467455625534058 3.808110237121582 1.239323616027832 4.509889125823975 1.652134418487549 4.911836624145508 L 3.948667526245117 7.149708271026611 L 3.405495166778564 10.31097030639648 C 3.307724237442017 10.88239002227783 3.909559965133667 11.31040859222412 4.413622856140137 11.0431661605835 L 7.253326892852783 9.550529479980469 L 10.0930347442627 11.0431661605835 C 10.59709739685059 11.30823612213135 11.19893360137939 10.88239002227783 11.10116291046143 10.31097030639648 L 10.55799102783203 7.149708271026611 L 12.85452461242676 4.911836624145508 C 13.26733207702637 4.509889125823975 13.03920078277588 3.808110237121582 12.46995735168457 3.72554874420166 L 9.295658111572266 3.262765884399414 L 7.87689208984375 0.3861230611801147 C 7.622688770294189 -0.1266318559646606 6.88614559173584 -0.1331499963998795 6.629767894744873 0.3861230611801147 Z"
            ></path>
          </svg>
        </div>
      </div>
      <div id="Grupo_10038">
        <div id="Grupo_10037">
          <svg className="Ret_ngulo_93">
            <rect
              fill="rgba(255,255,255,1)"
              id="Ret_ngulo_93"
              rx="13"
              ry="13"
              x="0"
              y="0"
              width="297.725"
              height="438.344"
            ></rect>
          </svg>
          <img
            id="nick_karvounis_Ciqxn7FE4vE_uns"
            src={require("../../assets/nick_karvounis_Ciqxn7FE4vE_uns.png")}
          />
          <div id="Pizza_Vicenzo">
            <span
              style={{
                position: "absolute",
                marginTop: "-9px",
              }}
            >
              Pizza Vicenzo
            </span>
          </div>
          <div id="Grupo_10">
            <div id="Ver_mais">
              <span>Ver mais</span>
            </div>
          </div>
          <div id="Distanciamento_de_1_5m">
            <span>Distanciamento de 1,5m</span>
          </div>
          <div id="_lcool_gel">
            <span>Álcool gel</span>
          </div>
          <div id="Grupo_de_at__6_pessoas">
            <span>Grupo de até 6 pessoas</span>
          </div>
          <div id="ID39_avalia__es">
            <span>39 avaliações</span>
          </div>
          <div id="Grupo_9917">
            <svg className="ID74373" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(64,201,70,1)"
                id="ID74373"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_p" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(64,201,70,1)"
                id="ID74373_p"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_q" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(64,201,70,1)"
                id="ID74373_q"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_r" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(64,201,70,1)"
                id="ID74373_r"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_s" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(64,201,70,1)"
                id="ID74373_s"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
          </div>
          <div id="Grupo_9918">
            <svg className="ID74373_u" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(64,201,70,1)"
                id="ID74373_u"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_v" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(64,201,70,1)"
                id="ID74373_v"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_w" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(64,201,70,1)"
                id="ID74373_w"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_x" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_x"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_y" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_y"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
          </div>
          <div id="Grupo_9919">
            <svg className="ID74373_" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(64,201,70,1)"
                id="ID74373_"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_a" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(64,201,70,1)"
                id="ID74373_a"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_b" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(64,201,70,1)"
                id="ID74373_b"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_c" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_c"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_d" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_d"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
          </div>
          <div id="Grupo_9921">
            <div id="Grupo_1285">
              <div id="Grupo_9920">
                <svg className="Caminho_739" viewBox="0 0 64.106 64.106">
                  <path
                    fill="rgba(64,201,70,1)"
                    id="Caminho_739"
                    d="M 32.05284881591797 0 C 49.75514602661133 0 64.10569763183594 14.35055160522461 64.10569763183594 32.05284881591797 C 64.10569763183594 49.75514602661133 49.75514602661133 64.10569763183594 32.05284881591797 64.10569763183594 C 14.35055160522461 64.10569763183594 0 49.75514602661133 0 32.05284881591797 C 0 14.35055160522461 14.35055160522461 0 32.05284881591797 0 Z"
                  ></path>
                </svg>
              </div>
            </div>
            <svg className="ID74373_e" viewBox="29.873 0 25.935 31.311">
              <path
                fill="rgba(255,255,255,1)"
                id="ID74373_e"
                d="M 55.73706436157227 4.891992092132568 C 50.39436340332031 4.891992092132568 46.30131530761719 3.36555552482605 42.84020233154297 0 C 39.37944412231445 3.36555552482605 35.28657531738281 4.891992092132568 29.94432830810547 4.891992092132568 C 29.94432830810547 13.65658092498779 28.13076019287109 26.2117977142334 42.84011077880859 31.31074523925781 C 57.55055236816406 26.21188545227051 55.73706436157227 13.65667152404785 55.73706436157227 4.891992092132568 Z M 41.77185821533203 20.31525611877441 L 37.47536087036133 16.01812934875488 L 39.39906692504883 14.09451866149902 L 41.77185821533203 16.46785163879395 L 46.28178787231445 11.95782947540283 L 48.20539855957031 13.88144111633301 L 41.77185821533203 20.31525611877441 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div id="Grupo_10033">
          <svg className="Ret_ngulo_93_b">
            <rect
              fill="rgba(255,255,255,1)"
              id="Ret_ngulo_93_b"
              rx="13"
              ry="13"
              x="0"
              y="0"
              width="297.725"
              height="438.344"
            ></rect>
          </svg>
          <img
            id="benjamin_zanatta_g9fd4Z3qwag_u"
            src={require("../../assets/benjamin_zanatta_g9fd4Z3qwag_u.png")}
          />
          <div id="Grupo_9923">
            <div id="Ver_mais_e">
              <span>Ver mais</span>
            </div>
          </div>
          <div id="Distanciamento_de_1_5m_f">
            <span>Distanciamento de 1,5m</span>
          </div>
          <div id="_lcool_gel_g">
            <span>Álcool gel</span>
          </div>
          <div id="Grupo_de_at__6_pessoas_h">
            <span>Grupo de até 6 pessoas</span>
          </div>
          <div id="Grupo_9924">
            <svg className="ID74373_j" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(255,193,7,1)"
                id="ID74373_j"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_k" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_k"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_l" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_l"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_m" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_m"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_n" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_n"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
          </div>
          <div id="Grupo_9925">
            <svg className="ID74373_t" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(255,193,7,1)"
                id="ID74373_t"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_z" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(255,193,7,1)"
                id="ID74373_z"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_f" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_f"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_g" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_g"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_h" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_h"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
          </div>
          <div id="Grupo_9926">
            <svg className="ID74373_i" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(255,193,7,1)"
                id="ID74373_i"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_o" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(255,193,7,1)"
                id="ID74373_o"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_baa" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_baa"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_bab" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_bab"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
            <svg className="ID74373_bac" viewBox="29.873 0 13.384 16.159">
              <path
                fill="rgba(219,219,219,1)"
                id="ID74373_bac"
                d="M 43.2209358215332 2.524627447128296 C 40.46370697021484 2.524627447128296 38.35139465332031 1.736873984336853 36.56520462036133 0 C 34.77920150756836 1.736873984336853 32.6669807434082 2.524627447128296 29.90998649597168 2.524627447128296 C 29.90998649597168 7.047799587249756 28.97405433654785 13.52721405029297 36.56515884399414 16.15864562988281 C 44.15682601928711 13.52725982666016 43.2209358215332 7.04784631729126 43.2209358215332 2.524627447128296 Z M 36.01386260986328 10.48416614532471 L 33.79655075073242 8.266531944274902 L 34.78932571411133 7.273807048797607 L 36.01386260986328 8.498621940612793 L 38.34131622314453 6.17111873626709 L 39.33404159545898 7.163843631744385 L 36.01386260986328 10.48416614532471 Z"
              ></path>
            </svg>
          </div>
          <div id="Grupo_9928">
            <div id="Grupo_1285_">
              <div id="Grupo_9920_">
                <svg className="Caminho_739_" viewBox="0 0 64.106 64.106">
                  <path
                    fill="rgba(255,193,7,1)"
                    id="Caminho_739_"
                    d="M 32.05284881591797 0 C 49.75514602661133 0 64.10569763183594 14.35055160522461 64.10569763183594 32.05284881591797 C 64.10569763183594 49.75514602661133 49.75514602661133 64.10569763183594 32.05284881591797 64.10569763183594 C 14.35055160522461 64.10569763183594 0 49.75514602661133 0 32.05284881591797 C 0 14.35055160522461 14.35055160522461 0 32.05284881591797 0 Z"
                  ></path>
                </svg>
              </div>
            </div>
            <svg className="ID74373_bad" viewBox="29.873 0 25.935 31.311">
              <path
                fill="rgba(255,255,255,1)"
                id="ID74373_bad"
                d="M 55.73706436157227 4.891992092132568 C 50.39436340332031 4.891992092132568 46.30131530761719 3.36555552482605 42.84020233154297 0 C 39.37944412231445 3.36555552482605 35.28657531738281 4.891992092132568 29.94432830810547 4.891992092132568 C 29.94432830810547 13.65658092498779 28.13076019287109 26.2117977142334 42.84011077880859 31.31074523925781 C 57.55055236816406 26.21188545227051 55.73706436157227 13.65667152404785 55.73706436157227 4.891992092132568 Z M 41.77185821533203 20.31525611877441 L 37.47536087036133 16.01812934875488 L 39.39906692504883 14.09451866149902 L 41.77185821533203 16.46785163879395 L 46.28178787231445 11.95782947540283 L 48.20539855957031 13.88144111633301 L 41.77185821533203 20.31525611877441 Z"
              ></path>
            </svg>
          </div>
          <div id="Bar_do_Joca">
            <span
              style={{
                position: "absolute",
                marginTop: "-9px",
              }}
            >
              Bar do Joca
            </span>
          </div>
          <div id="ID3_avalia__es">
            <span>3 avaliações</span>
          </div>
        </div>
      </div>
      <div id="Grupo_10041">
        <svg className="Ret_ngulo_2357">
          <rect
            fill="rgba(37,88,230,1)"
            id="Ret_ngulo_2357"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="1366"
            height="48"
          ></rect>
        </svg>
        <div id="Grupo_10040">
          <img
            id="libras_simbolo_liguagem_de_sin"
            onClick={() => setShow(true)}
            style={{ cursor: "pointer" }}
            src={require("../../assets/libras_simbolo_liguagem_de_sin.png")}
          />
          <svg className="Ret_ngulo_2356">
            <rect
              fill="rgba(28,79,156,1)"
              id="Ret_ngulo_2356"
              rx="0"
              ry="0"
              x="0"
              y="0"
              width="48"
              height="5"
            ></rect>
          </svg>
        </div>
        <svg className="Elipse_150">
          <ellipse
            fill="rgba(255,255,255,1)"
            id="Elipse_150"
            rx="16.5"
            ry="16.5"
            cx="16.5"
            cy="16.5"
          ></ellipse>
        </svg>
        <svg
          className="Elipse_152"
          style={{ cursor: "pointer" }}
          onClick={() => setDarkTheme(false)}
        >
          <ellipse
            fill="rgba(255,255,255,1)"
            stroke="rgba(37,88,230,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Elipse_152"
            rx="10"
            ry="10.5"
            cx="10"
            cy="10.5"
          ></ellipse>
        </svg>
        <svg className="Elipse_151">
          <ellipse
            fill="rgba(255,255,255,1)"
            id="Elipse_151"
            rx="16.5"
            ry="16.5"
            cx="16.5"
            cy="16.5"
          ></ellipse>
        </svg>
        <svg
          className="Elipse_153"
          style={{ cursor: "pointer" }}
          onClick={() => setDarkTheme(true)}
        >
          <ellipse
            fill="rgba(46,38,111,1)"
            id="Elipse_153"
            rx="10"
            ry="10.5"
            cx="10"
            cy="10.5"
          ></ellipse>
        </svg>
        <div id="A_">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => handleFontSize("+")}
          >
            {" "}
            A+
          </span>
        </div>
        <div id="Contraste">
          <span>Contraste</span>
        </div>
        <div id="Tamanho">
          <span>Tamanho</span>
        </div>
        <div id="A__j">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => handleFontSize("-")}
          >
            A-
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
