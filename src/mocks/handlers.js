import {http, HttpResponse} from 'msw';


export const handlers = [
http.get("/api/all-users",()=>{
  const users=[
    {
      _id:"1",
      name:"Ameer Hamza",
      email:"ameer.hamza@mailinator.com",
      phone:"+92312345678"
    },
    {
      _id:"2",
      name:"Jawad Bilal",
      email:"jawad.bilalmailinator.com",
      phone:"+92312345678"
    },
  ]
  return HttpResponse.json(users);

})
]