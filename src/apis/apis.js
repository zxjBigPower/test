import axios from "axios"
import qs from "qs"
var url=document.domain;
 var baseUrl,loginUrl;
 if(url==="account.allot.colourlife.com"){
     baseUrl="http://account.allot.colourlife.com/"
     loginUrl="http://check.account.colourlife.com"
 }else{
     baseUrl="http://fzsvr-czytest.colourlife.com/"
     loginUrl='http://check.account.czytest.colourlife.com'
 }
 
 var  instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'}
  });
  var instance1=axios.create({
      headers:{'content-type':'application/json'}
  })
  export const login = params=>{return instance.post(`${loginUrl}/employee/login`, qs.stringify(params)).then(res => res.data).catch(err=>{err})};