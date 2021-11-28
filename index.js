var personen = [];
var speicher = personen;
zeahler = 0;
var wichtelwert = true;


function nächsterfc(){
  document.getElementById("wichtel_paare").innerHTML = "<span class='beschenkt2'>"+"Der nächste ist dran"+"</span>";
  wichtelwert = true;
  zeahler = zeahler + 1;
  };

function wichtel_funktion(){

var x = document.getElementById("dropdown_id").value;
var x_text = x;

var wichtel_paar_html = document.getElementById("wichtel_paare");
var randomElement;


  if(wichtelwert == true){
    if(zeahler<personen.length){
      do{
        randomElement = speicher[Math.floor(Math.random() * speicher.length)];
      
      }while( randomElement == x);
    
        var abbauliste = speicher.filter(function(f) { return f !== randomElement });
       speicher=abbauliste;
    
       console.log(speicher);
    
       document.getElementById("wichtel_paare").innerHTML ="<p id='schenkender'>" + x_text + "</p>"
                                                          + "<p class='beschenkt'> hat </p>"
                                                          + "<p id='randomanzeige'>" + randomElement + "</p>" 
                                                          + "<p class='beschenkt'> gezogen </p>";
          
       wichtelwert = false;
    }else{
      wichtel_paar_html.innerHTML = "<span class='beschenkt2'>"+" Es haben schon alle gewichtelt"+"</span>";
      document.getElementById("dropdown_html").remove();
    };
  }else{
    wichtel_paar_html.innerHTML ="<span class='beschenkt2'>"+ "Drücke erst auf Nächster"+"</span>";
  };



var nächster_button = document.createElement('input');
nächster_button.setAttribute("id", "nächster_button_html");
nächster_button.setAttribute("type","submit");
nächster_button.setAttribute("value","Nächster");
wichtel_paar_html.appendChild(nächster_button);
var nächster_js = document.getElementById("fertig_input");  
if(zeahler<personen.length){
nächster_button.addEventListener("click", nächsterfc); 

};



};

function nextpage(){

  document.getElementById("name_input").remove();
  document.getElementById("button_input").remove();
  document.getElementById("fertig_input").remove();
  document.getElementById("ow").remove();
  document.getElementById("ausgabe").remove();
  document.getElementById("text2").remove();


};

function dropdown_auswahl(){

  nextpage();

  var dropdown_inhalt = document.getElementById("dropdown_html");
  var dropdown = document.createElement('select');
  dropdown.setAttribute("id", "dropdown_id");
  dropdown.setAttribute("onchange" , "wichtel_funktion()");
  dropdown_inhalt.appendChild(dropdown);
  
  const placeholder = document.createElement('option');
  placeholder.innerHTML= "Wähle jemanden aus";
  dropdown.appendChild(placeholder);

  for(const value of personen){
    const dropdown_eintrag = document.createElement('option');
    dropdown_eintrag.setAttribute("label", value);
    dropdown_eintrag.setAttribute("value",value);
    dropdown_eintrag.setAttribute("id","wichteloption");
    dropdown.appendChild(dropdown_eintrag);
  };

 
};

function main() {

    var clicks = 0;

    var input_text_js = document.getElementById("name_input");
    var input_button_js = document.getElementById("button_input");
    var meincontainer = document.getElementById("container");
    var bottunsinput = document.getElementById("bottunsinput");
    

    input_button_js.addEventListener("click", () => {
    
    console.log(input_text_js.value.length);

    if(input_text_js.value.length>=3){

       personen.push(input_text_js.value); 
       clicks = clicks + 1;
    }else{  

    alert("Der Name muss mindestens 3 Zeichen haben");
   };
      


      document.getElementById("ausgabe").innerHTML =personen.join('<br />');

      
      

      var speicher = personen;
      input_text_js.value="";
      if(clicks == 3){
        var fertig_button = document.createElement('input');
        fertig_button.setAttribute("id", "fertig_input");
        fertig_button.setAttribute("type", "submit");
        fertig_button.setAttribute("value", "Fertig");
        bottunsinput.appendChild(fertig_button);
        var fertig_js = document.getElementById("fertig_input");  
        fertig_js.addEventListener("click", dropdown_auswahl);  
        fertig_button.onclick = function() { 
          window.scrollBy({ top: 700, left: 0, behavior: "smooth" });
        }
      };
    });

    
}; 


document.addEventListener("DOMContentLoaded", main);