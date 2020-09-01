/*
    Validador dinamico de campos - RidixCr
        - Solo Letras
        - Solo Numeros
        - Solo Letras y Numeros
        - Solo Caracteres Aceptados en (Nombres de Usuario,Correo Electronico)
        - Solo Letras , Numeros y Caracteres Aceptados en (Nombres de Usuario,Correo Electronico)
        - Solo Caracteres Especiales
		
    Sintacsis de Uso:
        <input type="text" name="text1" id="text1" value="" onkeyup="validacionRequerida(this.id)"/>
*/
function validaSoloLetras(name) {
    this.caja_texto = document.getElementsByName(name).item(0);
    var anyString = caja_texto.value.toString();
    var char_ref;
    var nro_caracteres = caja_texto.value.length;
    var textAux = "";
    if (nro_caracteres > 0) {
        for (var i = 0; i < nro_caracteres; i++) {
            char_ref = anyString.charAt(i);
            if (esLetra(char_ref)) {
                textAux = textAux + char_ref;
            }
        }
        caja_texto.value = textAux;
    }
}
function esLetra(caracter) {
    if ("abcdefghijklmnopqrstuvwxyz".indexOf(caracter.toLowerCase()) >= 0) {
        return true;
    } else {
        return false;
    }
}
function validaSoloLetrasEspacio(name) {
    this.caja_texto = document.getElementsByName(name).item(0);
    var anyString = caja_texto.value.toString();
    var char_ref;
    var nro_caracteres = caja_texto.value.length;
    var textAux = "";
    if (nro_caracteres > 0) {
        for (var i = 0; i < nro_caracteres; i++) {
            char_ref = anyString.charAt(i);
            if (esLetraEspacio(char_ref)) {
                textAux = textAux + char_ref;
            }
        }
        caja_texto.value = textAux;
    }
}
function esLetraEspacio(caracter) {
    if ("abcdefghijklmnopqrstuvwxyz ".indexOf(caracter.toLowerCase()) >= 0) {
        return true;
    } else {
        return false;
    }
}
function validaSoloNumeros(name) {
    var caja_texto = document.getElementsByName(name).item(0);
    var anyString = caja_texto.value.toString();
    var char_ref;
    var nro_caracteres = caja_texto.value.length;
    var textAux = "";
    if (nro_caracteres > 0) {
        for (var i = 0; i < nro_caracteres; i++) {
            char_ref = anyString.charAt(i);
            if (esNumero(char_ref)) {
                textAux = textAux + char_ref;
            }
        }
        caja_texto.value = textAux;
    }
}
function esNumero(caracter) {
    if ("1234567890".indexOf(caracter.toLowerCase()) >= 0) {
        return true;
    } else {
        return false;
    }
}
function validaSoloNumerosTelefonico(name) {
    var caja_texto = document.getElementsByName(name).item(0);
    var anyString = caja_texto.value.toString();
    var char_ref;
    var nro_caracteres = caja_texto.value.length;
    var textAux = "";
    if (nro_caracteres > 0) {
        for (var i = 0; i < nro_caracteres; i++) {
            char_ref = anyString.charAt(i);
            if (esNumeroTelefonico(char_ref)) {
                if (((char_ref.indexOf("#") == 0 & i == 0) | (char_ref.indexOf("*") == 0 & i == 0))
                    | ((char_ref.indexOf("#") == -1 & i == 0) | (char_ref.indexOf("*") == -1 & i == 0))) {
                    textAux += char_ref;
                } else if ((char_ref.indexOf("#") == -1 & char_ref.indexOf("*") == -1 & i > 0)) {
                    textAux += char_ref;
                }
            }
        }
        caja_texto.value = textAux;
    }
}
function esNumeroTelefonico(caracter) {
    if ("1234567890#*".indexOf(caracter.toLowerCase()) >= 0) {
        return true;
    } else {
        return false;
    }
}
function validaSoloNumerosReales(name) {
    var caja_texto = document.getElementsByName(name).item(0);
    var anyString = caja_texto.value.toString();
    var char_ref;
    var nro_caracteres = caja_texto.value.length;
    var textAux = "";
    var cont_punto = 0;
    if (nro_caracteres > 0) {
        for (var i = 0; i < nro_caracteres; i++) {
            char_ref = anyString.charAt(i);
            if (char_ref.indexOf(".") >= 0) {
                cont_punto += 1;
            }
            if (esCaracterNumeroReal(char_ref) & cont_punto <= 1) {
                textAux = textAux + char_ref;
            }
        }
        caja_texto.value = textAux;
    }
}
function esCaracterNumeroReal(caracter) {
    if ("1234567890.".indexOf(caracter.toLowerCase()) >= 0) {
        return true;
    } else {
        return false;
    }
}
function validaSoloCaracterAceptado(name) {
    this.caja_texto = document.getElementsByName(name).item(0);
    var anyString = caja_texto.value.toString();
    var char_ref;
    var nro_caracteres = caja_texto.value.length;
    var textAux = "";
    if (nro_caracteres > 0) {
        for (var i = 0; i < nro_caracteres; i++) {
            char_ref = anyString.charAt(i);
            if (esCaracterAceptado(char_ref)) {
                textAux = textAux + char_ref;
            }
        }
        caja_texto.value = textAux;
    }
}
function esCaracterAceptado(caracter) {
    if ("_@. ".indexOf(caracter.toLowerCase()) >= 0) {
        return true;
    } else {
        return false;
    }
}
function validaSoloLetrasNumeros(name) {
    this.caja_texto = document.getElementsByName(name).item(0);
    var anyString = caja_texto.value.toString();
    var char_ref;
    var nro_caracteres = caja_texto.value.length;
    var textAux = "";
    if (nro_caracteres > 0) {
        for (var i = 0; i < nro_caracteres; i++) {
            char_ref = anyString.charAt(i);
            if (esLetrasNumeros(char_ref)) {
                textAux = textAux + char_ref;
            }
        }
        caja_texto.value = textAux;
    }
}
function esLetrasNumeros(caracter) {
    if ("abcdefghijklmnopqrstuvwxyz1234567890".indexOf(caracter.toLowerCase()) >= 0) {
        return true;
    } else {
        return false;
    }
}
function validaSoloLetrasNumerosCaracteresAceptados(name) {
    this.caja_texto = document.getElementsByName(name).item(0);
    var anyString = caja_texto.value.toString();
    var char_ref;
    var nro_caracteres = caja_texto.value.length;
    var textAux = "";
    if (nro_caracteres > 0) {
        for (var i = 0; i < nro_caracteres; i++) {
            char_ref = anyString.charAt(i);
            if (esLetrasNumerosCaracteresAceptados(char_ref)) {
                textAux = textAux + char_ref;
            }
        }
        caja_texto.value = textAux;
    }
}
function esLetrasNumerosCaracteresAceptados(caracter) {
    if ("abcdefghijklmnopqrstuvwxyz1234567890_@.-".indexOf(caracter.toLowerCase()) >= 0) {
        return true;
    } else {
        return false;
    }
}
function validaSoloLetrasNumerosCaracteresAceptadosUsuarios(name) {
    this.caja_texto = document.getElementsByName(name).item(0);
    var anyString = caja_texto.value.toString();
    var char_ref;
    var nro_caracteres = caja_texto.value.length;
    var textAux = "";
    if (nro_caracteres > 0) {
        for (var i = 0; i < nro_caracteres; i++) {
            char_ref = anyString.charAt(i);
            if (esLetrasNumerosCaracteresAceptadosUsuarios(char_ref)) {
                textAux = textAux + char_ref;
            }
        }
        caja_texto.value = textAux;
    }
}
function esLetrasNumerosCaracteresAceptadosUsuarios(caracter) {
    if ("abcdefghijklmnopqrstuvwxyz1234567890_@".indexOf(caracter.toLowerCase()) >= 0) {
        return true;
    } else {
        return false;
    }
}
function validaSoloCaracteresEspeciales(name) {
    this.caja_texto = document.getElementsByName(name).item(0);
    var anyString = caja_texto.value.toString();
    var char_ref;
    var nro_caracteres = caja_texto.value.length;
    var textAux = "";
    if (nro_caracteres > 0) {
        for (var i = 0; i < nro_caracteres; i++) {
            char_ref = anyString.charAt(i);
            if (!esLetrasNumeros(char_ref)) {
                textAux = textAux + char_ref;
            }
        }
        caja_texto.value = textAux;
    }
}
function validarCorreoElectronico(name) {
    this.caja_texto = document.getElementsByName(name).item(0);
    var anyString = caja_texto.value.toString();
    if (!esCorreoElectronico(anyString)) {
        return false;
    } else {
        return true;
    }
}
function esCorreoElectronico(correo) {
    var splitted = correo.match("^(.+)@(.+)$");
    if (splitted == null) return false;
    if (splitted[1] != null) {
        var regexp_user = /^\"?[\w-_\.]*\"?$/;
        if (splitted[1].match(regexp_user) == null) return false;
    }
    if (splitted[2] != null) {
        var regexp_domain = /^[\w-\.]*\.[A-Za-z]{2,4}$/;
        if (splitted[2].match(regexp_domain) == null) {
            var regexp_ip = /^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;
            if (splitted[2].match(regexp_ip) == null) return false;
        }
        return true;
    }
    return false;
}
/*
 *
 *  =========
 *   PRUEBAS
 *  =========
 *
 **/
