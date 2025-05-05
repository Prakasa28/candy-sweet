const StepWrapper = ({ visible, children }) =>
  visible ? <div>{children}</div> : null;

export default StepWrapper;
