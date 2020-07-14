// chapter 1 Alerts
/*
alert("Please Enter a correct password")
alert("Welcome to JS Land \r Happy Codding")
alert("Welcome to JS Land ")
alert("Happy Codding")
alert("Hello, I can run JS through my web browser console")
*/

// chapter 2 Variable and Strings
    /*
    var username
    var myName = "Arsalan Sheikh";
    var age = 20
    var skills = "Certified Mobile App Developer"
    var food = "Pizza";
    var email = "example@gmail.com"
    var book = "A smarter way to learn JavaScript"
    var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
    alert("Hello World");
    alert(myName);
    alert(age + " Years old");
    alert(skills);
    for(var i = 5; i > 0; i--)
    {
        alert(food.slice(0,i));
    }
    alert("My Email address is " + email);
    alert("I am trying to learn " + book);
    document.write("Yah! I can write HTML content thrugh JavaScript")
    alert(str);
    */

// chapter 3 Variable for numbers
    /*
    var age;
    var birthYear;
    age = 20;
    birthYear = "1999"
    alert("I am " + age + " years old")
    // document.write("My birth year is " + birthYear)
    var visitorName = prompt("Enter your name");
    var ProductTitle = prompt("Enter your ProductTitle");
    var Quantity = prompt("how many products you want to order");
    document.write(visitorName + " ordered " + Quantity + " "+ ProductTitle + "(s) on XYZ Clothing store" )
    */

// chapter 4 VARIABLE NAMES: LEGAL & ILLEGAL
    /*
    var var1, var2, var3;
    var legal_variable, legalVariable, legal_Variable, LegalVariable, _legalVariable1_, $legal1Variable; 
    var legal-variable, 1legalVariable, @legalVariable, legalVariable, legal Variable;
    document.writeln("Variable names can only contain numbers, $ and _ . For example $my_1stVariable");
    document.writeln("Variables must begin with a letter, $ and _ .  For example $name, _name or name");
    document.writeln("Variable names are case Sensitive");
    document.writeln("Variable names should not be JS Keywords");
    */

// chapter 5 MATH EXPRESSIONS 

    /* 
    var num1 = parseInt(prompt("Enter first num to add"))
    var num2 = parseInt(prompt("Enter second num to add"))
    */
// Task1: 
    /* 
    var sum = num1 + num2;
    document.write("The sum of " + num1 + " and " + num2 + " is " + sum + "\t");
    */
    
// Task2:
    /*
    var subt = num1 - num2;
    var mult = num1 * num2;
    var div = num1 / num2;
    document.writeln("The subt of " + num1 + " and " + num2 + " is " + subt + "\t"); 
    document.writeln("The mult of " + num1 + " and " + num2 + " is " + mult + "\t"); 
    document.writeln("The div of " + num1 + " and " + num2 + " is " + div + "\t"); 
    */
// Task3:
    /*
    var var1 ;
    document.writeln("Value of un-initialized/Declare variable is " + var1); 
    var1=5;
    document.writeln("Value of after initialized is " + var1); 
    var1++;
    document.writeln("Value after increment is " + var1); 
    var1 += 7;
    document.writeln("Value after addition is " + var1); 
    var1--;
    document.writeln("Value after decrement is " + var1); 
    var1 %= 3
    document.writeln("Value after remainder is " + var1); 
    */
// Task4:  
    /*
    var ticketprice = 600 
    document.write("Total cost to buy 5 tickets to a movie is  " + ticketprice * 5 +"PKR"); 
    */
// Task5:
    /*
    var table = 4;
    var result;
    document.writeln("Table of 4 is: \r\n" ); 
        for(var ind = 1; ind <= 10; ind++)
        {
            result = table * ind;
            document.writeln(table + " x " + ind + " = " + result + "\t\r\n");
        }
    */
// Task6:
    /*
    var c, f;
    var temp = prompt("Write Temperature in ^ oC")

    c =  temp;
    f = (c * 9/5) + 32;


   document.writeln( c +" ^ o C is " + f +" ^ o F and ");
   document.writeln( f +" ^ o F is " + c +" ^ o C ");
   */
