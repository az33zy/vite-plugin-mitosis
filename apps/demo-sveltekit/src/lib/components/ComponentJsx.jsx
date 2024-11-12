export default function ComponentJsx({ name, children }) {
  return (
    <div css={{ color: 'green', border: '1px solid red', padding: '1rem' }}>
      <p>Hello {name} from JSX component</p>
      {children}
    </div>
  );
}
