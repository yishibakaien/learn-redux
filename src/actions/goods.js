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

const asyncAdd = () => {
  return async dispatch => {
    let result = await a();
    if (result === 'a') {
      dispatch({type: 'ADD'});
    }
  }
}

function a() {
  return new Promise(res => {
    setTimeout(() => res('a'), 1000);
  });
}

export {
  add,
  dec,
  asyncAdd
};