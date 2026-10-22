function Loading() {
  return (
    <main className="loading-state" role="status" aria-live="polite">
      <span className="loading-spinner" aria-hidden="true" />
      <span>Cargando servicios...</span>
    </main>
  )
}

export default Loading
