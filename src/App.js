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
      <Logo logoImg={ logo } alternative="Logo login" />
      <Field type="email" value={data.email} label="Correo electrónico" change={ changeData } />
      <Field type="password" value={data.password} label="Contraseña" change={ changeData } />
      <Submit value="Ingresar"/>
    </Form>
  );
}

export default App;