let count=0;

document.getElementById('increamentbtn')
.addEventListener('click', function(){
    count++;
    document.getElementById('counter').value=count;
});

document.getElementById('decreamentbtn')
.addEventListener('click', function(){
    count--;
    document.getElementById('counter').value=count;
})

