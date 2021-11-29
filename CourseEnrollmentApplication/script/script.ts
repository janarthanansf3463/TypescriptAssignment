let userautoincrementId=1002;
let requieddayspercourse:number;
let courseid=1000;
let coursename;
let userIdvalue;
class user{
    username:string;
    age:number;
    phonenumber:number;
    userid:string;
    constructor(id:string,name:string,age:number,phonenumber:number){
        this.userid=id;
        this.username=name;
        this.age=age;
        this.phonenumber=phonenumber;
    }
}
class enroled {
    userid:string;
    courseid:string;
    coursename:string;
    requireddays:number;
    constructor(U_id:string,C_id:string,C_name:string,R_days:number) {
        this.userid=U_id;
        this.courseid=C_id;
        this.coursename=C_name;
        this.requireddays=R_days;
    }
}
let userlist:Array<user> =new Array<user>();
let enrolled:Array<enroled>=new Array<enroled>();
userlist.push(new user("C1001","jana",20,7094626538));
userlist.push(new user("C1002","prem",20,8526369824));
enrolled.push(new enroled("C1001","course1001","CSS",2));
enrolled.push(new enroled("C1002","course1002","html",5));
function newuserfunction(){
    let newuser=document.getElementById("newuser").style.display="block";
    let menu=document.getElementById("menu").style.display="none";
    (document.getElementById("name")as HTMLInputElement).value="";
    (document.getElementById("age")as HTMLInputElement).value="";
    (document.getElementById("phonenumber") as HTMLInputElement).value="";
    
    
}
function registerfunction(){
    let name=(document.getElementById("name")as HTMLInputElement).value;
    let age=(document.getElementById("age")as HTMLInputElement).value;
    let phonenumber=(document.getElementById("phonenumber") as HTMLInputElement).value;

    if(name==""&&age==""&&phonenumber==""){
        alert("All fields are required");
    }
    else{
        ++userautoincrementId
        let id="C"+userautoincrementId;
        userlist.push(new user(id,name,+age,+phonenumber))
        let choose=confirm(name+"your id number is"+id);
        if(choose==true){
            let newuser=document.getElementById("newuser").style.display="none";
            let menu=document.getElementById("menu").style.display="block";
        }
    }
}
function loginfunction(){
    let Login=document.getElementById("Login").style.display="block";
    let menu=document.getElementById("menu").style.display="none";
    (document.getElementById("userId")as HTMLInputElement).value="";
    
}
function loginfunction2(){
    let userId=(document.getElementById("userId")as HTMLInputElement).value;
    let count=0;
    for(let i:number=0;i<userlist.length;i++){
        if(userId==userlist[i].userid){
            document.getElementById("coursedetails").style.display="block";
            document.getElementById("Login").style.display="none";
            count=count+1;
            userIdvalue=userId;
        }
        else{
            count=count+0;
        }
    }
    if(count==0){
        alert("Invalid user Id");
    }
}
function availablecourse(){
    document.getElementById("checkbox_available").style.display="block";
    document.getElementById("coursedetails").style.display="none";
}
function csharpfunction(){
    let csharp =document.getElementById("csharp")as HTMLInputElement;
    if(csharp.checked==true){
       document.getElementById("c#days").innerHTML="(4 days)";
       requieddayspercourse=4;
       
    }
    else{
        document.getElementById("c#days").innerHTML="";
    }
    
}
function htmlfunction(){
    let html =document.getElementById("html")as HTMLInputElement;
    if(html.checked==true){
        document.getElementById("htmldays").innerHTML="(5 days)";
        requieddayspercourse=5;
        
     }
     else{
         document.getElementById("htmldays").innerHTML="";
     }
}
function cssfunction(){
    let css =document.getElementById("css")as HTMLInputElement;
    if(css.checked==true){
        document.getElementById("cssdays").innerHTML="(2 days)";
        requieddayspercourse=2;
     }
     else{
         document.getElementById("cssdays").innerHTML="";
     }
}
function  javascriptfunction(){
    let javascript =document.getElementById("javascript")as HTMLInputElement;
    if(javascript.checked==true){
        document.getElementById("javascriptdays").innerHTML="(5 days)";
        requieddayspercourse=5;
     }
     else{
         document.getElementById("javascriptdays").innerHTML="";
     }
}
 
 function typescript(){
    let typescript =document.getElementById("typescript")as HTMLInputElement;
    if(typescript.checked==true){
        document.getElementById("typescriptdays").innerHTML="(1 days)";
        requieddayspercourse=1;
     }
     else{
         document.getElementById("typescriptdays").innerHTML="";
     }
 }
 
