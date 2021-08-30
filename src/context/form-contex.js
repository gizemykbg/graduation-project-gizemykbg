import { useState, useEffect, createContext } from 'react';

const FormContext = createContext({});
return <FormContext.Provider value={values}>{children}</FormContext.Provider>;

function FormProvider() {
  return <div></div>;
}

export default FormContext;
