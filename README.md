# NOW-Ansiedade-Social

"Your anxiety lives in the future. Your peace lives in the NOW."

O NOW é um aplicativo de suporte terapêutico focado em trazer o usuário de volta ao momento presente. Projetado especificamente para lidar com a ansiedade social e a fobia social (como o medo de iniciar uma nova faculdade), o app utiliza técnicas de Mindfulness, desafios de exposição gradual e suporte comunitário anônimo.

🎨 Design & UX
O design do NOW foi pensado para ser um "abraço visual". Evitamos cores vibrantes que geram alerta, optando por uma paleta que promove a redução do cortisol.

Link do Projeto (Figma): 

Estética: Minimalista, bordas arredondadas, tipografia limpa e ícones suaves.

🚀 Funcionalidades Principais
The Now Button: Um botão de emergência que dispara imediatamente uma técnica de Grounding (5-4-3-2-1) e exercícios de respiração para crises em ambientes sociais.

Small Steps (Missões): Desafios graduais para vencer o medo. Ex: "Hoje, apenas pergunte onde fica a biblioteca", tirando o peso de ter que "fazer amigos" instantaneamente.

Daily Anchor (Diário): Um espaço para registrar pensamentos, com foco em "O que aconteceu de fato?" vs "O que minha ansiedade disse que aconteceria?".

Safe Circle: Uma comunidade anônima onde usuários podem compartilhar vitórias e medos sem o julgamento da identidade real.

🛠️ Especificações Técnicas
Frontend
Framework: React Native com Expo (para alta performance mobile e facilidade de deploy).

Gerenciamento de Estado: Context API ou Redux para lidar com dados de progresso e XP.

Animações: react-native-reanimated para criar uma experiência fluida na respiração guiada.

Backend & API
Tecnologia: Node.js com Express ou Firebase Functions.

Autenticação: Firebase Auth ou JWT para garantir que os dados do diário sejam privados e seguros.

Arquitetura: RESTful API para comunicação entre o app e o banco de dados.

Banco de Dados (Database)
Utilizaremos uma abordagem híbrida ou focada em NoSQL (Firebase Firestore / MongoDB) pela flexibilidade:

Collections Principais:

Users: Perfil, nível de XP, e configurações de privacidade.

Missions: Lista de desafios categorizados por nível de dificuldade.

Journal: Entradas de texto criptografadas associadas ao ID do usuário.

Forum_Posts: Relatos da comunidade, curtidas e comentários.

Armazenamento Local: AsyncStorage para garantir que o exercício de respiração funcione mesmo sem internet (offline-first).

🛡️ Aviso Médico
O NOW é uma ferramenta de apoio e não substitui o acompanhamento psicológico ou psiquiátrico profissional. Ele atua como um recurso complementar baseado em técnicas de TCC (Terapia Cognitivo-Comportamental).

👩‍💻 Como contribuir
Clone o repositório.

Crie sua Feature Branch (git checkout -b feature/AmazingFeature).

Commit suas mudanças (git commit -m 'Add some AmazingFeature').

Push para a Branch (git push origin feature/AmazingFeature).

Abra um Pull Request.
