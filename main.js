// alert('hello')
/*function coba(name,address){
    // alert("Selamat Datang"+name)
    // alert("Kamu Tinggal Di"+ address) 
    //alert(`
        ======================
        Selamat Datang ${name}
        ======================

    
    
    `)
    alert(`Kamu Tinggal Di ${address}`)
}
 
// menjalankan funcion
coba ('niko',"bintaro")
function tanya(){
//kita lakukan seleksi ke component app
const app = document.getElementById('app')
//tanya user..?
let name = prompt("masukkan nama kamu :")
let hobi = prompt("masukkan hobi kamu :")
let age = prompt ("masukkan usia kamu :")
// kita inner HTML dengan bantuan BACKTICK
app.innerHTML= `
    <center>
        <h1 style="margin-top : 25vh";> 
        Selamat Datang ${name}
        </h1>
        <p>hobi kamu ${hobi}</p><br>
        <p>kamu lahir tahun ${2021 - age}</p>
    </center>

`
}*/
let show = true
const showForm = ()=>{
const nf = document.getElementById("note_form")


    if(show==true){
        nf.style.transform = 'translateX(0px)'
        show = false
    
}else{
    nf.style.transform = 'translateX(-250px)'
        show = true
    }
}