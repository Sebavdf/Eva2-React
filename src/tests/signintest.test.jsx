import '@testing-library/jest-dom/vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import { Login } from '../pages/Login.jsx'

afterEach(cleanup)

describe('Formulario de acceso NutriVida', () => {
  it('presenta campos de correo y contraseña con sus validaciones', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    )

    const email = screen.getByRole('textbox', { name: 'Correo' })
    const password = screen.getByLabelText('Contraseña')

    expect(email).toHaveAttribute('type', 'email')
    expect(email).toBeRequired()
    expect(email).toHaveAttribute('maxlength', '100')
    expect(password).toHaveAttribute('type', 'password')
    expect(password).toBeRequired()
    expect(password).toHaveAttribute('minlength', '4')
    expect(password).toHaveAttribute('maxlength', '10')
    expect(screen.getByRole('button', { name: 'Iniciar sesión' })).toBeInTheDocument()
  })

  it('rechaza un correo con formato invalido', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    )

    const email = screen.getByRole('textbox', { name: 'Correo' })
    fireEvent.change(email, { target: { value: 'correo-invalido' } })

    expect(email).toBeInvalid()
  })
})
