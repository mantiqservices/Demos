import { useEffect, useRef } from 'react'
import { initMantiq } from './engine/mantiq.js'
import { injectStyles } from './engine/styles.js'

export default function App() {
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true

    // Inject custom CSS
    injectStyles()

    // Set body classes (same as original HTML)
    document.body.className =
      'bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen locked-ui overflow-x-hidden'
    document.body.setAttribute('dir', 'ltr')

    // Init the app after DOM is painted
    requestAnimationFrame(() => {
      initMantiq()
    })
  }, [])

  return (
    <>
      <div id="app" className="min-h-screen" />
      <div
        id="notification-container"
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          zIndex: 110,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
