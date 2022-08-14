var api = "c9facb-aa93ff-9f9a38-41f65b-8b126c";

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var todos = JSON.parse(this.responseText);
        console.log(todos);
        for (i=0; i < todos.length; i++) {
            var list = document.createElement("li");
            list.innerHTML = todos[i].text;
            list.setAttribute("id", todos[i].id);
            list.setAttribute("class", "unchecked");

            
            console.log("we downloaded it!")
            console.log(todos)

            var del = document.createElement('button');
            del.type = 'button';
            del.className = 'delete-button';

            //set id of delete button to id and computer would recognize it 
            del.id = todos[i].id;
            del.addEventListener('click', removetodo);

            //set text of delete button
            del.appendChild(document.createTextNode('Delete'));

            //figuring out the check obx 

            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = todos[i].id;
            checkbox.className = 'checkbox';
            checkbox.addEventListener('click', complete);

            //so if it is true, we check the box and complete it

            if (todos[i].completed === true) {
                checkbox.checked = true;   
                list.style.textDecoration = 'line-through';         
            }
            
            list.appendChild(del);
            list.appendChild(checkbox);
            document.getElementById("Listing").appendChild(list);            
        }
    }
};

xhttp.open("GET", "https://cse204.work/todos", true);
xhttp.setRequestHeader("x-api-key","c9facb-aa93ff-9f9a38-41f65b-8b126c");
xhttp.send();

function addtodo(){
    var todoitem = { text: document.getElementById("Type-box").value };
    var xhttp2 = new XMLHttpRequest();
    console.log("adding your task ma man")
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            // parse JSON response
            var todo = JSON.parse(this.responseText);
            var li = document.createElement("li");
            li.setAttribute("id", todo.id);
            li.setAttribute("class", "unchecked");
            li.innerHTML= document.getElementById("Type-box").value; 
            document.getElementById("Type-box").value="";
            document.getElementById("Listing").appendChild(li);

            console.log(todo);
            var del = document.createElement('button');
            del.type = 'button';
            del.className = 'delete-button';

            //set id of delete button to id of task in API
            del.id = todo.id;
            del.addEventListener('click', removetodo);

            //set text of delete button
            del.appendChild(document.createTextNode('Delete'));
            li.appendChild(del)
            document.getElementById("Listing").appendChild(li);

            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = todo.id;
            checkbox.className = 'checkbox';
            console.log("checkbox is there ma guy");
            checkbox.addEventListener('click', complete);

            
            if (todo.completed === true) {
                checkbox.checked = true;
                li.innerHTML = "<span style='text-decoration:line-through;'>You Did It!</span>";
                
                
            }
            
            li.appendChild(checkbox);
            document.getElementById("Listing").appendChild(li);     

        }
    }

xhttp2.open("POST", "https://cse204.work/todos", true);

xhttp2.setRequestHeader("Content-type", "application/json");
xhttp2.setRequestHeader("x-api-key", "c9facb-aa93ff-9f9a38-41f65b-8b126c");
xhttp2.send(JSON.stringify(todoitem));
console.log("its there!")

}

function removetodo(event) {
    var item = this.parentNode;
    var task_id = event.target.id;

    
    var xhttp3 = new XMLHttpRequest();
    console.log("task_id");

    xhttp3.onreadystatechange = function () {
        console.log("we are trying to delete!");
        if (this.readyState == 4 && this.status == 200) {
            // var todo = JSON.parse(this.responseText);
            console.log('deleted ' + task_id);

            // document.getElementById(task_id).remove();
            
            document.getElementById("Listing").removeChild(item);
        }
        
    }
    xhttp3.open("DELETE", `https://cse204.work/todos/${task_id}`, true);
    xhttp3.setRequestHeader("x-api-key", "c9facb-aa93ff-9f9a38-41f65b-8b126c");
    xhttp3.send();

}

function complete(event){

    var news = {
        
        completed: true
    }

    var item = this.parentNode;
    var task_id = event.target.id;
    
    var xhttp4 = new XMLHttpRequest();
    console.log("task_id!");

    xhttp4.onreadystatechange = function () {
        console.log("good job completing the task");
        if (this.readyState == 4 && this.status == 200) {
            console.log('completed ' + task_id);
            event.target.addEventListener('change', function() {
                if (this.checked) {
                  console.log("Checkbox is checked..");
                 
                } else {
                  console.log("Checkbox is not checked..");
                }
              });
        }
    }
    document.getElementById(task_id).style.textDecoration = 'line-through';
    xhttp4.open("PUT", `https://cse204.work/todos/${task_id}`, true);
    xhttp4.setRequestHeader("Content-type", "application/json");
    xhttp4.setRequestHeader("x-api-key", api);
    xhttp4.send(JSON.stringify(news));
}

function PressEnter(event) {
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
}