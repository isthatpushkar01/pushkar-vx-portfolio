import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  sectionName?: string;
  compact?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error?.message || 'Unexpected rendering error.',
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error(
        `[PUSHKAR.VX ErrorBoundary${this.props.sectionName ? ` :: ${this.props.sectionName}` : ''}]`,
        error,
        info.componentStack
      );
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, errorMessage: '' });
  };

  render(): React.ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    if (this.props.compact) {
      return (
        <div
          role="alert"
          className="rounded-2xl border border-[#2C2C38] bg-[#0D0D14] p-5 text-center font-mono text-xs text-[#A1A1AA] flex flex-col items-center justify-center gap-3"
        >
          <div className="flex items-center gap-2 text-[#FF8A32] font-bold">
            <AlertTriangle className="w-4 h-4" />
            <span>{this.props.sectionName ? `${this.props.sectionName} temporarily unavailable` : 'Module temporarily unavailable'}</span>
          </div>
          <button
            type="button"
            onClick={this.handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181822] hover:bg-[#222230] border border-[#2E2E3E] text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retry Module</span>
          </button>
        </div>
      );
    }

    return (
      <div
        role="alert"
        className="min-h-[260px] my-8 mx-auto max-w-3xl rounded-2xl border border-[#2E2E3C] bg-[#0B0B10] p-8 text-center font-mono flex flex-col items-center justify-center gap-4 shadow-2xl"
      >
        <div className="w-11 h-11 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/40 flex items-center justify-center text-[#FF8A32]">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-base font-display font-bold text-white uppercase">
            {this.props.sectionName ? `${this.props.sectionName} Recovery Mode` : 'System Interface Recovery'}
          </h3>
          <p className="text-xs text-[#8E8E93] max-w-md mx-auto leading-relaxed">
            A display subsystem encountered an unexpected state and was safely isolated so the rest of the portfolio stays responsive.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={this.handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF6A00] hover:bg-[#FF8A32] text-black font-bold text-xs uppercase transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restore Section</span>
          </button>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#16161F] hover:bg-[#20202C] text-white border border-[#2C2C3A] text-xs uppercase transition-colors cursor-pointer"
          >
            <span>Reload Page</span>
          </button>
        </div>
      </div>
    );
  }
}
