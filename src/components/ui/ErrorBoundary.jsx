import { Component } from 'react';
import Banner from '../layout/Banner';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ServerErrorPage from '../pages/ServerErrorPage';

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null, errorInfo: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Banner />
          <Header />
          <main>
            <ServerErrorPage />
          </main>
          <Footer />
          {import.meta.env.DEV && this.state.error && (
            <div className="w-full max-w-[85%] mx-auto px-6 pb-16">
              <details className="text-left max-w-2xl mx-auto">
                <summary className="text-text-muted cursor-pointer">Error details (development only)</summary>
                <pre className="mt-4 p-4 bg-surface rounded border border-border overflow-auto text-sm text-text-muted">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            </div>
          )}
        </>
      );
    }

    return this.props.children;
  }
}
