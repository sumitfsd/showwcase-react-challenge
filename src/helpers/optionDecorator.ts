export default function optionDecorator(list: { name: string }[]) {
  return list.map(({ name }) => ({
    value: name,
    label: name,
  }));
}
