export default function optionDecorator(list) {
  return list.map(({ name }) => ({
    value: name, label: name
  }))
}
