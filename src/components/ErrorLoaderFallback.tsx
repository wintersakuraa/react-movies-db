import { FC, ReactNode } from 'react'

import { ErrorFallback, Loader } from 'src/components'

interface ErrorLoaderFallbackProps {
  errors: string[]
  isLoading: boolean
  children: ReactNode
}

export const ErrorLoaderFallback: FC<ErrorLoaderFallbackProps> = ({
  errors,
  isLoading,
  children,
}) => {
  const hasErrors = errors.some((e) => e !== '')
  if (hasErrors) return <ErrorFallback errorMessage={errors.join('\n')} />
  if (isLoading) return <Loader />

  return <>{children}</>
}
