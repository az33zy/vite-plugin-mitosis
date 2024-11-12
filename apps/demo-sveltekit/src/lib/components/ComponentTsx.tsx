// @ts-nocheck

export default function ComponentTsx({
  name,
  children,
}: {
  name?: string;
  children?: any;
}) {
  return (
    <div css={{ color: 'blue', border: '1px solid blue', padding: '1rem' }}>
      Hello {name} from TSX component
      {children}
    </div>
  );
}
