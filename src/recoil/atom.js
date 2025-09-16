import { atom } from "recoil";

export const PrivateKeyAtom=atom({
    key:"privatekey",
    default:""
})

export const PublicKeyAtom=atom({
    key:"publickey",
    default:""
})
export const SignatureAtom=atom({
    key:"signature",
    default:""
})

export const messageAtom=atom({
    key:"message",
    default:""
})

export const successAtom=atom({
    key:"success",
    default:""
})