import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Crearprodu = () => {
const HandleSubmit = (e) => {e.preventDefault ();
    console.log("desde submit");}  

    return (
        <div className='container py-3 my-3'>
            <div className='text-center'><h2>Crear Productos</h2></div>
            <Form onSubmit={HandleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Titulo</Form.Label>
        <Form.Control type="text" placeholder="Ingrese nombre del producto" minLength={5} maxLength={50}/>
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder="Ingrese una descripcion"as="textarea" rows={3} minLength={10} maxLength={200} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label> Categoria </Form.Label>
      <Form.Select aria-label="categoria" className='conatiner py-3 my-3'>
      <option value=""> Seleccione una opcion</option>
      <option value="Papas fritas">Papas fritas</option>
      <option value="Mani tostado">Mani tostado</option>
      <option value="Varios">Varios </option>
    </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form> 
        </div>
    );
};

export default Crearprodu;