// Task7:
    /*
    var price1 = 650;
    var price2 = 100;
    var shippingCharges = 100;

    var quantity1 = parseInt(prompt("Enter Item1 Quantity"));
    var quantity2 = parseInt(prompt("Enter Item2 Quantity"));
    
    document.writeln("Shopping Cart");
    document.writeln("Price of Item 1: " + price1);
    document.writeln("Quantity of item" + quantity1);
    document.writeln("Price of Item 1: " + price2);
    document.writeln("Quantity of item" + quantity2);
    document.writeln("Shipping charges" + shippingCharges);

    var totalCost = (price1 * quantity1) + (price2 * quantity2) + shippingCharges;

    document.writeln("Total cost of your Order: " + totalCost);
    */
//Task8:
   /* 
    var totalMarks = 980
    var marksObtained = 804;

    window.document.writeln("Total Marks : " + totalMarks);
    window.document.writeln("Marks Obtained : " + marksObtained);
    window.document.writeln("Percentage : " + marksObtained * 100 / totalMarks + "%");
    */

//Task9:
   // window.document.writeln("Total currency in PKR: " + (163.48 * 10 + 43.54 * 25));

//Task10:
    /*
    var num = 5;
    window.document.writeln("After sum: ", num + 5,", mult: ", num * 10," ,Div: ", num/2);
    */
//Task11:
    /*
    var current_year = 2020;
    var birth_year = parseInt(prompt("Write your birth year: "));
    document.writeln("Age Calculator:");
    document.writeln("Your Age : ", current_year - birth_year);
    */
//Task12:     
    /*
    var radius = prompt("Enter radius of circle: ");
    var circumference = 2 * Math.PI * radius;
    var area = Math.PI * Math.pow(radius, 2);
    
    document.writeln("The Geometrizer: ");

    document.writeln("radius of circle : ", radius);
    document.writeln("The circumference is : ", circumference);
    document.writeln("The area is : ", area.toFixed(2));
    */
//Task12:
    /*
    var fav_snack = prompt("Enter your favorite snack: ");
    var current_age = prompt("Enter your current age: ");
    var max_age = prompt("Enter your maximum age: ");
    var estimated_amount = prompt("Enter estimated amount per day: ");
    var total = (max_age - current_age) * estimated_amount

    document.write(`The Lifetime Supply Calculator `);
    document.writeln("You will need ", total," ", fav_snack, " to last you until the ripe old age of " , max_age , ".");
    */


// Chapter 6-9 MATH EXPRESSIONS

//Task1:
/*
    var a = 10;
    document.writeln("Result: <br><br>")
    document.write(`The Value of a is: `, a, "<br><br>");

    document.write(`The Value of ++a is: `, ++a, "<br>");
    document.write(`Now the Value of a is: `, a, "<br><br>");

    document.write(`The Value of a++ is: `, a++, "<br>");
    document.write(`Now the Value of a is: `, a, "<br><br>");

    document.write(`The Value of --a is: `, --a, "<br>");
    document.write(`Now the Value of a is: `, a, "<br><br>");

    document.write(`The Value of a-- is: `, a--, "<br>");
    document.write(`Now the Value of a is: `, a, "<br>");
*/

//Task2:
/*
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;

    
    // --a;                     a was 2 after prefix decreament it will become 1 at the same time
    /* 
        --a - --b;               a is 1 
                            and 
                                b was 1 after prefix decreament it will become 0 at the same time
                            so 1 - 0 = 1
    */
    /* 
        --a - --b + ++b;        a is 1, b is 0
                            and after that
                                b was 0 after prefix increament it will become 1 at the same time
                            so the (1) - (0) + (1) = 2
    */
    /* 
        --a - --b + ++b + b--;       a is 1, b is 1
                                and
                                    b was 1 after postfix decreament it will remain 1 after this step it will be 0
                                so the (1) - (0) + (1) + (1) = 3
    */
/*
    document.write(`a is : `, a, "<br>");
    document.write(`b is : `, b, "<br>");
    document.write(`result is : `, result, "<br>");
*/

//Task3:
    // document.write("<h1> Welcome! <br>",prompt("Enter Your name: ") , " </h1>");

//Task4,5:
/*
    var num = prompt("Enter any number: ")
    var result;
    
    if(num == 0)
    {
        num = 5;
    }
    document.write("<h1> The Table of: ", num, " </h1>" );
    
    for(var ind = 1; ind <= 10; ind++)
    {
        result = num * ind;
        document.write(num, "x", ind, " = ", result, "<br>");
    }
*/

