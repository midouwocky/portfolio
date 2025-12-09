import React, { Component } from "react";

class SvgIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useFallback: false,
    };
  }

  handleError = (error) => {
    console.error('SVG loading error:', error);
    this.setState({ useFallback: true });
  };

  render() {
    const { src, alt, className } = this.props;
    const publicUrl = process.env.PUBLIC_URL || '';
    // Ensure we don't have double slashes
    const basePath = publicUrl.endsWith('/') ? publicUrl.slice(0, -1) : publicUrl;
    const svgPath = basePath 
      ? `${basePath}/assets/icons/${src}`
      : `/assets/icons/${src}`;

    // Use img tag directly for better production reliability
    return (
      <img
        src={svgPath}
        alt={alt || ''}
        className={className}
        style={{ 
          width: '1em', 
          height: '1em', 
          filter: 'brightness(0) invert(1)', 
          display: 'block',
          objectFit: 'contain'
        }}
        onError={(e) => {
          console.error('Failed to load SVG:', svgPath);
          this.handleError();
        }}
      />
    );
  }
}

export default SvgIcon;

