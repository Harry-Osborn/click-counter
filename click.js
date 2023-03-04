const click_button = document.getElementsByClassName("button");

const counter = document.getElementsByClassName("counter");

const clickanything = document.getElementsByTagName("body");

// this is for total_clicks.html page

if(counter[0].innerText == "0 clicks"){

    let count=0;

    click_button[0].addEventListener("click",(e)=>{
        count++;
        counter[0].innerText = count + " clicks";
    })

    clickanything[0].addEventListener("keypress",(e)=>{
        count++;
        counter[0].innerText = count + " clicks";
    })
    
    let score_count = 0;

    click_button[1].addEventListener("click",(e)=>{  //this is for score button
        score_count++;
        counter[0].innerText = "0 clicks";

        const display = document.getElementsByClassName("scores");
        const table = document.getElementsByTagName("table");

        const row = document.createElement("tr");
        const table_data1 = document.createElement("td");
        const table_data2 = document.createElement("td");

        table_data1.innerText= score_count;
        row.appendChild(table_data1);
        table_data2.innerText= count;
        row.appendChild(table_data2);
        display[0].appendChild(row);

        count = 0;

        if(score_count==1){
            let table = document.getElementsByTagName("table");
            table[0].style.visibility="visible";
        }
    })

    click_button[2].addEventListener("click",(e)=>{  //this id for reset button
        const table_elements = document.getElementsByClassName("scores");


        while (table_elements[0].hasChildNodes()) {
            table_elements[0].removeChild(table_elements[0].firstChild);
        }

        score_count = 0;
        counter[0].innerText = "0 clicks";
    })
}




//this is for cps.html

if(counter[0].innerText == "0 CPS"){

    let count=0;
    let seconds = 0; 
    let milliseconds = 0; 
    let minutes = 0;
    let stopwatch = document.getElementsByClassName("timer");
    let timer_minutes = document.getElementsByClassName("minutes");
    let timer_seconds = document.getElementsByClassName("seconds");
    let timer_milliseconds = document.getElementsByClassName("milliseconds");
    let interval;
    let score=0;

    click_button[0].addEventListener("click",(e)=>{
        stopwatch[0].style.display = "block";
        count++;
        clearInterval(interval);
        interval = setInterval(stop_watch,10);
    })

    clickanything[0].addEventListener("keypress",(e)=>{
        stopwatch[0].style.display = "block";
        count++;
        clearInterval(interval);
        interval = setInterval(stop_watch,10);
    })


    function stop_watch(){
        milliseconds++;

        if(seconds>0){
            score = parseFloat(count/(minutes*60+seconds)).toFixed(2);
            counter[0].innerText = score + " CPS";
        }
        
        if(milliseconds <= 9){
            timer_milliseconds[0].innerHTML = "0" + milliseconds;
        }

        if(milliseconds > 9){
            timer_milliseconds[0].innerHTML = milliseconds;
        }

        if(milliseconds > 99){
            seconds++;

            if(seconds <= 9){
                timer_seconds[0].innerHTML = "0" + seconds;
                timer_milliseconds[0].innerHTML = "0" + 0;
                milliseconds = 0;  
            }
    
            if(seconds > 9){
                timer_seconds[0].innerHTML = seconds;
                timer_milliseconds[0].innerHTML = "0" + 0;
                milliseconds = 0;    
            }
        }

        if(seconds > 59){
            minutes++;

            if(minutes <= 9){
                timer_minutes[0].innerHTML = "0" + minutes;
                timer_seconds[0].innerHTML = "0" + 0;
                seconds = 0;  
            }
    
            if(minutes > 9){
                timer_minutes[0].innerHTML = minutes;
                timer_seconds[0].innerHTML = "0" + 0;
                seconds = 0;  
            }
        }
    }

    let score_count = 0;

    click_button[1].addEventListener("click",(e)=>{  //this is for score button
        score_count++;
        counter[0].innerText = "0 CPS";

        clearInterval(interval);

        const display = document.getElementsByClassName("scores");
        const table = document.getElementsByTagName("table");

        const row = document.createElement("tr");
        const table_data1 = document.createElement("td");
        const table_data2 = document.createElement("td");

        table_data1.innerText= score_count;
        row.appendChild(table_data1);
        table_data2.innerText= score;
        row.appendChild(table_data2);
        display[0].appendChild(row);

        count = 0;
        score = 0;
        seconds = 0;
        milliseconds = 0;
        minutes = 0;

        timer_minutes[0].innerHTML = "0"+0;
        timer_seconds[0].innerHTML = "0"+0;
        timer_milliseconds[0].innerHTML = "0"+0;


        if(score_count==1){
            let table = document.getElementsByTagName("table");
            table[0].style.visibility="visible";
        }
    })

    click_button[2].addEventListener("click",(e)=>{  //this id for reset button
        const table_elements = document.getElementsByClassName("scores");


        while (table_elements[0].hasChildNodes()) {
            table_elements[0].removeChild(table_elements[0].firstChild);
        }

        clearInterval(interval);
        counter[0].innerText = "0 CPS";

        score_count = 0;
        count = 0;
        score = 0;
        seconds = 0;
        milliseconds = 0;
        minutes = 0;

        timer_minutes[0].innerHTML = "0"+0;
        timer_seconds[0].innerHTML = "0"+0;
        timer_milliseconds[0].innerHTML = "0"+0;
    })
}



