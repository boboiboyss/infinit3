import React, {useState} from "react"
import ModalIdentity from "../components/modal/ModalIdentity"

export default function PageDocuments(){
    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);
    return (
          <div className=" min-h-full">
            <h1 className="text-2xl font-bold mb-3">Documents</h1>
            <div className="space-y-3">
                <div className="flex items-center justify-between font-semibold">
                    <span>Proof of Identity</span>
                    <span onClick={openModal} className="text-blue-700 hover:cursor-pointer">Audi's National ID.png</span>
                </div>
                <div className="flex items-center justify-between font-semibold">
                    <span>Financial Records</span>
                    <span className="text-blue-700 hover:cursor-pointer">Audi's Financial Records.pdf</span>
                </div>
            </div>
            <ModalIdentity isOpen={isOpenModal} onClose={closeModal} />
          </div>
    )
}