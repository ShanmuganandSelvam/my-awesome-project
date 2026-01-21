import React, { useState } from 'react'
import Button from '@element/react-button'
import TextField from '@element/react-text-field'
import Card from '@element/react-card'
import './styles/bayer-theme.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', { email, password })
    // Add your login logic here
  }

  return (
    <div className="min-h-screen lmnt-theme-surface-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold lmnt-theme-primary mb-2">
              Welcome Back
            </h1>
            <p className="lmnt-theme-on-surface text-sm">
              Sign in to your account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <TextField
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                fullWidth
              />
            </div>

            <div>
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                fullWidth
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="showPassword" className="text-sm lmnt-theme-on-surface">
                  Show password
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-sm lmnt-theme-on-surface">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm lmnt-theme-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              variant="primary"
              type="submit"
              className="w-full lmnt-theme-primary-bg lmnt-theme-on-primary"
            >
              Sign In
            </Button>

            <Button
              variant="outlined"
              type="button"
              className="w-full lmnt-theme-primary-border lmnt-theme-primary"
            >
              Create Account
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t lmnt-theme-divider-primary">
            <p className="text-center text-sm lmnt-theme-on-surface">
              By signing in, you agree to our{' '}
              <a href="#" className="lmnt-theme-primary hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="lmnt-theme-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm lmnt-theme-on-surface">
            © 2024 Bayer. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App