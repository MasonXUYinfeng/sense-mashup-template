export const setData = (state, { dataName, data }) => {
  if (Array.isArray(dataName)) {
    if (dataName.length == 0) {
      // console.log('storeName长度不能为0')
    }
    else if (dataName.length == 1) {
      state[dataName[0]] = data;
    }
    else if (dataName.length == 2) {
      state[dataName[0]][dataName[1]] = data;
    }
    else if (data.length == 3) {
      state[dataName[0]][dataName[1]][dataName[2]] = data;
    }
    else if (data.length > 3) {
      // console.log('storeName长度超过3')
    }
  }
  else if (typeof dataName === 'string') {
    state[dataName] = data;
  }
}



