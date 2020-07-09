function intro_open(){
    document.getElementById("service").style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('about').style.display = 'none';
}

function service_open(){
    document.getElementById("service").style.display = 'block';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('about').style.display = 'none';
}

function projects_open(){
    document.getElementById("service").style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('about').style.display = 'none';
}

function contact_open(){
    document.getElementById("service").style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
    document.getElementById('about').style.display = 'none';
}

function about_open(){
    document.getElementById("service").style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('about').style.display = 'block';
}

function text_to_clipboard() {
    var copyText = document.getElementById("email");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
