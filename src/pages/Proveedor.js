import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import Delete from "../icons/Delete";
import Edit from "../icons/Edit";
import { changePage } from "../actions/ui";
import {
  proveedorDeleteAsync,
  proveedorGetOneAsync,
  proveedorIsEditing,
  proveedorModal,
  proveedorSetActive,
  showFormNewContactoAction,
} from "../actions/proveedores";
import ContactoProveedor from "../components/ContactoProveedor";
import { FormContacto } from "../components/ui/forms/FormContacto";
import Add from "../icons/Add";
import { FormProveedor } from "../components/ui/forms/FormProveedor";
import { ConfirmationMessage } from "../components/ui/ConfirmationMessage";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  margin: 100px 24px 74px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const AddButton = styled(Add)`
  right: 0;
  bottom: 0;
  position: fixed;
  margin-bottom: 74px;
  margin-right: 24px;
`;

export default function Proveedor(props) {
  const id = props.match.params._id;
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    active: proveedor,
    showFormNewContacto,
    isEditing,
    modal,
  } = useSelector((state) => state.proveedores);

  const { nombre, direccion, telefono, contactos, _id } = proveedor;

  useEffect(() => {
    if (!!proveedor) {
      dispatch(proveedorGetOneAsync(id));
    }
    return () => {
      dispatch(
        proveedorSetActive({
          nombre: "",
          direccion: "",
          telefono: "",
          contactos: [],
        })
      );
    };
    // eslint-disable-next-line
  }, [dispatch, id]);

  useEffect(() => {
    if (isEditing) {
      dispatch(changePage(`PROVEEDORES > EDITANDO - ${nombre}`));
    } else if (showFormNewContacto) {
      dispatch(changePage(`PROVEEDORES > ${nombre} > NUEVO CONTACTO`));
    } else {
      dispatch(changePage(`PROVEEDORES > ${nombre}`));
    }
  }, [dispatch, nombre, isEditing, showFormNewContacto]);

  const handleButtonAddProveedor = () => {
    dispatch(showFormNewContactoAction(true));
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClickEdit = () => {
    dispatch(proveedorIsEditing(true));
  };

  const handleClickDelete = () => {
    dispatch(proveedorModal());
  };

  const handleClickCancelDelete = () => {
    dispatch(proveedorModal());
  };

  const handleDelete = () => {
    dispatch(proveedorDeleteAsync(_id));
    dispatch(proveedorModal());
    history.push("/proveedores");
  };

  return (
    <Wrapper>
      <ConfirmationMessage
        close={handleClickCancelDelete}
        onAccept={handleDelete}
        isOpen={modal}
        title={`¿Está seguro de eliminar al proveedor ${nombre}?`}
        message={"Todos sus contactos también seran eliminados"}
      />
      <Head>
        <Delete onClick={handleClickDelete} />
        <Info>
          <h2>{nombre}</h2>
          <p>{direccion}</p>
          <p>{telefono}</p>
        </Info>
        <Edit onClick={handleClickEdit} />
      </Head>
      {isEditing && <FormProveedor />}
      {showFormNewContacto && <FormContacto proveedorId={id} />}
      {contactos.map((contacto) => (
        <ContactoProveedor key={contacto._id} contacto={contacto} />
      ))}
      <AddButton onClick={handleButtonAddProveedor} />
    </Wrapper>
  );
}