function test_tecla(id_it) {
    this.caja_texto = document.getElementById(id_it);
    var anyString = caja_texto.value.toString();
    var char_ref;
    var nro_caracteres = caja_texto.value.length;
    if (nro_caracteres > 0) {
        for (var i = 0; i < nro_caracteres; i++) {
            char_ref = anyString.charAt(i);
            if (esNumero(char_ref)) {
                document.writeln(anyString.charAt(i) + " Es un Numero<br>");
            } else if (esLetra(char_ref)) {
                document.writeln(anyString.charAt(i) + " ES una Letra<br>");
            } else if (esCaracterAceptado(char_ref)) {
                document.writeln(anyString.charAt(i) + " Es un Caracter Valido<br>");
            } else {
                document.writeln(anyString.charAt(i) + " Caracter No Valido<br>");
            }
        }
    }

    //"1".charCodeAt(0) anssi
    //"hola".indexOf("");
    //"hola".indexOf("");
}
//onchange="validarSeleccionItem('combo_prueba_form',this.id,'Serie')"
function validarSeleccionItem(formulario, id_it, msg) {
    //this.combo_item = document.getElementById(id_it);

    var combo = document.forms[formulario].elements[id_it];
    var index = combo.selectedIndex;

    if (index <= 0) {
        alert("Seleccione " + msg + " Valido");
    }
}