//Task6:
/*
    var subj1 = prompt("Enter first subject name: ")
    var subj2 = prompt("Enter second subject name: ")
    var subj3 = prompt("Enter third subject name: ")
    
    var totalmarks = 100

    var marksObtd1 = parseInt(prompt("Enter obtained marks in first subject: "))
    var marksObtd2 = parseInt(prompt("Enter obtained marks in second subject: "))
    var marksObtd3 = parseInt(prompt("Enter obtained marks in third subject: "))
    
    var percentage1 = marksObtd1 * 100 / totalmarks
    var percentage2 = marksObtd2 * 100 / totalmarks
    var percentage3 = marksObtd3 * 100 / totalmarks

    document.write
    (`
    <table>
        <tr>
            <th>
                Subjects  &nbsp; &nbsp;
            </th>
            <th>
                total marks  &nbsp; &nbsp;
            </th>
            <th>
                obtained marks &nbsp; &nbsp;
            </th>
            <th>
                percentage
            </th>
        </tr>
        <tr>
            <td>`, subj1, `</td>
            <td>`, totalmarks, `</td>
            <td>`, marksObtd1, `</td>
            <td>`, percentage1, `%</td>
        </tr>
        <tr>
            <td>`, subj2, `</td>
            <td>`, totalmarks, `</td>
            <td>`, marksObtd2, `</td>
            <td>`, percentage2, `%</td>
        </tr>
        <tr>
            <td>`, subj3, `</td>
            <td>`, totalmarks, `</td>
            <td>`, marksObtd3, `</td>
            <td>`, percentage3, `%</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><b></b></td>
            <td><b>`, totalmarks*3, `</b></td>
            <td><b>`, marksObtd1 + marksObtd2 + marksObtd3, `</b></td>
            <td><b>`, (percentage1 + percentage2 + percentage3) / 3, `% </b></td>
        </tr>
    </table>
    `);
*/    

// Chapter 9-11
//Task1:
/*
    var citname = prompt("Enter City name");
    if(citname === "Karachi" || citname === "karachi")
    {
        document.write("“Welcome to city of lights”");
    }
*/
//Task2:
/*
    var gender = prompt("Enter your gender");
    if(gender === "Male" || gender === "male" )
    {
        document.write("Good Morning Sir.");
    }
    else if(gender === "Female" || gender === "female" )
    {
        document.write("Good Morning Ma’am.");
    }
    else {
        document.write("Good Morning Sir Ma’am.");
    }
*/

//Task3:
/*
    var  trafficsignal = prompt("Enter color of road traffic signal");
    if(trafficsignal == "red" || trafficsignal == "Red")
    {
        document.write(`<h1 style="color: red" >Must Stop</h1>`);
    }
    else if(trafficsignal == "yellow" || trafficsignal == "Yellow")
    {
        document.write(`<h1 style="color: yellow" >Ready to move</h1>`);
    }
    else if(trafficsignal == "green" || trafficsignal == "Green")
    {
        document.write(`<h1 style="color: green" >Move now</h1>`);
    }
*/

//Task4:
/*
    var fuel = prompt("How much fuel is remaining ?");
    if(fuel < "0.25litres")
    {
        document.write("Please refill the fuel in your car");
    }
*/

//Task5:
/*
    var a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");
    }                                                   // displayed

    var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");    // not displayed
    }

    var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");                       // displayed
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");                       // displayed
    }

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");                           // displayed
    }

    if (true){
    alert("True");                                      // displayed
    }
    if (false){
    alert("False");
    }
    // User Input & Conditional Statement | JAVASCRIPT
    // Page 3 of 4

    if("car" < "cat"){
    alert("car is smaller than cat");                   // displayed
    }
*/
//Task6:
/*
    var subj1 = "English";
    var subj2 = "Urdu";
    var subj3 = "Physics";

    var totalmarks = 300

    var marksObtd1 = parseInt(prompt("Enter obtained marks in first: " + subj1))
    var marksObtd2 = parseInt(prompt("Enter obtained marks in second subject: " + subj2))
    var marksObtd3 = parseInt(prompt("Enter obtained marks in third subject: " + subj3))

    var percentage1 = marksObtd1 * 100 / totalmarks
    var percentage2 = marksObtd2 * 100 / totalmarks
    var percentage3 = marksObtd3 * 100 / totalmarks 

    var grade, compute;

    if(percentage1 >= 80 || percentage1 <= 100)
    {
        grade = "A-One";
        compute = "Excellent"
    }
    else if(percentage1 >= 70)
    {
        grade = "A";
        compute = "Good"
    }
    else if(percentage1 >= 60)
    {
        grade = "B";
        compute = "You need to improve"
    }
    else
    {
        grade = "Fail";
        compute = "Sorry"
    }
    document.write("<h1>Marks Sheet</h1>");

    document.write("Total Marks: " + totalmarks + '<br>');
    document.write("Marks Obtained:", (marksObtd1 + marksObtd2 + marksObtd3), '<br>');
    document.write("Percentage: ", (percentage1 + percentage2 + percentage3), '<br>');
    document.write("Grade: " + grade + '<br>');
    document.write("Remarks: " + compute + '<br>');

*/

