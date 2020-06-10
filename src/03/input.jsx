import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class input extends PureComponent {
  constructor(porps) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChnage.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChnage) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if (this.props.autoFucus) {
      this.refs.focus();
    }
  }
  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.refs.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <label>
        {label}
        <input
          id={`input_${name}`}
          ref={this.setRef}
          onChnage={this.handleChange}
          onFocus={onFocus}
          value={value}
          type={type}
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChnage: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text',
};

export default input;
