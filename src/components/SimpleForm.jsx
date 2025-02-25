import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    Matricula: 'A00836714',
    Nombre : 'Rene',
    Apellidos: 'Macias',
    Edad: 21,
    Universidad: 'Tec de Monterrey',
    Carrera: 'itc'
  });

  const { Matricula,Nombre,Apellidos,Edad,Universidad,Carrera } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('formState changed!');
  }, [formState]);



  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Matricula"
        name="Matricula"
        value={Matricula}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Nombre"
        name="Nombre"
        value={Nombre}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Apellidos"
        name="Apellidos"
        value={Apellidos}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Edad"
        name="Edad"
        value={Edad}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Universidad"
        name="Universidad"
        value={Universidad}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Carerra"
        name="Carrera"
        value={Carrera}
        onChange={onInputChange}
      />

        <button className = "btn btn-primary" onClick= { ()=> {console.log(Matricula, Nombre, Apellidos, Edad, Universidad, Carrera)} }>Submit</button>

    </>
  );
};