function validaSeleccionControles() {
    this.combo_item = document.getElementById("combo_prueba");
    //var combo = document.forms['combo_prueba_form'].elements['combo_prueba'];
    combo_item.onchange = function () {
        var index = combo_item.selectedIndex;
        if (index <= 0) {
            alert("Seleccione " + "Opcion" + " Valida");
        }
    };
}

function validaSeleccionItemCorrectoUsuario() {
    this.reg_combo_sexo = document.getElementById("MainContent_reg_sexo");
    reg_combo_sexo.onchange = function () {
        var index = reg_combo_sexo.selectedIndex;
        if (index <= 0) {
            alert("Seleccione un Genero Valido");
            reg_combo_sexo.style.color = "red";
            //this.reg_combo_sexo.focus();
        } else if (index > 0) {
            reg_combo_sexo.style.color = "green";
        }
    };
    this.reg_combo_serie = document.getElementById("MainContent_reg_serie");
    reg_combo_serie.onchange = function () {
        var index = reg_combo_serie.selectedIndex;
        if (index <= 0) {
            alert("Seleccione una Serie Valida");
            reg_combo_serie.style.color = "red";
            //reg_combo_serie.focus();
        } else if (index > 0) {
            reg_combo_serie.style.color = "green";
        }
    };
    this.cargar_fotografia = document.getElementById("cargar_fotografia");
    cargar_fotografia.onchange = function () {

    };
}

function cargarFotografia() {
    //Window.open("http://localhost:5169/Principal.aspx", "Cargar de Fotografia", "menubar=yes,location=yes,width=420,height=230,resizable=yes,scrollbars=yes,status=yes");
    Window.openDialog("http://localhost:5169/Principal.aspx", "Test", "");
    //window.close();
}
