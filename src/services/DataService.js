const data = [
    {
        type: '1',
        topic_name: 'Markets',
        doc_num: "246"
    },
    {
        type: '2',
        topic_name: 'Business Sector',
        doc_num: "44444444"
    },
    {
        type: '3',
        topic_name: 'Events',
        doc_num: "321698"
    },
    {
        type: '3',
        topic_name: 'Business Events',
        doc_num: "1"
    },
    {
        type: '2',
        topic_name: 'Deals',
        doc_num: "44444444"
    },
]
function getData() {
    let id = 0
    return new Promise((resolve, reject)=> {
        resolve(data.map(item => ({...item, type: +item.type, doc_num: +item.doc_num, id: id++})))
    })
    

}

export default {
    getData
}