import fetch from "node-fetch";
let url='https://api.juejin.cn/tag_api/v1/query_category_briefs';
fetch(url,{
    method:'GET'
})
.then(async res=>{
    let {data } = await res.json()
    data.forEach(item =>{
        console.log(`rank：${item.rank}  ${item.category_name}`);
    })
})
.catch(err => {
    console.log('Error:',err.message);
})