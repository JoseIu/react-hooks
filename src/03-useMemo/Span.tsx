type SpanProps = {
  value: number;
};
const Span = ({ value }: SpanProps) => {
  console.log('ME VOLVÍ A GENERAR');
  return <div>{value}</div>;
};
export default Span;
