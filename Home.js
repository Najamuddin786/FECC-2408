
async function getPosts() {
    try {
        let res=await fetch(`https://jsonplaceholder.typicode.com/posts`)
        let final=await res.json()
        showItem(final)
        console.log(final)
    } catch (error) {
        console.log(error)
    }
    
}

let page=1;

function handle(up){
    page =up;
    showItem()
}


function showItem(final){
    let main=document.getElementById('main')
    let pa=document.getElementById('page')
    let view='10'
    
    let length=final.length;
    let filter=final.filter((e,i)=>{
        let a=view*page
        let les=a-view
        if( i<a){
            if(les<=i){
                return e
            }
        }
    })

   let ne= Math.round(length/view)
   for(let i=1;i<=ne;i++){
        let con=document.createElement('div')
            con.innerText=i
            con.onClick=()=>handle(i)
            pa.append(con)

   }
        

    filter.map((e,i)=>{
            
            let container=document.createElement("div")
                container.id='container'
                container.className='bg'
                
            let title=document.createElement("div")
                title.innerText=`Title : ${e.title}`
                title.id='title'
            let id=document.createElement("div")
                id.innerText=`Id : ${e.id}`
                id.id='id'
            let body=document.createElement("div")
                body.innerText=`${e.body}`
                body.id='body'
            container.append(title,id,body)
            main.append(container)
    })

}



getPosts()