import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/style';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaServer) => {
        const resposta = await respostaServer.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Front End é mo legal hein',
    //       cor: '#6bd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Back End é mo nice hein',
    //       cor: '#6bd1ff',
    //     },
    //   ]);
    // }, 2 * 1000);
  }, []);

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de categoria:
          {values.nome}
        </h1>

        <form onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);

          setValues(valoresIniciais);
        }}
        >

          <FormField
            label="Nome da categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.nome}
            onChange={handleChange}
          />

          <Button>
            Cadastrar
          </Button>
        </form>

        {categorias.length === 0 && (
        <div>
          Loading...
        </div>
        )}

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.nome}`}>
              {categoria.nome}
            </li>
          ))}
        </ul>

        <Link to="/">
          Ir para a Home
        </Link>
      </PageDefault>
    </>
  );
}

export default CadastroCategoria;
