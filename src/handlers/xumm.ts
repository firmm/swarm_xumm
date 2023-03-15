const Xumm = async request => {
const md = request.params.md  
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/x-www-form-urlencoded'
  }
console.log('MD: ',md)  
return new Response('Swarm Message Accepted', { status: 200 })
}

export default Xumm
