import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/style';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'video padrao',
    url: 'https://www.youtube.com/watch?v=2iDD2LK7uCI',
    categoria: 'Front end',
  });

  return (
    <>
      <PageDefault>
        <h1>Cadastro de video</h1>

        <form onSubmit={(event) => {
          event.preventDefault();

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: 1,
          })
            .then(() => {
              // eslint-disable-next-line no-console
              console.log('deu bom a inscricao');
              history.push('/');
            });
        }}
        >
          <FormField
            label="Título do vídeo"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL do video"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria do video"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <Link to="/cadastro/categoria">
          Cadastrar categoria
        </Link>
      </PageDefault>
    </>
  );
}

export default CadastroVideo;
