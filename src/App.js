import './App.scss';
import logo from './img/logo.png';
import { useState } from 'react';
import Field from './components/Field';
import Submit from './components/Submit';
import Logo from './components/Logo';
import Form from './components/Form';

const App = () => {
  const [data, setData] = useState ({ email: "", password: "" })
  const changeData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submit = e => {
    e.preventDefault()
    console.log(data)
    console.log('Bienvenuto al sistema')
    alert('Benvenuto al sistema')
  }

  return (
      <Form submit={ submit }>
{/*         <div className="ed-item s-center">
          <img 
            className="s-mb-2" 
            src={logo} 
            alt="logo la gotera"
          />
        </div> */}

{/*         <div className="ed-item form__item">
          <label htmlFor="email">
            Correo electrónico
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={data.email} 
              onChange={changeData}
            />
          </label>
        </div> */}

{/*         <div className="ed-item form__item">
          <label htmlFor="password">
            Contraseña
            <input 
              type="password" 
              name="password" 
              id="password"
              value={data.password}
              onChange={changeData}
            />
          </label>
        </div> */}

        <Logo logoImg={ logo } alternative="Logo login" />
        <Field type="email" value={data.email} label="Correo electrónico" change={ changeData } />
        <Field type="password" value={data.password} label="Contraseña" change={ changeData } />


{/*     <div className="ed-item form__item">
          <input 
            type="submit" 
            value="Ingresar" 
            className="button full"
          />
        </div> */}

        <Submit value="Ingresar"/>

      </Form>
  );
}

export default App;