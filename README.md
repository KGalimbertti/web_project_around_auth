# Tripleten web_project_around_auth

# Around The U.S. (React Edition)

Esta é uma aplicação interativa desenvolvida em React, que permite aos usuários compartilhar fotos de lugares interessantes, curtir postagens e gerenciar seus perfis. O projeto foca em uma experiência de usuário dinâmica, integrando-se a uma API externa para persistência de dados e autenticação.

# Tecnologias Utilizadas

Para a conclusão deste projeto, foram aplicadas as seguintes tecnologias e conceitos de desenvolvimento:

# Core Front-end

React.js: Biblioteca principal para construção da interface baseada em componentes.

React Router Dom (v6): Gerenciamento de rotas, incluindo navegação programática (useNavigate) e proteção de rotas.

Context API: Utilizada para gerenciar o estado global do usuário (CurrentUserContext), evitando o prop drilling.

# Hooks & Lógica

useState: Controle de estados locais (cards, dados do usuário, estados de popups e login).

useEffect: Sincronização com a API para carregamento inicial de dados e verificação de tokens de autenticação.

# Integração e Segurança

Fetch API / Axios: Comunicação com uma API REST para operações de CRUD (Criar, Ler, Atualizar e Deletar).

JWT (JSON Web Tokens): Implementação de autenticação persistente via armazenamento e validação de tokens.

Protected Routes: Componentes de alta ordem para restringir o acesso a páginas apenas para usuários logados.

# Funcionalidades Implementadas

Autenticação Completa: Fluxo de Registro, Login e verificação automática de token ao recarregar a página.

Gestão de Perfil: Edição de informações do usuário com atualização em tempo real via Context.

Feed de Cards:

Listagem dinâmica de locais.

Adição de novos cards.

Sistema de "Likes" com atualização otimista de estado.

Exclusão de cards.

Interface Responsiva: Gerenciamento de modais e popups para uma experiência fluida.
