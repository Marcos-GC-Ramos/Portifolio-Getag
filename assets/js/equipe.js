
// ============ ===== NADIELE SOUZA ===== ============
const btnSelect01 = document.getElementById('Select-01')
btnSelect01.addEventListener("click", function (e){
    e.preventDefault();
    const perfil01 = document.getElementById('Select-01');
    const Nadiele = perfil01.Value;
    var clicked = document.getElementById(e);
    var img = document.getElementById('imagem');
        
    if (Nadiele == clicked) {
        // NOME E CARGO
        document.getElementById("name").innerText = Nadiele_Nome;
        document.getElementById("cargo").innerText=Nadiele_Cargo;
        
        // INFORMAÇÕES GERAIS DA NADIELE SOUZA
        document.getElementById("formacao").innerText=Nadiele_Formacao;
        document.getElementById("linkedin").innerText=Nadiele_Linkedin;
        document.getElementById("email").innerText=Nadiele_Email;
        document.getElementById("aniversario").innerText=Nadiele_Niver;
        img.setAttribute('src', 'assets/img/profile-img.jpg');

        // INFORMAÇÕES GERAIS DA NADIELE SOUZA
        document.getElementById("item-01").innerText=Nadiele_01;
        document.getElementById("item-02").innerText=Nadiele_02;
        document.getElementById("item-03").innerText=Nadiele_03;
        document.getElementById("item-04").innerText=Nadiele_04;
        document.getElementById("item-05").innerText=Nadiele_05;
        document.getElementById("item-06").innerText=Nadiele_06;
        document.getElementById("item-07").innerText=Nadiele_07;
        document.getElementById("item-08").innerText=Nadiele_08;
        document.getElementById("item-09").innerText=Nadiele_09;
    }
});
// NOME E CARGO -- NADIELE SOUZA --
var Nadiele_Nome = "Nadiele Souza"
var Nadiele_Cargo = "Desenvolvedora Front-End"
// INFORMAÇÕES GERAIS 
const Nadiele_Formacao = "Cientista da Computação";
const Nadiele_Linkedin = "Linkedin: https://www.linkedin.com/il/nadiele-s-aa068b110/"
const Nadiele_Email = "E-mail: nadielesouza@seduc.net"
const Nadiele_Niver = "Aniversário: 09/01/1990"
// CONHECIMENTOS
const Nadiele_01 = "JavaScript"
const Nadiele_02 = "CSS"
const Nadiele_03 = "GIT"
const Nadiele_04 = "Laravel"
const Nadiele_05 = "Figma"
const Nadiele_06 = "MySQL"
const Nadiele_07 = "Bootstrap"
const Nadiele_08 = "UI"
const Nadiele_09 = "UX"
//  ========= ===== END - NADIELE SOUZA ===== ========

