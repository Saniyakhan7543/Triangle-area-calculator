

    function Area(){
        var a,b,c;
        a=Number(document.getElementById("first").value);
        b=Number(document.getElementById("second").value);
        c=1/2*(a*b);
        document.getElementById("answer").innerHTML= c;
        }