export const asendingSort = (list,property) =>{
  return list.sort((first,second)=> first[property] - second[property])
}