const theme=document.querySelector('html');
const icon=document.querySelector('#themeIcon');
const modal=document.querySelector('#modal');
const aiResponse=document.querySelector('#ai-response');
let isDark=true;

const youShopProducts = [
  {
    id: 1,
    name: "Curso: Mestre do Design Canva",
    price: 150.00,
    commission: 30,
    description: "Domine o design gráfico profissional utilizando apenas o Canva. Inclui 50 templates editáveis para redes sociais.",
    company: "Design Academy BR",
    img: "https://trinity.sistemaead.com/_arquivos/ecommerce/produtos/20241109214412_c8fe44423c3c140484dd79c09.webp"
  },
  {
    id: 2,
    name: "E-book: Receitas Low Carb em 15 Minutos",
    price: 49.90,
    commission: 25,
    description: "Guia prático com 100 receitas saudáveis, rápidas e de baixo custo para quem busca emagrecimento sem sofrimento.",
    company: "NutriLife Digital",
    img: "https://consultvida.com.br/blog/wp-content/uploads/2023/09/emagrecimento.jpg"
  },
  {
    id: 3,
    name: "Software: Gerenciador de Anúncios AI",
    price: 399.00,
    commission: 30,
    description: "Ferramenta de automação que utiliza inteligência artificial para otimizar campanhas no Google e Meta Ads.",
    company: "TechAds Solutions",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJngkRY3jv9TLTeRDRkudcMbxxZPDqphPFBg&s"
  },
  {
    id: 4,
    name: "Mentoria: Destrave seu Inglês",
    price: 997.00,
    commission: 25,
    description: "Programa de acompanhamento de 4 semanas com foco em conversação para viajantes e negócios.",
    company: "SpeakEasy Idiomas",
    img: "https://cdn.green.wizard.com.br/wp-content/uploads/2025/12/03163234/palavras-em-ingles-britanico-e-ingles-americano-wizard-1.jpg"
  },
  {
    id: 5,
    name: "Kit de Presets Profissionais (Lightroom)",
    price: 79.90,
    commission: 25,
    description: "Pacote com 30 filtros exclusivos para deixar suas fotos do Instagram com visual de cinema.",
    company: "Creative Edits",
    img: "https://wallpapercave.com/wp/wp9739188.jpg"
  },
  {
    id: 6,
    name: "Plataforma de E-mail Marketing Pro",
    price: 249.00,
    commission: 35,
    description: "Assinatura anual de ferramenta de automação de e-mails com foco em alta taxa de entrega.",
    company: "MailSend Pro",
    img: "https://www.wpbeginner.com/wp-content/uploads/2024/05/email-management-software-og.png"
  },
  {
    id: 7,
    name: "Planner Digital 2026: Foco e Produtividade",
    price: 34.90,
    commission: 40,
    description: "Agenda digital interativa com organização diária, semanal e controle de hábitos financeiros.",
    company: "Mindful Planner",
    img: "https://static.vecteezy.com/ti/vetor-gratis/p1/32184646-calendario-e-dinheiro-como-forma-de-pagamento-encontro-lembrete-ilustracao-plano-desenho-animado-dinheiro-cronograma-ou-agenda-e-encontro-alerta-notificacao-imposto-ou-credito-pagar-tempo-ou-emprestimo-despesas-ou-financeiro-planejamento-vetor.jpg"
  },
  {
    id: 8,
    name: "Masterclass: Investimentos para Iniciantes",
    price: 197.00,
    commission: 30,
    description: "Workshop gravado de 6 horas ensinando do zero como investir em renda fixa e variável.",
    company: "Finance Master",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMkGQ4xAH_miNbthSdAXbf-hQByOfV9klROA&s"
  },
  {
    id: 9,
    name: "Combo de Plugins para Edição de Vídeo",
    price: 120.00,
    commission: 33,
    description: "Coleção de transições e efeitos sonoros para criadores de conteúdo de YouTube e TikTok.",
    company: "VideoCraft FX",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiHEOqxP4-Vfui4QlJsB5OwKKamJFgJt-0w&s"
  },
  {
    id: 10,
    name: "Consultoria Individual: SEO para E-commerce",
    price: 1200.00,
    commission: 25,
    description: "Sessão de consultoria de 1h30 para otimização de SEO em lojas virtuais de pequeno porte.",
    company: "RankUp Consultoria",
    img: "https://images.squarespace-cdn.com/content/v1/5f0f2f1bd47e182f22a3bd84/1614204340871-F8G9HCTNA3NLWYJHGFVA/seo_for_ecommerce.jpg"
  }
];

const createCards=()=>{
    let produtoContainer=document.querySelector('#produto-container');
    let card='';
    for(let i=0; i<youShopProducts.length; i++){
        let product=youShopProducts[i];
        card=card+`
            <div class="row justify-content-center my-4">
                <div class="col-12 col-sm-4">
                    <div class="card">
                    <img src="${product.img}" class="card-img-top" alt="card image">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${product.company}</h6>
                            <div class="text-center mt-4 mb-2">
                                <button class="btn btn-outline-success mx-2" data-bs-toggle="modal" data-bs-target="#modal" onclick="openCardDetails(${i})">Ver detalhes</button>
                                <button class="btn btn-success mx-2" disabled>Solicitar afiliação</button>
                            </div>
                            <div class="mt-2" style="display:flex; width:100%;">
                                <b>Comissão: ${product.commission}%</b>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    produtoContainer.innerHTML=card;
}

const generateGeminiResponse= async()=>{
  aiResponse.innerHTML=`
    <div class="row">
          <div class="col-12">
              <p>Aguarde, sua resposta esta sendo gerada.</p>
          </div>
    </div>
    <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Carregando</span>
        </div>
    </div>
  `;
  
  let nome=document.querySelector('#produto-nome').innerHTML;
  let desc=document.querySelector('#produto-desc').innerHTML;
  console.log(nome)
  try{
    const response= await fetch('/api/gemini',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        'content':`nome do produto: ${nome}, descrição: ${desc}`
      })
    })

    if(!response.ok){
      throw new Error('erro ao enviar os dados')
    }

    const data= await response.json()
    if(data){
      aiResponse.innerHTML=data.response;
      document.querySelector('#ai-modal-btn').removeAttribute('disabled');
    }
    
  }catch(err){
    console.log("erro: "+err)
  }
}
document.querySelector('#generate-btn').addEventListener('click',generateGeminiResponse)

const openCardDetails=(index)=>{
    let i = parseInt(index, 10);
    let product=youShopProducts[i];
    document.querySelector('#produto-nome').innerHTML=product.name;
    document.querySelector('#produto-img').src=product.img;
    document.querySelector('#produto-desc').innerHTML=product.description;
    document.querySelector('#produto-comissao').innerHTML=`Comissão ${product.commission}%`;
}
const getTheme=()=>{
    return theme.getAttribute('data-bs-theme');
}

const setTheme=(t)=>{
    theme.setAttribute('data-bs-theme',t);
}
const toggleTheme=()=>{
    isDark=!isDark;
    if(isDark){
        setTheme('dark');
        icon.setAttribute('name','sunny-outline');
    }else{
        setTheme('light');
        icon.setAttribute('name','moon-outline');
    }
    
    icon.setAttribute('size','large');
    icon.setAttribute('style','cursor:pointer;');
}

icon.addEventListener('click',toggleTheme);
createCards();
console.log('pagina carregada');