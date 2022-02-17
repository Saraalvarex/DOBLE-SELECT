let miSet= new Set();
const miArray=['Ninguno seleccionado', 'Andalucia', 'Madrid', 'Galicia']
const Andalucia=['Ninguno seleccionado', 'Almeria', 'Cadiz', 'Córdoba', 'Granada', 'Huelva', 'Jaen', 'Malaga', 'Sevilla'];
const Madrid =['Ninguno seleccionado', 'Madrid capital'];
const Galicia =['Ninguno seleccionado', 'La Coruña', 'Lugo', 'Orense', 'Pontevedra'];

let miMap=new Map();

miArray.forEach(clave => {
    miSet.add(clave);  
});

miMap=[{"clave":miArray[0], "valor": ""},
        {"clave":miArray[1], "valor": Andalucia},
        {"clave": miArray[2], "valor": Madrid},
         {"clave": miArray[3], "valor": Galicia}];


function cambiar_ciudad(){
//cojo el valor del select de la comunidad elegida
   	var comunidad= document.formulario.listaSelect1[document.formulario.listaSelect1.selectedIndex].value 
   	//miro a ver si la  comunidad está definida
   	if (comunidad!= 0) { 
      	//si estaba definida, entonces coloco las opciones de la ciudad correspondiente. 
      	//selecciono el array de ciudad adecuado 
      	mis_ciudades= miMap[comunidad]['valor']
      	//calculo el numero de ciudades
      	num_ciudades = mis_ciudades.length 
      	//marco el número de ciudades en el select 
      	document.formulario.listaSelect2.length = num_ciudades
      	//para cada ciudad del array, la introduzco en el select 
      	for(i=0;i<num_ciudades;i++){ 
         	document.formulario.listaSelect2.options[i].value=mis_ciudades[i] 
         	document.formulario.listaSelect2.options[i].text=mis_ciudades[i] 
        }	
   	}else{ 
      	//si no había ciudad seleccionada, elimino las ciudades del select 
      	document.formulario.provincia.length = 1
      	//coloco un guión en la única opción que he dejado 
      	document.formulario.listaSelect2.options[0].value = "-" 
      	document.formulario.listaSelect2.options[0].text = "-" 
   	} 
   	//marco como seleccionada la opción primera de ciudad (Ninguno seleccionado)
   	document.formulario.listaSelect2.options[0].selected = true 
    //Para Andalucía, saldrá por defecto seleccionado “Granada”
    if (comunidad=='1'){
        document.formulario.listaSelect2.options[4].selected = true;
    }
}
