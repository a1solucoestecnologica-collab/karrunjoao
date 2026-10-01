const menu=document.querySelector('.menu');
const navigation=document.querySelector('#navigation');

if(menu&&navigation){
  menu.innerHTML='<span class="menu-label">Menu</span><span class="menu-icon" aria-hidden="true"><i></i><i></i></span>';
  menu.addEventListener('click',function(){
    const open=this.getAttribute('aria-expanded')!=='true';
    this.setAttribute('aria-expanded',String(open));
    this.querySelector('.menu-label').textContent=open?'Fechar':'Menu';
    navigation.classList.toggle('open',open);
    document.body.classList.toggle('menu-open',open);
  });
  navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    menu.setAttribute('aria-expanded','false');
    menu.querySelector('.menu-label').textContent='Menu';
    navigation.classList.remove('open');
    document.body.classList.remove('menu-open');
  }));
}

const form=document.querySelector('#briefing');
function message(){const d=new FormData(form);const value=name=>(d.get(name)||'').trim();const details=[`*Nome:* ${value('nome')}`,value('empresa')&&`*Empresa:* ${value('empresa')}`,value('cargo')&&`*Cargo/área:* ${value('cargo')}`,value('localidade')&&`*Localidade:* ${value('localidade')}`,`*Assunto:* ${value('demanda')}`,`*Prazo:* ${value('prazo')}`].filter(Boolean).join('\n');return `Olá, Karrun! Preenchi o formulário do site para começarmos uma conversa.\n\n${details}\n\n*Contexto da demanda:*\n${value('desafio')}`}
form?.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const url='https://wa.me/5544988211479?text='+encodeURIComponent(message());const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.click();document.querySelector('#status').textContent='Sua mensagem está pronta no WhatsApp. Confira o texto e toque em enviar para iniciar a conversa.'});
document.querySelector('#copy')?.addEventListener('click',async()=>{if(!form.reportValidity())return;try{await navigator.clipboard.writeText(message());document.querySelector('#status').textContent='Mensagem copiada. Você pode colá-la na conversa com a Karrun.'}catch{document.querySelector('#status').textContent='Não foi possível copiar automaticamente. Use o botão Continuar no WhatsApp.'}});
