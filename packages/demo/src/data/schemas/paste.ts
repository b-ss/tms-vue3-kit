export const SampleSchema = {
  type: 'object',
  title: '复制描述的内容，粘贴到address',
  properties: {
    name: {
      type: 'string',
    },
    address: {
      type: 'object',
    },
    age: {
      type: 'number',
    },
  },
}

export const SampleData = {
  name: 'xyz',
}

export const SamplePasted = {
  name: 'abc',
  address: { city: 'beijing' },
  age: 100,
}
