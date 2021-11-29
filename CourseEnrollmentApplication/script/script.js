var userautoincrementId = 1002;
var requieddayspercourse;
var courseid = 1000;
var coursename;
var userIdvalue;
var user = /** @class */ (function () {
    function user(id, name, age, phonenumber) {
        this.userid = id;
        this.username = name;
        this.age = age;
        this.phonenumber = phonenumber;
    }
    return user;
}());
var enroled = /** @class */ (function () {
    function enroled(U_id, C_id, C_name, R_days) {
        this.userid = U_id;
        this.courseid = C_id;
        this.coursename = C_name;
        this.requireddays = R_days;
    }
    return enroled;
}());
var userlist = new Array();
var enrolled = new Array();
userlist.push(new user("C1001", "jana", 20, 7094626538));
userlist.push(new user("C1002", "prem", 20, 8526369824));
enrolled.push(new enroled("C1001", "course1001", "CSS", 2));
enrolled.push(new enroled("C1002", "course1002", "html", 5));
function newuserfunction() {
    var newuser = document.getElementById("newuser").style.display = "block";
    var menu = document.getElementById("menu").style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phonenumber").value = "";
}
function registerfunction() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phonenumber = document.getElementById("phonenumber").value;
    if (name == "" && age == "" && phonenumber == "") {
        alert("All fields are required");
    }
    else {
        ++userautoincrementId;
        var id = "C" + userautoincrementId;
        userlist.push(new user(id, name, +age, +phonenumber));
        var choose = confirm(name + "your id number is" + id);
        if (choose == true) {
            var newuser = document.getElementById("newuser").style.display = "none";
            var menu = document.getElementById("menu").style.display = "block";
        }
    }
}
function loginfunction() {
    var Login = document.getElementById("Login").style.display = "block";
    var menu = document.getElementById("menu").style.display = "none";
    document.getElementById("userId").value = "";
}
function loginfunction2() {
    var userId = document.getElementById("userId").value;
    var count = 0;
    for (var i = 0; i < userlist.length; i++) {
        if (userId == userlist[i].userid) {
            document.getElementById("coursedetails").style.display = "block";
            document.getElementById("Login").style.display = "none";
            count = count + 1;
            userIdvalue = userId;
        }
        else {
            count = count + 0;
        }
    }
    if (count == 0) {
        alert("Invalid user Id");
    }
}
function availablecourse() {
    document.getElementById("checkbox_available").style.display = "block";
    document.getElementById("coursedetails").style.display = "none";
}
function csharpfunction() {
    var csharp = document.getElementById("csharp");
    if (csharp.checked == true) {
        document.getElementById("c#days").innerHTML = "4 days";
        requieddayspercourse = 4;
    }
    else {
        document.getElementById("c#days").innerHTML = "";
    }
}
function htmlfunction() {
    var html = document.getElementById("html");
    if (html.checked == true) {
        document.getElementById("htmldays").innerHTML = "5 days";
        requieddayspercourse = 5;
    }
    else {
        document.getElementById("htmldays").innerHTML = "";
    }
}
function cssfunction() {
    var css = document.getElementById("css");
    if (css.checked == true) {
        document.getElementById("cssdays").innerHTML = "2 days";
        requieddayspercourse = 2;
    }
    else {
        document.getElementById("cssdays").innerHTML = "";
    }
}
function javascriptfunction() {
    var javascript = document.getElementById("javascript");
    if (javascript.checked == true) {
        document.getElementById("javascriptdays").innerHTML = "5 days";
        requieddayspercourse = 5;
    }
    else {
        document.getElementById("javascriptdays").innerHTML = "";
    }
}
function typescript() {
    var typescript = document.getElementById("typescript");
    if (typescript.checked == true) {
        document.getElementById("typescriptdays").innerHTML = "1 days";
        requieddayspercourse = 1;
    }
    else {
        document.getElementById("typescriptdays").innerHTML = "";
    }
}
function enrolledbuttonfunction() {
    var csharp = document.getElementById("csharp");
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var javascript = document.getElementById("javascript");
    var typescript = document.getElementById("typescript");
    ++courseid;
    var cid = "Course" + courseid;
    if (csharp.checked == true) {
        var count = 0;
        coursename = csharp.value;
        for (var i = 0; i < enrolled.length; i++) {
            if (userIdvalue == enrolled[i].userid) {
                if (coursename == enrolled[i].coursename) {
                    alert("Already enrolled");
                    count = count + 1;
                }
                else {
                    count = count + 0;
                }
            }
        }
        if (count == 0) {
            enrolled.push(new enroled(userIdvalue, cid, coursename, requieddayspercourse));
        }
    }
    if (html.checked == true) {
        var count = 0;
        coursename = html.value;
        for (var i = 0; i < enrolled.length; i++) {
            if (userIdvalue == enrolled[i].userid) {
                if (coursename == enrolled[i].coursename) {
                    alert("Already enrolled");
                    count = count + 1;
                }
                else {
                    count = count + 0;
                }
            }
        }
        if (count == 0) {
            enrolled.push(new enroled(userIdvalue, cid, coursename, requieddayspercourse));
        }
    }
    if (css.checked == true) {
        var count = 0;
        coursename = css.value;
        for (var i = 0; i < enrolled.length; i++) {
            if (userIdvalue == enrolled[i].userid) {
                if (coursename == enrolled[i].coursename) {
                    alert("Already enrolled");
                    count = count + 1;
                }
                else {
                    count = count + 0;
                }
            }
        }
        if (count == 0) {
            enrolled.push(new enroled(userIdvalue, cid, coursename, requieddayspercourse));
        }
    }
    if (javascript.checked == true) {
        var count = 0;
        coursename = javascript.value;
        for (var i = 0; i < enrolled.length; i++) {
            if (userIdvalue == enrolled[i].userid) {
                if (coursename == enrolled[i].coursename) {
                    alert("Already enrolled");
                    count = count + 1;
                }
                else {
                    count = count + 0;
                }
            }
        }
        if (count == 0) {
            enrolled.push(new enroled(userIdvalue, cid, coursename, requieddayspercourse));
        }
    }
    if (typescript.checked == true) {
        var count = 0;
        coursename = typescript.value;
        for (var i = 0; i < enrolled.length; i++) {
            if (userIdvalue == enrolled[i].userid) {
                if (coursename == enrolled[i].coursename) {
                    alert("Already enrolled");
                    count = count + 1;
                }
                else {
                    count = count + 0;
                }
            }
        }
        if (count == 0) {
            enrolled.push(new enroled(userIdvalue, cid, coursename, requieddayspercourse));
        }
    }
    document.getElementById("checkbox_available").style.display = "none";
    document.getElementById("menu").style.display = "block";
}
function enrolledcourse() {
    document.getElementById("enrolled").style.display = "block";
    document.getElementById("coursedetails").style.display = "none";
    var message = document.getElementById("message");
    var requireddays = 0;
    for (var i = 0; i < enrolled.length; i++) {
        if (userIdvalue == enrolled[i].userid) {
            message.innerHTML += "UserID:".concat(enrolled[i].userid, "<br>COURSE NAME:").concat(enrolled[i].coursename, "<br>requireddays").concat(enrolled[i].requireddays, "days<br>");
            requireddays = requireddays + enrolled[i].requireddays;
        }
    }
    document.getElementById("totaldays").innerHTML = "Total:".concat(requireddays);
}
function closefunction() {
    document.getElementById("enrolled").style.display = "none";
    document.getElementById("checkbox_available").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("message").innerHTML = "";
}
