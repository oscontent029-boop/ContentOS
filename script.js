const modules = [
{n:'01',title:'Clientes / Marcas',desc:'La ficha de cada marca, organizada en pestañas: Datos, Manual de marca, Comunicación y Negocio.',long:'Cada marca tiene su ficha en cuatro pestañas: Datos, Manual de marca, Comunicación y Negocio. El Manual de marca funciona como un kit real: los colores se copian con un clic, cargás las tipografías con su link de descarga, y una barra te muestra cuánto falta completar ("al 60% — faltan tipografías, público objetivo"). El logo te indica el tamaño recomendado (1080×1080 PNG transparente). Cuanto más completo el manual, mejores resultados devuelve la IA — de ahí sale el contexto que usa en cada generación.',image:'imagenes/clientes-marcas.png',color:'var(--violet-light)',bg:'rgba(92,27,87,.25)',icon:'<circle cx="9" cy="7" r="3.2"/><path d="M2.5 19c0-3.6 2.9-6.4 6.5-6.4s6.5 2.8 6.5 6.4"/><circle cx="17" cy="6" r="2.4"/><path d="M14.5 12.6c2.9.3 5 2.6 5 5.5"/>'},
  {n:'02',title:'Calendario',desc:'Planificación visual con estados: Borrador, En revisión, Aprobado, Programado, Publicado.',long:'El plan de contenido de cada marca en vista mensual o semanal. Cada publicación tiene título, texto, imagen, canal y fecha, y pasa por los estados Borrador → En revisión → Aprobado → Programado → Publicado (o Rechazado). Cuando una publicación aprobada de Instagram tiene imagen, aparece el botón "Publicar ahora" que la sube de verdad y devuelve el enlace al post.',image:'imagenes/calendario.png',color:'var(--pink)',bg:'rgba(214,135,183,.18)',icon:'<rect x="3" y="4.5" width="18" height="16" rx="2.4"/><path d="M3 9.5h18"/><path d="M7.5 2.5v4M16.5 2.5v4"/>'},
  {n:'03',title:'Centro de IA',desc:'Botones de acción que usan el contexto real de la marca — y ahora también miran las imágenes de tus carruseles.',long:'No es un chat: son botones de acción. La IA Estratégica genera Oportunidades de Crecimiento, Estrategia mensual, FODA, Buyer Persona y Pilares de contenido. La IA de Contenido arma ideas, copys, hooks y campañas completas. Y en Copy de slides, subís hasta 10 imágenes de un carrusel y la IA las mira en orden: el texto de cada slide se escribe sabiendo lo que dicen las anteriores, así el carrusel se lee como una sola idea.',image:'imagenes/centro-de-ia.png',video:'videos/centro-de-ia.mp4',color:'var(--orange-light)',bg:'rgba(232,91,30,.18)',icon:'<path d="M12 2.5l2.1 4.5 4.9.7-3.5 3.5.8 5-4.3-2.3-4.3 2.3.8-5-3.5-3.5 4.9-.7z"/>'},
   {n:'04',title:'Bibliotecas',desc:'Banco de Ideas y Biblioteca de Copys: todo reutilizable y filtrable por marca.',long:'Todo lo que genera el Centro de IA queda guardado y reutilizable. El Banco de Ideas junta las generaciones estratégicas (oportunidades, FODA, buyer persona, pilares, estrategia mensual) y la Biblioteca de Copys guarda ideas, copys, hooks y carruseles. Ambas se filtran por marca y por tipo, y muestran el resultado en formato legible.',image:'imagenes/bibliotecas.png',color:'var(--cream)',bg:'rgba(244,240,170,.16)',icon:'<path d="M4 4h5.5v16H4z"/><path d="M11.5 4H16a2 2 0 012 2v12a2 2 0 01-2 2h-4.5z"/><path d="M9.5 8h0M9.5 12h0"/>'},
  {n:'05',title:'Producción',desc:'Tablero de tareas del equipo: Pendiente, En curso, Bloqueada, Hecha — con fecha límite y responsable.',long:'El tablero donde el equipo lleva adelante el trabajo: cada tarea (diseñar, redactar, editar…) pertenece a una publicación del calendario, tiene un responsable y una fecha límite, y pasa por Pendiente, En curso, Bloqueada y Hecha. Es una capa distinta del estado editorial de la publicación, que se maneja en Calendario y Aprobaciones.',image:'imagenes/produccion.png',color:'var(--pink)',bg:'rgba(214,135,183,.18)',icon:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'},
  {n:'06',title:'Archivos',desc:'Funciona como un Drive: carpetas, espacio de agencia y notas buscables.',long:'Carpetas y subcarpetas, con la ruta arriba para no perderte. Hay un espacio propio de la agencia (aparte del de cada marca) para plantillas y contratos, y podés escribir notas de reunión directo ahí, que después encuentra el buscador. Borrar una carpeta no borra los archivos: los deja en la raíz para reubicarlos.',image:'imagenes/archivos.png',color:'var(--orange-light)',bg:'rgba(232,91,30,.18)',icon:'<path d="M4 6.5A2.5 2.5 0 016.5 4h4l2 2.5H19a2 2 0 012 2v9a2.5 2.5 0 01-2.5 2.5h-12A2.5 2.5 0 014 17.5z"/>'},  {n:'07',title:'Aprobaciones',desc:'En revisión, Aprobadas, Rechazadas con motivo — y una vista simplificada para el cliente final.',long:'El Centro de Aprobaciones organiza el contenido en En revisión, Aprobadas y Rechazadas (con motivo obligatorio). El Portal del Cliente es la vista simplificada para el rol Cliente: ve solo las publicaciones de su marca, sin borradores, y las aprueba o rechaza sin acceder a nada más de la agencia.',image:'imagenes/aprobaciones.png',color:'var(--cream)',bg:'rgba(244,240,170,.16)',icon:'<path d="M9 12.5l2.2 2.2L16 9.5"/><circle cx="12" cy="12" r="9.2"/>'},
  {n:'08',title:'Métricas reales de Instagram',desc:'Impresiones, alcance, interacciones y engagement, con evolución diaria medida en automático.',long:'Conectando una cuenta de Instagram Business o Creator, el dashboard muestra impresiones, alcance, interacciones, engagement y el detalle de cada publicación (Reel o Post). La evolución diaria se construye con una medición automática por día, porque Instagram solo informa el total acumulado — nunca el historial completo.',image:'imagenes/metricas.png',color:'var(--violet-light)',bg:'rgba(92,27,87,.25)',icon:'<path d="M4 19V10M11 19V5M18 19v-7"/><path d="M3 19h18"/>'},
{n:'09',title:'IA de Métricas',desc:'La IA analiza los números y te dice qué funciona, qué no, y qué oportunidades hay.',long:'La IA de Métricas interpreta los números del dashboard: fortalezas, oportunidades, alertas y recomendaciones. No trabaja sobre una impresión tuya, sino sobre los datos reales del período — lee la misma fuente que ves en el Dashboard, así que el análisis nunca contradice tus métricas.',image:'imagenes/ia-metricas.png',color:'var(--pink)',bg:'rgba(214,135,183,.18)',icon:'<path d="M4 4h16v13.5H8.5L4 21z"/><path d="M8 9h8M8 12.5h5"/>'}, 
 {n:'10',title:'Automatizaciones',desc:'Publica lo programado, mide métricas, arma informes — y ahora también te avisa lo que necesita tu atención.',long:'Publicar las aprobadas cuando llega su fecha, medir las métricas todos los días y generar el informe mensual corren solos, sin que nadie los dispare. Además, el sistema te avisa proactivamente: contenido sin programar, tareas por vencer, reuniones de mañana, facturas por vencer, aprobaciones esperando o una cuenta de Instagram desconectada. Cada aviso se prende y apaga por separado.',image:'imagenes/automatizaciones.png',color:'var(--orange-light)',bg:'rgba(232,91,30,.18)',icon:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'},  
 {n:'11',title:'Estrategia',desc:'El plan general de la marca: objetivo, público, tono y pilares de contenido.',long:'La estrategia es la base de toda la marca: objetivo, público objetivo, tono de comunicación y pilares de contenido. No es un campo decorativo — es el contexto que usa el Centro de IA para generar todo, así que cuanto más completa esté, mejores resultados devuelve.',image:'imagenes/estrategia.png',color:'var(--violet-light)',bg:'rgba(92,27,87,.25)',icon:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'},
  {n:'12',title:'Vista previa de Instagram',desc:'Previsualizá cómo se va a ver el feed antes de publicar nada.',long:'Antes de programar una publicación, podés ver cómo va a quedar dentro del feed de Instagram de la marca — así el equipo revisa el orden y la estética general del perfil antes de que algo salga publicado.',image:'imagenes/vista-previa-instagram.png',color:'var(--pink)',bg:'rgba(214,135,183,.18)',icon:'<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M10 7h4M10 11h4M10 15h2"/>'},
  {n:'13',title:'Campañas',desc:'Armá campañas completas con varias publicaciones coordinadas entre sí.',long:'Para lanzamientos o fechas especiales, armás una campaña que agrupa varias publicaciones relacionadas, con su propio objetivo y cronograma, en vez de planificarlas una por una sueltas en el calendario.',image:'imagenes/campanas.png',color:'var(--orange-light)',bg:'rgba(232,91,30,.18)',icon:'<path d="M3 10v4a1 1 0 001 1h2l4 4V5L6 9H4a1 1 0 00-1 1z"/><path d="M15 8.5a4 4 0 010 7"/>'},
  {n:'14',title:'Reuniones',desc:'Agendá y llevá registro de las reuniones con cada cliente.',long:'Un espacio para agendar las reuniones de cada marca y dejar anotado lo que se habló — así queda un historial ordenado en vez de perder esa información en el chat o el mail.',image:'imagenes/reuniones.png',color:'var(--cream)',bg:'rgba(244,240,170,.16)',icon:'<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18"/><circle cx="9" cy="14" r="1.6"/><path d="M6.5 18c0-1.6 1.1-2.6 2.5-2.6s2.5 1 2.5 2.6"/>'},
{n:'15',title:'Informe mensual',desc:'El informe general de cada marca, generado solo el día 1 de cada mes, listo para el cliente.',long:'Se genera automáticamente el día 1 de cada mes por marca (o a mano cuando lo necesites), y reúne todo: métricas, el análisis de la IA, el contenido publicado en el período y el estado general de la cuenta. El rol Cliente también puede leerlo desde su portal — es el resumen que le compartís sin armar nada aparte.',image:'imagenes/informe.png',color:'var(--violet-light)',bg:'rgba(92,27,87,.25)',icon:'<path d="M6 3h9l3 3v15H6z"/><path d="M9 12h6M9 15h6M9 9h3"/>'},    
{n:'16',title:'Contabilidad',desc:'No solo cuánto te tienen que pagar — también en qué se te va la plata y qué cliente realmente te conviene.',long:'Cargás los egresos (herramientas, pauta, servicios, freelance) en una grilla tipo Excel, con los gastos recurrentes sugeridos solos cada mes. Cargando las horas que trabajás por marca, calcula margen, costo por hora efectivo y rentabilidad — con un ranking de clientes que te muestra cuál parece bueno pero en realidad no te conviene.',image:'imagenes/contabilidad.png',color:'var(--pink)',bg:'rgba(214,135,183,.18)',icon:'<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5c0-1.4 1.2-2.2 2.5-2.2s2.5.7 2.5 1.8-1 1.6-2.5 1.9-2.5.8-2.5 1.9 1.1 1.8 2.5 1.8 2.5-.8 2.5-2.2"/>'},
];
const roles = [
  {t:'Administrador',d:'Ve y gestiona todo: marcas, equipo, permisos y facturación de la agencia.',long:'El Administrador es dueño o gerente de la agencia: puede gestionar marcas, equipo, permisos y facturación, y es el único rol que puede eliminar cosas. Ve absolutamente todo dentro de su agencia.',can:['Gestiona marcas, equipo, permisos y facturación','Único rol que puede eliminar cosas','Ve absolutamente todo dentro de la agencia'],color:'var(--violet-light)',icon:'<path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z"/>'},
  {t:'Community Manager',d:'Planifica el calendario, coordina tareas y arma la estrategia de cada marca.',long:'El Community Manager opera el día a día: crea y edita marcas, estrategia y contenido, arma tareas para el equipo, genera con el Centro de IA y ve las métricas de cada marca.',can:['Crea y edita marcas, estrategia y contenido','Arma y asigna tareas al equipo','Genera con el Centro de IA','Ve las métricas de cada marca'],color:'var(--pink)',icon:'<rect x="3" y="4.5" width="18" height="16" rx="2.4"/><path d="M3 9.5h18"/>'},
  {t:'Diseñador',d:'Sube el material a Archivos y deja las piezas listas para cada publicación.',long:'El Diseñador trabaja sobre Archivos y las tareas de producción que le asignan. Ve el calendario y las marcas, pero no edita la estrategia ni el contenido escrito.',can:['Sube y organiza material en Archivos','Resuelve las tareas de producción asignadas','Ve calendario y marcas','No edita estrategia ni contenido escrito'],color:'var(--orange-light)',icon:'<circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/>'},
  {t:'Copywriter',d:'Escribe y guarda copys, hooks y guiones en la Biblioteca de Copys.',long:'El Copywriter trabaja el contenido escrito del calendario: copys, hooks y guiones de carrusel, usando también la IA de Contenido, además de sus propias tareas de producción.',can:['Escribe copys, hooks y guiones de carrusel','Usa la IA de Contenido','Guarda todo en la Biblioteca de Copys','Resuelve sus tareas de producción'],color:'var(--cream)',icon:'<path d="M4 20l4-1 11-11-3-3L5 16z"/>'},
  {t:'Analista',d:'Sigue las métricas reales y arma los informes mensuales de cada marca.',long:'El Analista tiene acceso de solo lectura a las métricas, la IA de Métricas y los Informes de cada marca — su trabajo es leer los números e interpretarlos, no editar contenido.',can:['Acceso de solo lectura a métricas, IA de Métricas e Informes','Interpreta los números de cada marca','No edita contenido'],color:'var(--violet-light)',icon:'<path d="M4 19V10M11 19V5M18 19v-7"/><path d="M3 19h18"/>'},
  {t:'Cliente',d:'Entra a su portal simplificado y aprueba o rechaza sin ver el resto de la agencia.',long:'El Cliente accede únicamente a su Portal: ve las publicaciones de su propia marca (sin borradores) y las aprueba o rechaza con un motivo si corresponde. No ve nada más de la agencia — ni otras marcas, ni el equipo, ni la parte interna.',can:['Entra solo a su Portal','Ve las publicaciones de su marca (sin borradores)','Aprueba o rechaza con motivo','No ve otras marcas, ni el equipo, ni la parte interna'],color:'var(--pink)',icon:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>'},
];
const plans = [
  {name:'Starter',price:'US$29',tagline:'Freelancers y CM',badge:'',marcas:'3',usuarios:'1',
   top:[{t:'Calendario, marcas y aprobaciones',on:true},{t:'IA de Contenido y Banco de Ideas',on:true},{t:'IA Estratégica y Campañas',on:false},{t:'Automatizaciones',on:false},{t:'Soporte prioritario',on:false}],
   full:[{t:'Usuarios "Marca" ilimitados',on:true},{t:'Calendario, marcas y aprobaciones',on:true},{t:'IA de Contenido y Banco de Ideas',on:true},{t:'Métricas de Instagram',on:true},{t:'IA Estratégica y Campañas',on:false},{t:'Roles y permisos',on:false},{t:'Producción y tareas',on:false},{t:'Informes mensuales',on:false},{t:'Automatizaciones',on:false},{t:'Soporte',on:false}],
   cta:'Contratar',ctaStyle:'outline'},
  {name:'Agency',price:'US$79',tagline:'Agencias chicas',badge:'El más elegido',marcas:'10',usuarios:'5',
   top:[{t:'Calendario, marcas y aprobaciones',on:true},{t:'IA de Contenido y Banco de Ideas',on:true},{t:'IA Estratégica y Campañas',on:true},{t:'Automatizaciones',on:true},{t:'Soporte prioritario',on:false}],
   full:[{t:'Usuarios "Marca" ilimitados',on:true},{t:'Calendario, marcas y aprobaciones',on:true},{t:'IA de Contenido y Banco de Ideas',on:true},{t:'Métricas de Instagram',on:true},{t:'IA Estratégica y Campañas',on:true},{t:'Roles y permisos',on:true},{t:'Producción y tareas',on:true},{t:'Informes mensuales',on:true},{t:'Automatizaciones',on:true},{t:'Soporte',on:false}],
   cta:'Contratar',ctaStyle:'filled',featured:true},
  {name:'Agency Pro',price:'US$149',tagline:'Agencias con muchas marcas',badge:'',marcas:'30',usuarios:'15',
   top:[{t:'Calendario, marcas y aprobaciones',on:true},{t:'IA de Contenido y Banco de Ideas',on:true},{t:'IA Estratégica y Campañas',on:true},{t:'Automatizaciones',on:true},{t:'Soporte prioritario',on:true}],
   full:[{t:'Usuarios "Marca" ilimitados',on:true},{t:'Calendario, marcas y aprobaciones',on:true},{t:'IA de Contenido y Banco de Ideas',on:true},{t:'Métricas de Instagram',on:true},{t:'IA Estratégica y Campañas',on:true},{t:'Roles y permisos',on:true},{t:'Producción y tareas',on:true},{t:'Informes mensuales',on:true},{t:'Automatizaciones',on:true},{t:'Soporte prioritario',on:true}],
   cta:'Contratar',ctaStyle:'outline'},
  {name:'Enterprise',price:'A medida',tagline:'Agencias grandes',badge:'',marcas:'Ilimitadas',usuarios:'A medida',
   top:[{t:'Calendario, marcas y aprobaciones',on:true},{t:'IA de Contenido y Banco de Ideas',on:true},{t:'IA Estratégica y Campañas',on:true},{t:'Automatizaciones',on:true},{t:'Soporte prioritario + implementación',on:true}],
   full:[{t:'Usuarios "Marca" ilimitados',on:true},{t:'Calendario, marcas y aprobaciones',on:true},{t:'IA de Contenido y Banco de Ideas',on:true},{t:'Métricas de Instagram',on:true},{t:'IA Estratégica y Campañas',on:true},{t:'Roles y permisos',on:true},{t:'Producción y tareas',on:true},{t:'Informes mensuales',on:true},{t:'Automatizaciones',on:true},{t:'Soporte prioritario + implementación',on:true}],
   cta:'Contactar',ctaStyle:'outline'},
];

const checkIcon = (on) => `<span class="plan-check ${on?'on':'off'}">${on?'✓':'—'}</span>`;
const waPlan = (planName) => `https://wa.me/5493534134593?text=${encodeURIComponent('Hola, quiero contratar el plan '+planName+' de ContentOS')}`;

// ---------- modal de plan ----------
const planModal = document.getElementById('planModal');
const planModalNum = document.getElementById('planModalNum');
const planModalTitle = document.getElementById('planModalTitle');
const planModalList = document.getElementById('planModalList');
const planModalClose = document.getElementById('planModalClose');

document.querySelectorAll('.plan-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const p = plans[Number(btn.dataset.index)];
    planModalNum.textContent = p.price + (p.price.startsWith('US$') ? '/mes' : '');
    planModalTitle.textContent = 'Plan ' + p.name;
    planModalList.innerHTML = p.full.map(f => `<li class="${f.on?'':'off'}">${checkIcon(f.on)}${f.t}</li>`).join('');
    planModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});
const closePlanModal = () => {
  planModal.classList.remove('open');
  document.body.style.overflow = '';
};
planModalClose.addEventListener('click', closePlanModal);
planModal.addEventListener('click', (e) => { if(e.target === planModal) closePlanModal(); });

// ---------- ver todos los módulos ----------
const modShowMoreBtn = document.getElementById('modShowMoreBtn');
if(modShowMoreBtn){
  modShowMoreBtn.addEventListener('click', () => {
    document.querySelectorAll('.mod-extra').forEach((el, i) => {
      setTimeout(() => el.classList.add('mod-extra-visible'), i * 60);
    });
    modShowMoreBtn.style.display = 'none';
  });
}
// ---------- modal de módulo ----------
const modModal = document.getElementById('modModal');
const modModalMedia = document.getElementById('modModalMedia');
const modModalNum = document.getElementById('modModalNum');
const modModalTitle = document.getElementById('modModalTitle');
const modModalDesc = document.getElementById('modModalDesc');
const modModalClose = document.getElementById('modModalClose');

const openModModal = (i) => {
  const m = modules[i];
  modModalNum.textContent = 'Módulo ' + m.n;
  modModalTitle.textContent = m.title;
  modModalDesc.textContent = m.long || m.desc;
  if(m.video && m.image){
    modModalMedia.innerHTML = `
      <video src="${m.video}" autoplay muted loop playsinline class="mod-modal-video active"></video>
      <img src="${m.image}" alt="Captura del módulo ${m.title}" class="mod-modal-img">
      <div class="mod-modal-toggle">
        <button type="button" class="mod-modal-toggle-btn active" data-show="video">Video</button>
        <button type="button" class="mod-modal-toggle-btn" data-show="image">Foto</button>
      </div>`;
    const videoEl = modModalMedia.querySelector('.mod-modal-video');
    const imgEl = modModalMedia.querySelector('.mod-modal-img');
    modModalMedia.querySelectorAll('.mod-modal-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modModalMedia.querySelectorAll('.mod-modal-toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if(btn.dataset.show === 'video'){
          videoEl.classList.add('active'); imgEl.classList.remove('active'); videoEl.play();
        }else{
          videoEl.classList.remove('active'); imgEl.classList.add('active'); videoEl.pause();
        }
      });
    });
  }else if(m.video){
    modModalMedia.innerHTML = `<video src="${m.video}" autoplay muted loop playsinline></video>`;
  }else if(m.image){
    modModalMedia.innerHTML = `<img src="${m.image}" alt="Captura del módulo ${m.title}">`;
  }else{
    modModalMedia.innerHTML = `
      <div class="mod-modal-placeholder" style="--pcolor:${m.color}">
        <div class="mod-modal-placeholder-icon"><svg viewBox="0 0 24 24">${m.icon}</svg></div>
        <span>Vista previa próximamente</span>
      </div>`;
  }
  modModal.classList.add('open');
  document.body.style.overflow = 'hidden';
};
const closeModModal = () => {
  modModal.classList.remove('open');
  document.body.style.overflow = '';
};

