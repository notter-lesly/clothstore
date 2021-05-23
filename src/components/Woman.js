import "./Woman.scss";
import Button from "./Button";
import foto1 from "../assets/img/1.jpg";
import foto2 from "../assets/img/2.jpg";
import foto3 from "../assets/img/3.jpg";
import foto4 from "../assets/img/4.jpg";
import foto5 from "../assets/img/5.jpg";
import foto6 from "../assets/img/6.jpg";
import foto7 from "../assets/img/7.jpg";
import foto8 from "../assets/img/8.jpg";

function Woman() {
  return (
    <ul className="clothes">
      <li>
        <img src={foto1} alt="primeira roupa" />
        <p> 150 €</p>
        <Button />
      </li>
      <li>
        <img src={foto2} alt="primeira roupa" />
        <p> 150 €</p>
        <Button />
      </li>
      <li>
        <img src={foto3} alt="primeira roupa" />
        <p> 150 €</p>
        <Button />
      </li>
      <li>
        <img src={foto4} alt="primeira roupa" />
        <p> 150 €</p>
        <Button />
      </li>
      <li>
        <img src={foto5} alt="primeira roupa" />
        <p> 150 €</p>
        <Button />
      </li>
      <li>
        <img src={foto6} alt="primeira roupa" />
        <p> 150 €</p>
        <Button />
      </li>
      <li>
        <img src={foto7} alt="primeira roupa" />
        <p> 150 €</p>
        <Button />
      </li>
      <li>
        <img src={foto8} alt="primeira roupa" />
        <p> 150 €</p>
        <Button />
      </li>
    </ul>
  );
}
export default Woman;
