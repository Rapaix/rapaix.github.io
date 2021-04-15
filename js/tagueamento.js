// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

let menuListaContato = document.querySelectorAll('.menu-lista-contato');
let menuListaDownload = document.querySelectorAll('.menu-lista-download');
let menuListaAnalise = document.querySelectorAll('.menu-lista-analise');
let menuListaSobre = document.querySelectorAll('.menu-lista-sobre')
let menuListaIndex = document.querySelectorAll('.menu-lista-index')
let analiseBtns = document.querySelectorAll('.card-montadoras')


analiseBtns.forEach( function(btn){
    btn.addEventListener('click', function(event){
        ga('send', 'event',{
            eventAction: 'ver_mais',
            eventCategory: 'analise',
            eventLabel: btn.getAttribute('data-name')
        }

        )
    });
});

menuListaContato.forEach( function(btn){
    btn.addEventListener('click', function(event){
        ga('send', 'event',{
            eventAction: 'entre_em_contato',
            eventCategory: 'menu',
            eventLabel: 'link_externo'
        }

        )
    });
});

menuListaDownload.forEach( function(btn){
    // console.log(btn)
    btn.addEventListener('click', function(event){
        ga('send', 'event',{
            eventAction: 'download_pdf',
            eventCategory: 'menu',
            eventLabel: 'download_pdf'
        }

        )
    });
});
// menuListaAnalise.forEach( function(btn){
//     // console.log(btn)
//     btn.addEventListener('click', function(event){
//         console.log(event.target.href)
//         ga('send', 'event',{
//             eventAction: 'dropdown_analise',
//             eventCategory: 'menu',
//             eventLabel: 'dropdown_analise"
//         }

//         )
//     });
// });
// menuListaSobre.forEach( function(btn){
//     // console.log(btn)
//     btn.addEventListener('click', function(event){
//         console.log(event.target.href)
//         ga('send', 'event',{
//             eventAction: 'dropdown_sobre',
//             eventCategory: 'menu',
//             eventLabel: "dropdown_sobre"
//         }

//         )
//     });
// });
// menuListaIndex.forEach( function(btn){
//     // console.log(btn)
//     btn.addEventListener('click', function(event){
//         console.log(event.target.href)
//         ga('send', 'event',{
//             eventAction: 'index',
//             eventCategory: 'menu',
//             eventLabel: "index"
//         }

//         )
//     });
// });



// ga('send', {
//     hitType: 'event',
//     eventCategory: [Category],
//     eventAction: [Action],
//     eventLabel: [Label],
//     eventValue: [Value],
//     nonInteractive: [True | False]
//   });

function enviar(){
    let obj = {id: document.getElementById("nome").value,
         email : document.getElementById("email").value,
         telefone : document.getElementById("telefone").value,
         aceito : document.getElementById("aceito").checked
        }
    let campos = ''
    for ( prop in obj){
        if (obj[prop]!= "" || obj[prop]!= false){
            campos += prop +", " }
    }  
    ga('send', 'event',{
                    eventAction: 'contato',
                    eventCategory: campos,
                    eventLabel: "preencheu"
                 }
    )

    popup();
}

function popup(){
    let popup= document.querySelector('.lightbox-content');
    console.log(popup);
    ga('send', 'event',{
        eventAction: 'enviado',
        eventCategory: 'contato',
        eventLabel: "enviado"
     }
    )
}
