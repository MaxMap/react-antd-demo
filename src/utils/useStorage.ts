import React from 'react';

/**
 * localStorage 持久化数据
 *
 * @param {*} key
 * @param {*} initVal 初始值，支持数组，对象
 * @return {*}
 */
const useStateWithLocalStorage = (key:string, initVal:any) => {

  let preStr;
  try {
    let localStr = localStorage.getItem(key);
    if (localStr === undefined) {
      localStr = null; // 避免解析时报错，SyntaxError
    }
    preStr = JSON.parse(localStr as string); // 反序列化
  } catch (error) {
    console.error('useStateWithLocalStorage :>> ', error);
  }

  let [value, setValue] = React.useState(preStr || initVal);

  React.useEffect(() => {
    localStorage.setItem(String(key), JSON.stringify(value)); // 序列化
  }, [value]);

  return [value, setValue];
};

export {
    useStateWithLocalStorage
};