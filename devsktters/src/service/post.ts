async function getPosts() {
    let res  = await fetch('http://localhost:8080/posts/')
    
    if (!res.ok) {
      throw 'upsi'
    }
    const data = await res.json()
    return data
    
  }

  async function getPost(id:string){
    let res  = await fetch(`http://localhost:8080/posts/${id}`)
    
    if (!res.ok) {
      throw 'upsi'
    }
    const data = await res.json()
    return data
    
  }

  export {
    getPosts,
    getPost
  }