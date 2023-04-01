import { useState } from "react"

export const useDisclosure = (defaultIsOpen: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  return {
    isOpen,
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(false),
    toggleOpen: () => setIsOpen(state => !state)
  }
}