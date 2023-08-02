//form validation
var StName = document.getElementById("name");
var roll = document.getElementById("roll");
var dept = document.getElementById("dept");
var cgpa = document.getElementById("cgpa");
var btn = document.getElementById("btn");


btn.addEventListener('click', function (pera) {

    // prevent default method

    pera.preventDefault();
    //console.log(StName.value);


    if (StName.value == '') {
        alert("name empty  ");
    }
    else if (roll.value == '') {
        alert("empty roll");

    }
    else if (dept.value == '') {
        alert("empty dept");

    }
    else if (cgpa.value == '') {
        alert("empty cgpa");

    }
    else {
        //alert("success");
        var tbody = document.getElementById("tbody");
        var tr = document.createElement('tr');
        //for name      
        var td = document.createElement('td');
        // console.log(tr);

        td.innerHTML = StName.value;
        tr.appendChild(td);



        //for id     
        var td1 = document.createElement('td');
        // console.log(tr);
        td1.innerHTML = roll.value;
        tr.appendChild(td1);

        //for department    
        var td2 = document.createElement('td');
        // console.log(tr);
        td2.innerHTML = dept.value;
        tr.appendChild(td2);


        //for cgpa     
        var td3 = document.createElement('td');
        // console.log(tr);
        td3.innerHTML = cgpa.value;
        tr.appendChild(td3);




        tbody.appendChild(tr);


    }


});