Task7:
/*
    var secretnumber = 4;
    var guessnumber = prompt("Enter any guess number: ")
    if(guessnumber == secretnumber)
    {
        document.write("“Bingo! Correct answer.” <br>");
    }
    else if(guessnumber == secretnumber + 1)
    {
        document.write("“Close enough to the correct answer”. <br>");
    }
    else{
        document.write("“Sorry! incorrect answer”. <br>");
    }
*/

//Task8:
/*
    divisibleNumber = 3;
    var input = prompt("Enter any number to check divisible by 3");
    if(input % divisibleNumber == 0){
        document.write("divisible by 3");
    }
    else{
        document.write("not divisible by 3");
    }
*/

//Task9:
/*
    var input = prompt("Enter any number to even or an odd number");
    if(input % 2 == 0){
        document.write("It is even number");
    }
    else{
        document.write("It is odd number");
    }
*/
//Task10:
/*
    var inputTemperature = prompt("Enter any temperature: ");
    if(inputTemperature > 40){
        document.write(" “It is too hot outside.”");
    }
    else if(inputTemperature > 30){
        document.write(" “The Weather today is Normal”");
    }
    else if(inputTemperature > 20){
        document.write(" “Today’s Weather is cool.”");
    }
    else if(inputTemperature > 10){
        document.write("“OMG! Today’s weather is so Cool”");
    }
*/
//Task11:
/*
    var num1 = parseInt(prompt("Enter any First number: "));
    var num2 = parseInt(prompt("Enter any Second number: "));
    var op =prompt("Enter any Operation: ");
    var result;
    if(op == '+'){
        result = num1 + num2;
    }
    else if(op == '-'){
        result = num1 - num2;
    }
    else if(op == '*'){
        result = num1 * num2;
    }
    else if(op == '/'){
        result = num1 / num2;
    }
    document.write(" The result is: " + result);
*/

//Chapter 12 and 13
//Task1:
/*
    var input = prompt("Enter any Letter: ").charCodeAt();

    if(input >= 97 && input <= 122){
        document.write(" It is lower case letter");
    }
    else if(input >= 65 && input <= 90){
        document.write(" It is uppercase letter");
    }
    else
    {
        document.write(" It is letter");
    }
*/
//Task2:
/*
    var num1 = parseInt(prompt("Enter any First number: "));
    var num2 = parseInt(prompt("Enter any Second number: "));

    if(num1 > num2){
        document.write(num1, " is Larger");
    }
    else if(num1 < num2){
        document.write(num2, " is Larger");
    }
    else{
        document.write("Both number are equals");
    }
*/
//Task3
/*
var num = parseInt(prompt("Enter any number: "));
if(num > 0){
    document.write(num, "  number is positive");
}
else if(num < 0){
    document.write(num, "  number is negative");
}
else if(num == 0){
    document.write(num, " number is zero");
}
else {
    document.write(" not a number");
}
*/

