import React, { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled UI error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          color: '#f4f4f5',
          fontFamily: 'Inter, sans-serif',
          padding: '24px',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '500px',
            padding: '32px',
            borderRadius: '16px',
            backgroundColor: '#18181b',
            border: '1px solid #27272a'
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f87171', marginBottom: '8px' }}>
              Something went wrong loading the portfolio
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#a1a1aa', marginBottom: '16px' }}>
              {this.state.error?.message || 'An unexpected rendering error occurred.'}
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                backgroundColor: '#800020',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.875rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