document.querySelectorAll('.mod-card').forEach(card => {
  card.addEventListener('click', () => openModModal(Number(card.dataset.index)));
  card.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openModModal(Number(card.dataset.index)); }
  });
});
modModalClose.addEventListener('click', closeModModal);
modModal.addEventListener('click', (e) => { if(e.target === modModal) closeModModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape'){ closeModModal(); closeRoleModal(); closePlanModal(); } });

// ---------- modal de rol ----------
const roleModal = document.getElementById('roleModal');
const roleModalNum = document.getElementById('roleModalNum');
const roleModalTitle = document.getElementById('roleModalTitle');
const roleModalDesc = document.getElementById('roleModalDesc');
const roleModalList = document.getElementById('roleModalList');
const roleModalClose = document.getElementById('roleModalClose');

const openRoleModal = (i) => {
  const r = roles[i];
  roleModalNum.textContent = 'Rol';
  roleModalTitle.textContent = r.t;
  roleModalDesc.textContent = r.long || r.d;
  roleModalList.innerHTML = (r.can || []).map(c => `<li>${c}</li>`).join('');
  roleModal.classList.add('open');
  document.body.style.overflow = 'hidden';
};
const closeRoleModal = () => {
  roleModal.classList.remove('open');
  document.body.style.overflow = '';
};
document.querySelectorAll('.role-card').forEach(card => {
  card.addEventListener('click', () => openRoleModal(Number(card.dataset.index)));
  card.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openRoleModal(Number(card.dataset.index)); }
  });
});
roleModalClose.addEventListener('click', closeRoleModal);
roleModal.addEventListener('click', (e) => { if(e.target === roleModal) closeRoleModal(); });


document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => {
      if(o !== item){ o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; o.querySelector('.faq-q').setAttribute('aria-expanded','false'); }
    });
    if(isOpen){
      item.classList.remove('open'); answer.style.maxHeight = null; btn.setAttribute('aria-expanded','false');
    }else{
      item.classList.add('open'); answer.style.maxHeight = answer.scrollHeight + 'px'; btn.setAttribute('aria-expanded','true');
    }
  });
});
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
});
// ---------- menú mobile ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if(navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('mobile-open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded','false');
    });
  });
}
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:.15});
document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));
// ---------- formulario de contacto → WhatsApp ----------
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cfName').value.trim();
    const email = document.getElementById('cfEmail').value.trim();
    const phone = document.getElementById('cfPhone').value.trim();
    const msg = document.getElementById('cfMsg').value.trim();
    let text = `Hola, soy ${name} (${email}).`;
    if(phone) text += ` Mi WhatsApp: ${phone}.`;
    text += msg ? ` ${msg}` : ' Quiero pedir una demo de ContentOS.';
    window.open('https://wa.me/5493534134593?text=' + encodeURIComponent(text), '_blank');
  });
}
