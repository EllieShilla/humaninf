import logo from './logo.svg';
import './App.css';

export default function App(params) {
  const f="Фамилия";
  const i="Имя";
  const o="Отчество";
  return(
    <div className="App">
    <FIO f={f} i={i} o={o}/>
    <h2>Телефон: 12345</h2>
    <h2>Email: 12345@gmail.com</h2>
    </div>
  )
}

function FIO(props) {
  return(
    <h2>{props.f} {props.i} {props.o}</h2>
  )
}