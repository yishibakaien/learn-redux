const add = (data) => {
  return {
    type: 'ADD'
  }
}

const dec = () => {
  return {
    type: 'DEC'
  }
}

export {
  add,
  dec
};