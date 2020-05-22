
    var arr1 = [10];
    var ind1=0, ind2 = 1;
    var div = [10];
    var empty = 0;

    var btnAdd = document.querySelector('.btnAdd');
    btnAdd.addEventListener('click', btnAddToList);

          function btnAddToList(){
              var inputTextContent = document.querySelector(".input-text").value;
              
              while(ind1<10)
              {
                  arr1[ind1] = inputTextContent;
                  console.log(arr1[ind1]);
                  break;
              }
              ListItems();
          }
          function ListItems(){
            
            var listItems = document.querySelector(".todo-list-items" + ind1)
            
            listItems.textContent = arr1[ind1]
            ind1++;

            var get1 = document.getElementById("col" + ind1)
            get1.innerHTML="delete";

            if(ind1 == 10)
            {
                ind1 = 0;
            }
            //     //btnAddToList();
            //     var br = document.createElement('br')
            //     var div = document.createElement('div')
            
            // //     get2.appendChild(br);
            // if(empty < 10)
            // {
            //     while(ind1-1 <10)
            //     {
            //         div[ind1-1] = document.createElement('div')
            //         div[ind1-1].innerHTML = "Delete"
            //         div[ind1-1].setAttribute('id', 'divDeleteBox' + ind1);
            //         get1.appendChild(div[ind1-1]);
            //         break;
            //     }debugger
            //     empty++;
            // }
            // else{
            //     div[ind1-1].innerHTML = "Delete"
            // }
           
                
            // document.addEventListener('DOMContentLoaded', function() {
            //     var div = document.createElement('br');
 
              
            //     //document.body.appendChild(br);
            //   }, false);



            // for (let index = 0; index < arr1.length; index++) {
            //     listItems.textContent = arr1[index];
            //     listItems.textContent = arr1.join("\r");
            //   }
            //   listItems.forEach((listItems) => {
            //     listItems.textContent = arr1.join("\n");
            //     console.log(arr1.join("\n"));
            //   })
          }
 
    var dvDelete1 = document.getElementById("col1");
    var dvDelete2 = document.getElementById("col2");
    var dvDelete3 = document.getElementById("col3");
    var dvDelete4 = document.getElementById("col4");
    var dvDelete5 = document.getElementById("col5");
    var dvDelete6 = document.getElementById("col6");
    var dvDelete7 = document.getElementById("col7");
    var dvDelete8 = document.getElementById("col8");
    var dvDelete9 = document.getElementById("col9");
    var dvDelete10= document.getElementById("col10");

    dvDelete1.addEventListener('click', DeleteItem1);
    dvDelete2.addEventListener('click', DeleteItem2);
    dvDelete3.addEventListener('click', DeleteItem3);
    dvDelete4.addEventListener('click', DeleteItem4);
    dvDelete5.addEventListener('click', DeleteItem5);
    dvDelete6.addEventListener('click', DeleteItem6);
    dvDelete7.addEventListener('click', DeleteItem7);
    dvDelete8.addEventListener('click', DeleteItem8);
    dvDelete9.addEventListener('click', DeleteItem9);
    dvDelete10.addEventListener('click', DeleteItem10);

    function DeleteItem1(){
        document.querySelector(".todo-list-items0").textContent = "";
        document.querySelector("#col1").textContent = "";

    }
    function DeleteItem2(){
        document.querySelector(".todo-list-items1").textContent = "";
        document.querySelector("#col2").textContent = "";

    }
    function DeleteItem3(){
        document.querySelector(".todo-list-items2").textContent = "";
        document.querySelector("#col3").textContent = "";

    }
    function DeleteItem4(){
        document.querySelector(".todo-list-items3").textContent = "";
        document.querySelector("#col4").textContent = "";

    }
    function DeleteItem5(){
        document.querySelector(".todo-list-items4").textContent = "";
        document.querySelector("#col5").textContent = "";

    }
    function DeleteItem6(){
        document.querySelector(".todo-list-items5").textContent = "";
        document.querySelector("#col6").textContent = "";

    }
    function DeleteItem7(){
        document.querySelector(".todo-list-items6").textContent = "";
        document.querySelector("#col7").textContent = "";

    }
    function DeleteItem8(){
        document.querySelector(".todo-list-items7").textContent = "";
        document.querySelector("#col8").textContent = "";

    }
    function DeleteItem9(){
        document.querySelector(".todo-list-items8").textContent = "";
        document.querySelector("#col9").textContent = "";

    }
    function DeleteItem10(){
        document.querySelector(".todo-list-items9").textContent = "";
        document.querySelector("#col10").textContent = "";

    }
        //   listItems.forEach((result) => {
        //     result.addEventListener('click', btnAddToList)
        //   })










       

