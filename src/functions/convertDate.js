export const convertDate=(number)=>{
var mydate = new Date(number)
return mydate.getDate()+"/"+(mydate.getMonth()+1);
};