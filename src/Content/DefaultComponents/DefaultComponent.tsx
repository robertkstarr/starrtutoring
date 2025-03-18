import InnerComponent, { InnerComponentProps } from "./InnerComponent";

const DefaultComponent = (props: InnerComponentProps) => {
  return <InnerComponent width="100vw" {...props} />;
};

export default DefaultComponent;
