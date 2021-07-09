
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal"

Modal.setAppElement('#root');

export function App() {

  const[isNewTransactionModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function handleOpenNewTransactionsModal() {
      setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionsModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal= {handleOpenNewTransactionsModal}/>

      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}