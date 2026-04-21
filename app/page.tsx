'use client';

import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function CRMLandingPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    company: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your authentication logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 flex min-h-screen">
          {/* Left side - Hero content */}
          <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-16 xl:px-24">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-2 rounded-full">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white font-bold tracking-wider text-sm">NEXUS CRM</span>
                </div>
              </div>
              
              <h1 className="text-6xl xl:text-7xl font-black text-white leading-tight">
                Relationships.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  Amplified.
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Transform how you connect with customers. Intelligent automation, 
                real-time insights, and seamless collaboration—all in one platform.
              </p>

              <div className="flex items-center space-x-12 pt-4">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-white">50K+</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">Active Users</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-white">98%</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">Satisfaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-white">24/7</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">Support</div>
                </div>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 border-4 border-slate-900 flex items-center justify-center text-white font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-slate-400">
                  Join thousands of teams already using Nexus
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Auth form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
              {/* Mobile logo */}
              <div className="lg:hidden mb-8 text-center">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-2 rounded-full">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white font-bold tracking-wider text-sm">NEXUS CRM</span>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
                {/* Toggle buttons */}
                <div className="flex bg-slate-800/50 rounded-2xl p-1 mb-8">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isLogin
                        ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      !isLogin
                        ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {!isLogin && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          required={!isLogin}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Inc."
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          required={!isLogin}
                        />
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      required
                    />
                  </div>

                  {isLogin && (
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center text-slate-300">
                        <input type="checkbox" className="mr-2 rounded" />
                        Remember me
                      </label>
                      <button type="button" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </button>

                  {!isLogin && (
                    <p className="text-xs text-slate-400 text-center leading-relaxed">
                      By creating an account, you agree to our{' '}
                      <button type="button" className="text-cyan-400 hover:underline">
                        Terms of Service
                      </button>{' '}
                      and{' '}
                      <button type="button" className="text-cyan-400 hover:underline">
                        Privacy Policy
                      </button>
                    </p>
                  )}
                </form>

                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-transparent text-slate-400">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-all">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>
                      Google
                    </button>
                    <button className="flex items-center justify-center px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-all">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-slate-400">
                Need help?{' '}
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Contact Support
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Analytics />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
}
