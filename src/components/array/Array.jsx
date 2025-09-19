// Map（映射） ：

// - 用于 转换 数组中的每个元素
// - 返回一个 长度相同 的新数组
// Filter（过滤/只保留） ：

// - 用于 筛选 数组中符合条件的元素
// - 返回一个 长度可能不同 的新数组


import { useState } from "react"

const Array = () => {
  const [array, setArray] = useState([1,2,3,4,5])

  // Map 操作 - 转换元素
  const Map = () =>{
    setArray(array.map((item)=> item==3 ? null : item))
    // 结果：[1, 2, null, 4, 5] - 数组长度不变，但元素3被转换为null
  }
  
  // Filter 操作 - 过滤元素  
  const Filter = () =>{
    setArray(array.filter((item)=> item!=3))
    // 结果：[1, 2, 4, 5] - 数组长度变短，元素3被完全移除
  }


  return (
    <div>
      <ul>
        {array.map((item)=> <li key = {Math.random()}>{item}</li>)}
      </ul>
      <button onClick={Map}>Map array</button>
      <br/>
      <button onClick={Filter}>Filter array</button>
    </div>
  )
}

export default Array