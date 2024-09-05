import React from "react";

// new component that extends the react component
class ErrorBoundary extends React.Component {
    // constructor intitalizes the component and passes props to parent
  constructor(props) {
    super(props);
    // state is started with no error has been caught
    this.state = { hasError: false };
  }

//   static method called when error is shown
  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;