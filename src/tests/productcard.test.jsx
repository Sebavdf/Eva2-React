import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import { Inicio } from '../pages/Inicio.jsx'

afterEach(cleanup)

describe('Tarjetas de servicios NutriVida', () => {
  it('muestra seis tarjetas de servicios', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>,
    )

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
  })

  it('muestra imagen, precio y enlace de agendamiento para un servicio', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>,
    )

    const title = screen.getByRole('heading', { name: 'Plan de pérdida de peso' })
    const card = title.closest('article')

    expect(card).not.toBeNull()
    expect(within(card).getByRole('img', { name: 'Servicio de pérdida de peso' })).toHaveAttribute(
      'src',
      '/img/perdidaPeso.jfif',
    )
    expect(within(card).getByText('Plan de control de peso $25.000')).toBeInTheDocument()
    expect(within(card).getByRole('link', { name: 'Agendar hora' })).toHaveAttribute(
      'href',
      '/servicios',
    )
  })

  it('presenta las otras especialidades nutricionales', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'Control metabólico' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Nutrición deportiva' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Vegetariana / vegana' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Nutrición infantil' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Embarazo y lactancia' })).toBeInTheDocument()
  })
})