//Task4:
/*
    var char1 = prompt("Enter any character: ");
    if(char1 == 'A' || char1 == 'E' || char1 == 'I' || char1 == 'O' || char1 == 'U')
    {
        document.write(  true);
    }
    else if(char1 == 'a' || char1 == 'e' || char1 == 'i' || char1 == 'o' || char1 == 'u')
    {
        document.write(  true);
    }
    else {
        document.write(false);
    }
*/
//Task5:
/*
    var pass = prompt("Enter Password: ");
    if(pass === ""){
        alert("Please Enter your password!");
    }
    else{
    var Confpass = prompt("Enter Confirm Password: ");
        if(pass === Confpass)
        {
            alert("Correct! The password you entered matches the original password");
        }
        else{
            alert("Incorrect password");
        }
    }
*/
//Task6: 
/*  // Fixed
    var greeting;
    var hour = 13;
    if (hour < 18) 
        greeting = "Good day";
    else
        greeting = "Good evening";

    alert(greeting); 
*/
// Task7:
/*
    var inputTime = prompt("Enter Time in GST Format (Like: 19:00) : ");
    inputTime = parseInt(inputTime.replace(':', ''));
    if((inputTime >= 0000 ||  inputTime >= 2400) && inputTime <= 1200)
    {
        document.write("Good Morning");
    }
    else if(inputTime >= 1200 && inputTime < 1700)
    {
        document.write("Good Afernoon");
    }
    else if(inputTime >= 1700 && inputTime < 2100)
    {
        document.write("Good Evening");
    }
    else if(inputTime >= 2100 && inputTime < 2359)
    {
        document.write("Good Night");
    }
    else{
        document.write("Sorry! Wrong Format ...");
    }
*/
//Chapter 14-16
//Task1:

// var studentsName = []

// alert("All Students: \n" + students);

//Task8:
/*
    var studentnames = ["Shoaib", "Sohail", "Sohaib"];
    var score = [320, 280, 480];
    var totalMarks = 500;

    document.write("Score of ", studentnames[0], " is ", score[0], ". Percentage: ", score[0]*100/500, "% <br>");
    document.write("Score of ", studentnames[1], " is ", score[1], ". Percentage: ", score[1]*100/500, "% <br>");
    document.write("Score of ", studentnames[2], " is ", score[2], ". Percentage: ", score[2]*100/500, "% <br>");
*/
//Task9:
    // var color_names = [5];
    // color_names[0] = prompt("Enter any color to add in the beginning : ");
    // document.write(`<h1 style="text-align: center; margin-top:200px; color:`, color_names[0], `">`,
    //                         color_names[0],
    //                 `</h1>`);

    
    // color_names[4] = prompt("Enter any color to add at the end : ");
    // document.write(`<h1 style="text-align: center; margin-top:200px; color:`, color_names[4], `">`,
    //                         color_names[4],
    //                 `</h1>`);

    // color_names[4] = prompt("Enter any color to add at the end : ");
    // document.write(`<h1 style="text-align: center; margin-top:200px; color:`, color_names[4], `">`,
    //                         color_names[4],
    //                 `</h1>`);
    // color_names[4] = prompt("Enter any color to add at the end : ");
    // document.write(`<h1 style="text-align: center; margin-top:200px; color:`, color_names[4], `">`,
    //                         color_names[4],
    //                 `</h1>`);

//Task10:
/*
    var  studentscores = [320, 280, 480, 120];
    document.write("Scores of students: ", studentscores, '<br>');

    document.write("Ordered scores of students: ", studentscores.sort());
*/

//Task11:
/*
    var citynames= ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
    var selectedCities= citynames.slice(2, 4);
*/

//Task12:
/*
    document.write("Cities Lists: ", citynames, '<br>');
    document.write("Selected Cities: ", selectedCities);
*/

//Task13:
/*
    var devices = [3]
    devices[0]= prompt("Enter 1st device: ");
    devices[1]= prompt("Enter 2nd device: ");
    devices[2]= prompt("Enter 3rd device: ");

    document.write("Devices: ", devices, '<br>');
    document.write(devices[0], '<br>',devices[1], '<br>' ,devices[2], '<br>'  );
*/

//Task14:
/*
    var devices = [3]
    devices[0]= prompt("Enter 1st device: ");
    devices[1]= prompt("Enter 2nd device: ");
    devices[2]= prompt("Enter 3rd device: ");

    document.write("Devices: ", devices, '<br>');
    document.write(devices[2], '<br>',devices[1], '<br>' ,devices[0], '<br>'  );

*/
//Task15:
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
// document.write
//             (
//                 `
//                 <select>
//                     <option value="">`,manufacturers[0],`</option>
//                     <option value="">`,manufacturers[1],`</option>
//                     <option value="">`,manufacturers[2],`</option>
//                     <option value="">`,manufacturers[3],`</option>
//                     <option value="">`,manufacturers[4],`</option>
//                     <option value="">`,manufacturers[5],`</option>
//                 </select>
//                 `
//             );
