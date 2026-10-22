import { lazy, Suspense } from 'react'
import Loading from './Loading.jsx'

const Servicios = lazy(() => import('../pages/Servicios.jsx'))

export function ServiciosEnCarga() {
  return (
    <Suspense fallback={<Loading />}>
      <Servicios />
    </Suspense>
  )
}
