const { types } = require("../types");

export const changePage = (titlePage) => ({
  type: types.uiChangePage,
  payload: titlePage,
});

export const loadingApp = (value) => ({
  type: types.uiLoadingApp,
  payload: value
});

export const loading = (value) => ({
  type: types.uiLoading,
  payload: value
});

export const uiError = (error) => ({
  type: types.uiError,
  payload: error,
});

export const uiClearError = (error) => ({
  type: types.uiClearError,
});