function enrolledbuttonfunction(){
    let csharp =(document.getElementById("csharp")as HTMLInputElement);
    let html =(document.getElementById("html")as HTMLInputElement);
    let css =(document.getElementById("css")as HTMLInputElement);
    let javascript =(document.getElementById("javascript")as HTMLInputElement);
    let typescript =(document.getElementById("typescript")as HTMLInputElement);
    ++courseid;
    let cid="Course"+courseid;
   
    if(csharp.checked==true){
        let count=0;
        coursename=csharp.value;
        for(let i=0;i<enrolled.length;i++){
            if(userIdvalue==enrolled[i].userid){
                if(coursename==enrolled[i].coursename){
                    alert("Already enrolled");
                    count=count+1;
                }
                else{
                    count=count+0;
                }
            }
        }
        if(count==0){
            enrolled.push(new enroled(userIdvalue,cid,coursename,requieddayspercourse));
        }
        
        
    }
    if(html.checked==true){
        let count=0;
        coursename=html.value;
        for(let i=0;i<enrolled.length;i++){
            if(userIdvalue==enrolled[i].userid){
                if(coursename==enrolled[i].coursename){
                    alert("Already enrolled");
                    count=count+1;
                }
                else{
                    count=count+0;
                }
            }
        }
        if(count==0){
            enrolled.push(new enroled(userIdvalue,cid,coursename,requieddayspercourse));
        }
       
       
        
    }
    if(css.checked==true){
        let count=0;
        coursename=css.value;
        for(let i=0;i<enrolled.length;i++){
            if(userIdvalue==enrolled[i].userid){
                if(coursename==enrolled[i].coursename){
                    alert("Already enrolled");
                    count=count+1;
                }
                else{
                    count=count+0;
                }
            }
        }
        if(count==0){
            enrolled.push(new enroled(userIdvalue,cid,coursename,requieddayspercourse));
        }
       
      
    }
    if(javascript.checked==true){
        let count=0;
        coursename=javascript.value;
        for(let i=0;i<enrolled.length;i++){
            if(userIdvalue==enrolled[i].userid){
                if(coursename==enrolled[i].coursename){
                    alert("Already enrolled");
                    count=count+1;
                }
                else{
                    count=count+0;
                }
            }
        }
        if(count==0){
            enrolled.push(new enroled(userIdvalue,cid,coursename,requieddayspercourse));
        }
        
      
    }
    if(typescript.checked==true){
        let count=0;
        coursename=typescript.value;
        for(let i=0;i<enrolled.length;i++){
            if(userIdvalue==enrolled[i].userid){
                if(coursename==enrolled[i].coursename){
                    alert("Already enrolled");
                    count=count+1;
                }
                else{
                    count=count+0;
                }
            }
        }
        if(count==0){
            enrolled.push(new enroled(userIdvalue,cid,coursename,requieddayspercourse));
        }
        
        
    } 
     
    document.getElementById("checkbox_available").style.display="none";
    document.getElementById("menu").style.display="block";
    
}
function  enrolledcourse() {
    document.getElementById("enrolled").style.display="block";
    document.getElementById("coursedetails").style.display="none";
    let message=document.getElementById("message");
    let requireddays=0; 
    for(let i:number=0;i<enrolled.length;i++){
        if(userIdvalue==enrolled[i].userid){
            message.innerHTML+=`UserID:${enrolled[i].userid}<br>COURSE NAME:${enrolled[i].coursename}<br>requireddays${enrolled[i].requireddays}days<br>`;
            requireddays=requireddays+enrolled[i].requireddays;
        }
    }
    document.getElementById("totaldays").innerHTML=`Total:${requireddays}`;
    
}
function closefunction() {
    document.getElementById("enrolled").style.display="none";
    document.getElementById("checkbox_available").style.display="none";
    document.getElementById("menu").style.display="block";
    document.getElementById("message").innerHTML="";
}
