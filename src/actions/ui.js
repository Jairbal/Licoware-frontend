const { types } = require("../types");

export const cambioPagina = (titlePage) => ({
    type: types.uiCambioPagina,
    payload: titlePage
})