'use client'
import { api } from "../utils/react"

export default function Page() {

    const result = api.auth.getSecretMessage.useQuery();
    return <>Home {result.data}</>
}