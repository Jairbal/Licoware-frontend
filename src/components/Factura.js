import React from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { facturaSetActive } from '../actions/facturas';
import {Wrapper, Title, SecondaryText, RightIcon} from '../componentsStyles/Factura';

export default function Factura({factura}) {

    const {_id, numero, proveedor, fecha, credito, fechaMaxPago, metodoPago} = factura;
    const fechaFormateada = DateTime.fromISO(fecha).toLocaleString(DateTime.DATE_FULL);
    const fechaMaxPagoFormateada = DateTime.fromISO(fechaMaxPago).toLocaleString(DateTime.DATE_FULL);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClickProveedor = () => {
        history.push(`/facturas/${_id}`)
        dispatch(facturaSetActive(factura));
      }

    return (
        <Wrapper>
             <Title>{numero}</Title>
             <Title>{proveedor.nombre}</Title>
             <SecondaryText>{`Fecha de factura: ${fechaFormateada}`}</SecondaryText>
             {credito && <SecondaryText>{`Pagar hasta: ${fechaMaxPagoFormateada}`}</SecondaryText>}
             <SecondaryText>{`Pagado con: ${metodoPago}`}</SecondaryText>
             <RightIcon onClick={handleClickProveedor}/>
        </Wrapper>
    )
}
