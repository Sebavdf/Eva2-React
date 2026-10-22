import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import { Inicio } from '../pages/Inicio.jsx'

afterEach(cleanup)

describe('Portada NutriVida', () => {
  it('muestra el titulo principal y el acceso a la pagina de servicios', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Nutrición personalizada para cada objetivo',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ver servicios' })).toHaveAttribute(
      'href',
      '/servicios',
    )
  })

  it('incluye la navegacion principal del sitio', () => {
    const { container } = render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>,
    )

    // Acota la búsqueda únicamente dentro del navbar principal
    const navbar = container.querySelector('nav.navbar')
    const navScope = within(navbar)

    expect(navScope.getByRole('link', { name: 'Servicios', exact: true })).toHaveAttribute(
      'href',
      '/servicios',
    )
    expect(navScope.getByRole('link', { name: 'Nosotros', exact: true })).toHaveAttribute(
      'href',
      '/nosotros',
    )
    expect(navScope.getByRole('link', { name: 'Blogs', exact: true })).toHaveAttribute(
      'href',
      '/blogs',
    )
  })

  it('muestra la imagen principal de una consulta nutricional', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('img', { name: 'Nutricionista atendiendo a un paciente en consulta' }),
    ).toHaveAttribute('src', '/img/Nutricionista-atendiendo-consulta.jfif')
  })
})