'use client'

import { useRouter } from "next/router"
import { createContext, useState, useContext } from "react";

const Context = createContext()


const Provider = ({ children }) => {
    const router = useRouter()
}