// =========== ===== LUAN DE OLIVEIRA ===== ===========
const btnSelect02 = document.getElementById('Select-02')
btnSelect02.addEventListener("click", function (e){
    e.preventDefault();
    const perfil02 = document.getElementById('Select-02');
    const Luan = perfil02.Value;
    var clicked = document.getElementById(e);
    var img = document.getElementById('imagem');

    if (Luan == clicked) {
        // NOME E CARGO
        document.getElementById("name").innerText=Luan_Nome;
        document.getElementById("cargo").innerText=Luan_Cargo;

        // INFORMAÇÕES GERAIS
        document.getElementById("formacao").innerText=Luan_Formacao;
        document.getElementById("linkedin").innerText=Luan_Linkedin;
        document.getElementById("email").innerText=Luan_Email;
        document.getElementById("aniversario").innerText=Luan_Niver;
        img.setAttribute('src', 'https://pps.whatsapp.net/v/t61.24694-24/351153026_1231152197575767_4273193606459620342_n.jpg?ccb=11-4&oh=01_AdQmzlMKOpFZKUR5ZzvIdNPvgHfO3FIfY6kRg8mB9uafYA&oe=64AAEAD5');

        // CONHECIMENTOS
        document.getElementById("item-01").innerText=Luan_01;
        document.getElementById("item-02").innerText=Luan_02;
        document.getElementById("item-03").innerText=Luan_03;
        document.getElementById("item-04").innerText=Luan_04;
        document.getElementById("item-05").innerText=Luan_05;
        document.getElementById("item-06").innerText=Luan_06;
        document.getElementById("item-07").innerText=Luan_07;
        document.getElementById("item-08").innerText=Luan_08;
        document.getElementById("item-09").innerText=Luan_09;
    }
});
// NOME E CARGO -- LUAN DE OLIVEIRA --
const Luan_Nome = "Luan de Oliveira";
const Luan_Cargo = "Desenvolvedor Back-End";
// INFORMAÇÕES GERAIS
const Luan_Formacao = "Cientista da Computação";
const Luan_Linkedin = "Linkedin: https://www.linkedin.com/il/Luan-s-aa068b110/"
const Luan_Email = "E-mail: Luansouza@seduc.net";
const Luan_Niver = "Aniversário: 09/01/1990";
// CONHECIMENTOS
const Luan_01 = "JavaScript";
const Luan_02 = "CSS";
const Luan_03 = "GIT";
const Luan_04 = "Laravel";
const Luan_05 = "Figma";
const Luan_06 = "MySQL";
const Luan_07 = "Bootstrap";
const Luan_08 = "UI";
const Luan_09 = "UX";
// ========= ===== END - LUAN DE OLIVEIRA ===== =========

// ========= ===== ALEXSANDRO SIMAS LOPES ===== =========
const btnSelect03 = document.getElementById('Select-03')
btnSelect03.addEventListener("click", function (e){
    e.preventDefault();
    const perfil03 = document.getElementById('Select-03');
    const Alex = perfil03.Value;
    var clicked = document.getElementById(e);
    var img = document.getElementById('imagem');

    if (Alex == clicked) {
        // NOME E CARGO
        document.getElementById("name").innerText=Alex_Nome;
        document.getElementById("cargo").innerText=Alex_Cargo;

        // INFORMAÇÕES GERAIS
        document.getElementById("formacao").innerText=Alex_Formacao;
        document.getElementById("linkedin").innerText=Alex_Linkedin;
        document.getElementById("email").innerText=Alex_Email;
        document.getElementById("aniversario").innerText=Alex_Niver;
        img.setAttribute('src', 'assets/img/equipe/fotoAlexSimas.jpg');
        
        // CONHECIMENTOS
        document.getElementById("item-01").innerText=Alex_01;
        document.getElementById("item-02").innerText=Alex_02;
        document.getElementById("item-03").innerText=Alex_03;
        document.getElementById("item-04").innerText=Alex_04;
        document.getElementById("item-05").innerText=Alex_05;
        document.getElementById("item-06").innerText=Alex_06;
        document.getElementById("item-07").innerText=Alex_07;
        document.getElementById("item-08").innerText=Alex_08;
        document.getElementById("item-09").innerText=Alex_09;
    }
});
// NOME E CARGO -- LUAN DE OLIVEIRA --
const Alex_Nome = "Alexsandro Simas Lopes";
const Alex_Cargo = "Desenvolvedor Front-End (Estagiário)";
// INFORMAÇÕES GERAIS
const Alex_Formacao = "Curs. Analisa e Desenvolvimento de Sistemas";
const Alex_Linkedin = "Linkedin: https://www.linkedin.com/in/alexsandro-simas-lopes-6104b0220/"
const Alex_Email = "E-mail: alexsandro@seduc.net";
const Alex_Niver = "Aniversário: 02/03/2001";
// CONHECIMENTOS
const Alex_01 = "Bootstrap";
const Alex_02 = "Laravel";
const Alex_03 = "CodePen";
const Alex_04 = "HTML";
const Alex_05 = "CSS";
const Alex_06 = "Java Script";
const Alex_07 = "GIT";
const Alex_08 = "";
const Alex_09 = "";
const Alex_10 = "";


