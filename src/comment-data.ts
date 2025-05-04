interface DataComments{
    id: number
    email: string
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<DataComments[]> => {
    try{
        const response = await fetch(url)
    if(!response.ok){
        throw Error(`Request error. Error name: ${response.status}`)
    }
    const data: DataComments[] = await response.json() 
    return data
    }catch(error){
        console.error(`Error message: ${error}`)
        return []
    }

}

getData(COMMENTS_URL)
  .then(data => {
      data.forEach(item=>{
         console.log(`ID: ${item.id}, Email: ${item.email}`)
     })
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */