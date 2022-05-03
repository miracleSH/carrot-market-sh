import { useState } from 'react'

interface UseMutationState<Type> {
  loading: boolean
  data?: Type
  error?: object
}

type UseMutationResult<Type> = [(data: any) => void, UseMutationState<Type>]

export default function useMutation<Type = any>(url: string): UseMutationResult<Type> {
  const [state, setState] = useState<UseMutationState<Type>>({
    loading: false,
    data: undefined,
    error: undefined,
  })
  function mutation(data: any) {
    setState(prev => ({ ...prev, loading: true }))
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json().catch(() => {}))
      .then(data => {
        setState(prev => ({ ...prev, data }))
      })
      .catch(error => {
        setState(prev => ({ ...prev, error }))
      })
      .finally(() => {
        setState(prev => ({ ...prev, loading: false }))
      })
  }

  return [mutation, { ...state }]
}
