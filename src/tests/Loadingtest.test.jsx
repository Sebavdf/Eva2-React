import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Suspense, lazy } from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import Loading from '../components/Loading.jsx'

afterEach(cleanup)

describe('Estado de carga', () => {
  it('muestra un indicador accesible mientras cargan los servicios', () => {
    render(<Loading />)

    expect(screen.getByRole('status')).toHaveTextContent('Cargando servicios...')
    expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite')
  })

  it('reemplaza el indicador por el contenido cuando termina la carga', async () => {
    const ServiciosCargados = lazy(() =>
      Promise.resolve({ default: () => <h1>Servicios disponibles</h1> }),
    )

    render(
      <Suspense fallback={<Loading />}>
        <ServiciosCargados />
      </Suspense>,
    )

    expect(screen.getByRole('status')).toHaveTextContent('Cargando servicios...')
    expect(await screen.findByRole('heading', { name: 'Servicios disponibles' })).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
