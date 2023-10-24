import React from "react";
import { createContext, useState } from "react";
import {
  TModalProviderProps,
  TModalOptions,
  TModalContextValues,
} from "./@types";


export const ModalContext = createContext({} as TModalContextValues);

export const ModalProvider = ({ children }: TModalProviderProps) => {
  const [modal, setModal] = useState<TModalOptions>(null);

  const closeModal = () => {
    setModal(null);
    document.body.style.overflow = "unset";
  };

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

