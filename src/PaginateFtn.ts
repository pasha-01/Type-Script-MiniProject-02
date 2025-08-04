export{paginate}
function paginate <T, > (items: T[], pageSize: number, pageNumber: number) :T[]{
    const start = ( pageNumber -1 ) * pageSize;
    return items.slice (start , start + pageSize)
}