// //this is for cpm.html

if(counter[0].innerText == "0 CPM"){

    let count=0;
    let seconds = 0; 
    let milliseconds = 0; 
    let minutes = 0;
    let stopwatch = document.getElementsByClassName("timer");
    let timer_minutes = document.getElementsByClassName("minutes");
    let timer_seconds = document.getElementsByClassName("seconds");
    let timer_milliseconds = document.getElementsByClassName("milliseconds");
    let interval;
    let score=0;

    click_button[0].addEventListener("click",(e)=>{
        stopwatch[0].style.display = "block";
        count++;
        clearInterval(interval);
        interval = setInterval(stop_watch,10);
    })

    clickanything[0].addEventListener("keypress",(e)=>{
        stopwatch[0].style.display = "block";
        count++;
        clearInterval(interval);
        interval = setInterval(stop_watch,10);
    })


    function stop_watch(){
        milliseconds++;

        if(seconds%2==0 && seconds>0){
            score = parseFloat((count/(minutes*60+seconds))*50).toFixed(2);
            counter[0].innerText = score + " CPM";
        }
        
        if(milliseconds <= 9){
            timer_milliseconds[0].innerHTML = "0" + milliseconds;
        }

        if(milliseconds > 9){
            timer_milliseconds[0].innerHTML = milliseconds;
        }

        if(milliseconds > 99){
            seconds++;

            if(seconds <= 9){
                timer_seconds[0].innerHTML = "0" + seconds;
                timer_milliseconds[0].innerHTML = "0" + 0;
                milliseconds = 0;  
            }
    
            if(seconds > 9){
                timer_seconds[0].innerHTML = seconds;
                timer_milliseconds[0].innerHTML = "0" + 0;
                milliseconds = 0;    
            }
        }

        if(seconds > 59){
            minutes++;

            if(minutes <= 9){
                timer_minutes[0].innerHTML = "0" + minutes;
                timer_seconds[0].innerHTML = "0" + 0;
                seconds = 0;  
            }
    
            if(minutes > 9){
                timer_minutes[0].innerHTML = minutes;
                timer_seconds[0].innerHTML = "0" + 0;
                seconds = 0;  
            }
        }
    }

    let score_count = 0;

    click_button[1].addEventListener("click",(e)=>{  //this is for score button
        score_count++;
        counter[0].innerText = "0 CPM";

        clearInterval(interval);

        const display = document.getElementsByClassName("scores");
        const table = document.getElementsByTagName("table");

        const row = document.createElement("tr");
        const table_data1 = document.createElement("td");
        const table_data2 = document.createElement("td");

        table_data1.innerText= score_count;
        row.appendChild(table_data1);
        table_data2.innerText= score;
        row.appendChild(table_data2);
        display[0].appendChild(row);

        count = 0;
        score = 0;
        seconds = 0;
        milliseconds = 0;
        minutes = 0;

        timer_minutes[0].innerHTML = "0"+0;
        timer_seconds[0].innerHTML = "0"+0;
        timer_milliseconds[0].innerHTML = "0"+0;


        if(score_count==1){
            let table = document.getElementsByTagName("table");
            table[0].style.visibility="visible";
        }
    })

    click_button[2].addEventListener("click",(e)=>{  //this id for reset button
        const table_elements = document.getElementsByClassName("scores");


        while (table_elements[0].hasChildNodes()) {
            table_elements[0].removeChild(table_elements[0].firstChild);
        }

        clearInterval(interval);
        counter[0].innerText = "0 CPM";

        score_count = 0;
        count = 0;
        score = 0;
        seconds = 0;
        milliseconds = 0;
        minutes = 0;

        timer_minutes[0].innerHTML = "0"+0;
        timer_seconds[0].innerHTML = "0"+0;
        timer_milliseconds[0].innerHTML = "0"+0;
    })
}