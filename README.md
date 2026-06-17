# YouShop Creator Hub 🐉

O **YouShop Creator Hub** é um projeto de inovação desenvolvido como parte do **Processo Seletivo para o Programa de Estágio YouShop 2026**.

## 📝 Para que Serve e Como Funciona
A ferramenta resolve o bloqueio criativo e a perda de tempo dos afiliados (*creators*) na criação de roteiros comerciais para mídias como TikTok, Reels e Shorts. 

O funcionamento é simples e direto na interface:
1. O *creator* navega pela vitrine de produtos e clica em **"Ver detalhes"** em qualquer item.
2. Um modal (janela) abre exibindo o nome e a descrição técnica do produto.
3. Ao clicar no botão **"Gerar Roteiro com IA"**, o JavaScript captura automaticamente esses dados textuais da tela e os envia via requisição `POST` assíncrona (JSON) para o backend.
4. O servidor em **Flask (Python)** recebe os dados, aplica engenharia de prompt focada em estratégias de marketing (como a estrutura AIDA) e consome a API do **Google Gemini**.
5. O Gemini retorna o roteiro estruturado (Gancho, Dor, Solução e CTA) que é renderizado dinamicamente na tela para o usuário.

---

## 📦 Como Baixar, Instalar e Configurar

### 1. Clonar o Repositório e Accesse a Passta do Projeto

```bash
git clone https://github.com/Orlok97/YouShop-Creator-Hub.git
cd YouShop-Creator-Hub
```

### 2. Criar e Ativar o Ambiente Virtual (venv)
#### Windows
 ```bash
 python -m venv venv 
 venv\Scripts\activate
 ```

 #### Linux/MacOS

 ```bash
python -m venv venv
source venv/bin/activate
 ```

 ### 3. Instalar as Dependências

 ```bash
pip install -r requirements.txt
 ```

 ### 4. Configurar a API do Gemini
 1. Obtenha sua chave de acesso gratuita no Google AI Studio.
 2. Crie um arquivo .env na raiz do projeto e cole sua chave no arquivo .env, como mostrado no exemplo abaixo.

 ```env
GEMINI_API_KEY="SUA_CHAVE_DE_API_AQUI"
 ```

 ### 5. Executar o Projeto

 ```bash
flask run
 ```