import { getAllPatterns } from '../apis/pattern-data'

import { useQuery } from '@tanstack/react-query'

export default function Pattern() {
  const {
    data: patternData,
    isError,
    isLoading,
  } = useQuery(['pattern'], getAllPatterns)

  if (isError) {
    return (
      <div>Sorry! There was an error while trying to list the Patterns!</div>
    )
  }

  if (isLoading) {
    return <div> Loading patterns...</div>
  }

  return (
    <ul>
      {patternData.map((pattern) => (
        <li key={pattern.pattern}>{pattern.pattern}</li>
      ))}
    </ul>
  )
}

// function onlyUnique(value, index, array) {
//   return array.indexOf(value) === index;
// }

// // usage example:
// var a = ['a', 1, 'a', 2, '1'];
// var unique = a.filter(onlyUnique);

// console.log(unique); // ['a', 1, 2, '1']
