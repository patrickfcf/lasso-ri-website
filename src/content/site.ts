export type Locale = 'pt-BR' | 'en';
export type PageKey =
  | 'support'
  | 'privacy'
  | 'terms'
  | 'accessibility'
  | 'roadmap'
  | 'how-we-build';
export const contactUrl = 'mailto:support@lassori.app';

export const copy = {
  'pt-BR': {
    language: 'Português',
    otherLanguage: 'English',
    skip: 'Ir para o conteúdo',
    nav: ['Ecossistema', 'Como construímos', 'Suporte'],
    title: 'Lasso RI | A empresa além da cotação.',
    description:
      'Plataforma de inteligência de Relações com Investidores. Conheça os apps Apple e a visão para Core, API, MCP e Intelligence. Ecossistema em desenvolvimento.',
    eyebrow: 'Inteligência de Relações com Investidores',
    headline: 'A empresa além da cotação.',
    intro:
      'Comunicados, proventos e próximos eventos. O contexto das empresas que você acompanha, no seu ritmo.',
    cta: 'Conheça o ecossistema',
    secondary: 'Explore a plataforma',
    faqTitle: 'Antes de começar',
    faqs: [
      [
        'Já posso baixar o Lasso RI?',
        'Ainda não há um link público de distribuição anunciado. Acompanhe o estágio do projeto na página de próximos passos.',
      ],
      [
        'Os dados são atualizados em tempo real?',
        'Não. A versão atual usa exemplos incluídos no app. Comunicados, valores e datas de demonstração não representam informações financeiras atuais.',
      ],
      [
        'O Lasso RI recomenda investimentos?',
        'Não. A proposta é organizar informações de relações com investidores. Os exemplos do app não devem orientar decisões de investimento.',
      ],
      [
        'Preciso criar uma conta?',
        'Não há login na versão atual. A lista de empresas acompanhadas e a última visita são armazenadas localmente.',
      ],
    ],
    footer: 'A empresa além da cotação.',
    footerLinks: ['Privacidade', 'Termos', 'Acessibilidade', 'Próximos passos'],
    rights: 'Todos os direitos reservados.',
    back: 'Voltar ao início',
    contact: 'support@lassori.app',
    contactNote:
      'Abre seu aplicativo de e-mail. Evite enviar dados pessoais ou financeiros desnecessários.',
    notFound: 'Esta página não foi encontrada.',
    notFoundText:
      'O endereço pode ter mudado. Volte ao início para continuar explorando o Lasso RI.',
  },
  en: {
    language: 'English',
    otherLanguage: 'Português',
    skip: 'Skip to content',
    nav: ['Ecosystem', 'How we build', 'Support'],
    title: 'Lasso RI | The company beyond the stock price.',
    description:
      'An investor relations intelligence platform for Brazilian companies. Explore Apple apps and the vision for Core, API, MCP and Intelligence. An ecosystem in development.',
    eyebrow: 'Investor relations intelligence',
    headline: 'The company beyond the stock price.',
    intro:
      'Announcements, distributions and upcoming events. The context behind the companies you follow, at your pace.',
    cta: 'Discover the ecosystem',
    secondary: 'Explore the platform',
    faqTitle: 'Before you begin',
    faqs: [
      [
        'Can I download Lasso RI yet?',
        'No public distribution link has been announced. Follow the project’s current stage on the next steps page.',
      ],
      [
        'Is the data updated in real time?',
        'No. The current version uses bundled examples. Sample announcements, amounts and dates do not represent current financial information.',
      ],
      [
        'Does Lasso RI recommend investments?',
        'No. Its purpose is to organize investor relations information. App examples should not guide investment decisions.',
      ],
      [
        'Do I need an account?',
        'There is no login in the current version. Followed company identifiers and the last visit date are stored locally.',
      ],
    ],
    footer: 'The company beyond the stock price.',
    footerLinks: ['Privacy', 'Terms', 'Accessibility', 'Next steps'],
    rights: 'All rights reserved.',
    back: 'Back to home',
    contact: 'support@lassori.app',
    contactNote:
      'Opens your email app. Avoid sending unnecessary personal or financial data.',
    notFound: 'This page could not be found.',
    notFoundText:
      'The address may have changed. Return home to continue exploring Lasso RI.',
  },
} satisfies Record<Locale, object>;

export interface Article {
  title: string;
  intro: string;
  sections: { title: string; text: string }[];
}
export const articles: Record<Locale, Record<PageKey, Article>> = {
  'pt-BR': {
    support: {
      title: 'Vamos conversar.',
      intro:
        'Dúvidas, sugestões e relatos ajudam a construir o Lasso RI com mais clareza.',
      sections: [
        {
          title: 'O que incluir no seu relato',
          text: 'Descreva o que tentou fazer, o que aconteceu e qual dispositivo estava usando. Se possível, informe a versão do sistema. Remova informações pessoais de capturas de tela.',
        },
        {
          title: 'Contato disponível',
          text: 'Envie sua mensagem para support@lassori.app pelo link abaixo. O envio acontece no seu aplicativo de e-mail; este site não armazena formulários nem promete um prazo de resposta.',
        },
        {
          title: 'Sobre os dados do app',
          text: 'A versão atual usa exemplos. Se um valor ou anúncio parecer desatualizado, lembre que o catálogo não é um serviço de informações financeiras ao vivo.',
        },
      ],
    },
    privacy: {
      title: 'Privacidade, com clareza.',
      intro:
        'Esta página descreve o site e a versão atual do app com dados de exemplo. Revisada em 8 de novembro de 2026.',
      sections: [
        {
          title: 'Ao visitar este site',
          text: 'O código do site não inclui analytics, anúncios ou formulários de coleta, não define cookies e não armazena preferências no navegador. Fontes do sistema e imagens locais evitam solicitações a provedores de mídia. A hospedagem na Cloudflare processa dados técnicos de requisição, como endereço IP, para entregar e proteger as páginas. Mecanismos de proteção do provedor podem usar cookies de segurança.',
        },
        {
          title: 'No app Lasso RI',
          text: 'As empresas acompanhadas e a data da última visita ficam em UserDefaults no dispositivo. App, Watch e extensões usam contêineres locais independentes. A versão atual não tem conta, sincronização em nuvem, analytics, publicidade, rastreamento ou SDK de terceiros em execução.',
        },
        {
          title: 'Links externos',
          text: 'Ao abrir documentos ou outros links externos, você visita serviços de terceiros. Eles recebem as requisições normais de navegação e aplicam suas próprias políticas de privacidade.',
        },
        {
          title: 'Controle dos dados locais',
          text: 'As preferências permanecem no contêiner do app até serem removidas ou limpas pelo sistema. A remoção do app e de seus dados remove esse estado local; backups e restauração dependem das configurações do sistema operacional.',
        },
        {
          title: 'Contato por e-mail',
          text: 'Se você escrever para support@lassori.app, o endereço e o conteúdo enviados serão usados para tratar sua solicitação. Não envie senhas, extratos ou dados financeiros desnecessários.',
        },
        {
          title: 'Quando esta página muda',
          text: 'Novos serviços de rede, contas, analytics ou armazenamento compartilhado exigirão revisão desta página. Para dúvidas, consulte o canal do mantenedor abaixo.',
        },
      ],
    },
    terms: {
      title: 'Sobre o uso do Lasso RI.',
      intro: 'Informações sobre o escopo atual do projeto e deste site.',
      sections: [
        {
          title: 'Um projeto em desenvolvimento',
          text: 'O site apresenta a proposta e o estágio atual do Lasso RI. A base do app usa dados de exemplo, e não há disponibilidade pública, cobertura de empresas ou prazo de lançamento garantidos.',
        },
        {
          title: 'Dados demonstrativos',
          text: 'Comunicados, valores e datas incluídos no app são exemplos. Não use esses dados como fonte de informação financeira atual nem como recomendação de investimento.',
        },
        {
          title: 'Fontes externas',
          text: 'Documentos e páginas de terceiros têm suas próprias condições de acesso. O Lasso RI não representa as empresas citadas nos exemplos nem anuncia vínculo com bolsas, reguladores ou emissores.',
        },
        {
          title: 'Propriedade do projeto',
          text: 'Lasso RI, seu código, documentação e assets são proprietários. O acesso ao site não concede uma licença para redistribuir esses materiais. Componentes de terceiros permanecem sujeitos às respectivas licenças.',
        },
        {
          title: 'Próximas versões',
          text: 'Recursos, condições de distribuição e práticas de dados podem evoluir. As páginas públicas devem acompanhar essas mudanças antes de uma publicação do app.',
        },
      ],
    },
    accessibility: {
      title: 'Feito para ser legível.',
      intro:
        'Acessibilidade orienta a construção do site. Esta declaração não equivale a uma certificação de conformidade.',
      sections: [
        {
          title: 'Navegação e leitura',
          text: 'O site usa HTML semântico, títulos hierárquicos, link para pular ao conteúdo e foco visível. Os links têm nomes descritivos, e as perguntas frequentes funcionam com teclado.',
        },
        {
          title: 'Suas preferências',
          text: 'O layout se adapta a telas menores e ao aumento de texto. O tema pode seguir o sistema ou ser escolhido como claro ou escuro, sem armazenar a escolha. Animações sutis respeitam a preferência por movimento reduzido. A informação não depende apenas de cor.',
        },
        {
          title: 'Limites e relatos',
          text: 'Testes automáticos ajudam a identificar problemas, mas não substituem avaliações com pessoas e tecnologias assistivas. Se encontrar uma barreira, descreva a página, o dispositivo e a tecnologia utilizada ao entrar em contato.',
        },
      ],
    },
    roadmap: {
      title: 'O que vem a seguir.',
      intro: 'Uma direção de trabalho, sem datas ou promessas de lançamento.',
      sections: [
        {
          title: 'A base de hoje',
          text: 'Watchlist, catálogo de empresas, documentos e calendário com exemplos. Interfaces nativas para dispositivos Apple, preferências locais e uma base de testes automatizados.',
        },
        {
          title: 'Uma infraestrutura compartilhada',
          text: 'Core e API são as próximas bases planejadas. A ingestão de fontes oficiais, direitos de uso, proveniência, contratos e segurança precedem as integrações. A aprovação de arquitetura não significa disponibilidade de serviços.',
        },
        {
          title: 'A visão do ecossistema',
          text: 'MCP para clientes de IA compatíveis, Intelligence com monitoramentos e resumos, portal web e webhooks são experiências planejadas. Não há datas, acesso antecipado, planos comerciais ou integrações públicas anunciadas.',
        },
        {
          title: 'Antes de uma distribuição pública',
          text: 'Validar a experiência nas plataformas, ampliar a revisão de acessibilidade e localização e concluir as etapas de publicação. Não há link de download público anunciado.',
        },
        {
          title: 'Informações reais, com responsabilidade',
          text: 'Qualquer integração de dados deverá definir fontes, atualização, disponibilidade e limites de uso. Feed ao vivo, alertas e sincronização não são recursos disponíveis na versão atual.',
        },
      ],
    },
    'how-we-build': {
      title: 'Clareza também por dentro.',
      intro:
        'Poucas peças, responsabilidades definidas e respeito pelo estágio real do produto.',
      sections: [
        {
          title: 'Uma plataforma, diferentes interfaces',
          text: 'O ecossistema está sendo desenhado em torno de uma base compartilhada: fontes autorizadas → Core → API → apps Apple, MCP, web e automações. A base SwiftUI existente usa dados de exemplo e armazenamento local. Core, API e integrações ainda não estão disponíveis.',
        },
        {
          title: 'Core e API: contratos antes das integrações',
          text: 'O Core deverá cuidar de ingestão, normalização, deduplicação e proveniência. A API REST/OpenAPI deverá expor dados e serviços com autenticação e permissões próprias. Postgres e Workers são a direção de infraestrutura aprovada, ainda sem serviço provisionado. Não há endpoint público, documentação de API operacional ou emissão de chaves.',
        },
        {
          title: 'MCP, Intelligence e webhooks',
          text: 'O MCP será um adapter da API para clientes compatíveis, sem duplicar regras de negócio. Monitores, resumos e webhooks dependerão dos dados oficiais, das permissões e da execução no backend. A demonstração deste site é ilustrativa e não configura ações reais.',
        },
        {
          title: 'Identidade e dados privados',
          text: 'A direção aprovada prevê uma conta Lasso compartilhada entre apps, futuro portal e MCP, preservando uso local sem login. Conta, sincronização e concessões por cliente ainda precisam ser implementadas; não existe login neste website.',
        },
        {
          title: 'Um site leve',
          text: 'Este site usa Astro para entregar páginas estáticas, com componentes compartilhados e conteúdo em português brasileiro e inglês. A leitura e a navegação básica funcionam sem JavaScript.',
        },
        {
          title: 'Qualidade verificável',
          text: 'O repositório inclui instruções para contribuidores e agentes, verificações de tipos, lint, formatação, testes e validação de páginas geradas. Mudanças passam por pull requests antes de chegar à branch principal.',
        },
        {
          title: 'Compromissos de conteúdo',
          text: 'Nenhum indicador fictício de sucesso, depoimento inventado ou anúncio de funcionalidade sem implementação. As limitações atuais fazem parte da apresentação do produto.',
        },
      ],
    },
  },
  en: {
    support: {
      title: 'Let’s talk.',
      intro:
        'Questions, suggestions and reports help us build a clearer Lasso RI.',
      sections: [
        {
          title: 'What to include',
          text: 'Describe what you tried, what happened and which device you used. Include your operating system version if possible. Remove personal information from screenshots.',
        },
        {
          title: 'Available contact',
          text: 'Use the link below to email support@lassori.app. Sending takes place in your email app; this website does not store submissions or promise a response time.',
        },
        {
          title: 'About the app’s data',
          text: 'The current version uses examples. If an amount or announcement looks outdated, remember that the catalog is not a live financial information service.',
        },
      ],
    },
    privacy: {
      title: 'Privacy, explained.',
      intro:
        'This page describes the website and the current sample-data app. Reviewed on November 8, 2026.',
      sections: [
        {
          title: 'When you visit this site',
          text: 'The website code includes no analytics, advertising or collection forms, sets no cookies and stores no browser preferences. System fonts and local images avoid requests to media providers. Cloudflare hosting processes technical request data, such as IP addresses, to deliver and protect pages. The provider’s protection mechanisms may use security cookies.',
        },
        {
          title: 'In the Lasso RI app',
          text: 'Followed company identifiers and the last visit date are stored in UserDefaults on your device. The app, Watch and extensions use independent local containers. The current version has no account, cloud synchronization, analytics, advertising, tracking or third-party runtime SDK.',
        },
        {
          title: 'External links',
          text: 'Opening documents or other external links takes you to third-party services. They receive normal browsing requests and apply their own privacy policies.',
        },
        {
          title: 'Controlling local data',
          text: 'Preferences remain in the app container until cleared or removed by the operating system. Removing the app and its data removes that local state; backups and restoration depend on your operating system settings.',
        },
        {
          title: 'Email contact',
          text: 'If you write to support@lassori.app, your address and message will be used to handle your request. Do not send passwords, statements or unnecessary financial data.',
        },
        {
          title: 'When this page changes',
          text: 'New network services, accounts, analytics or shared storage will require a review of this page. For questions, use the maintainer’s contact below.',
        },
      ],
    },
    terms: {
      title: 'About using Lasso RI.',
      intro:
        'Information about the current scope of the project and this website.',
      sections: [
        {
          title: 'A project in development',
          text: 'This website presents Lasso RI’s purpose and current stage. The app foundation uses sample data. Public availability, company coverage and a launch date are not guaranteed.',
        },
        {
          title: 'Demonstration data',
          text: 'App announcements, amounts and dates are examples. Do not use this data as a source of current financial information or as investment advice.',
        },
        {
          title: 'External sources',
          text: 'Third-party documents and pages have their own access conditions. Lasso RI does not represent the companies mentioned in examples or claim affiliation with exchanges, regulators or issuers.',
        },
        {
          title: 'Project ownership',
          text: 'Lasso RI, its source code, documentation and assets are proprietary. Access to the website does not grant a license to redistribute these materials. Third-party components remain subject to their respective licenses.',
        },
        {
          title: 'Future versions',
          text: 'Features, distribution terms and data practices may evolve. Public pages should reflect these changes before an app release.',
        },
      ],
    },
    accessibility: {
      title: 'Designed to be readable.',
      intro:
        'Accessibility guides the website’s development. This statement is not a certification of compliance.',
      sections: [
        {
          title: 'Navigation and reading',
          text: 'The website uses semantic HTML, hierarchical headings, a skip link and visible focus. Links have descriptive names and frequently asked questions work with a keyboard.',
        },
        {
          title: 'Your preferences',
          text: 'The layout adapts to smaller screens and enlarged text. The theme can follow your system or be set to light or dark without storing the choice. Subtle animations respect reduced motion. Information does not rely only on color.',
        },
        {
          title: 'Limitations and reports',
          text: 'Automated tests help identify problems but do not replace evaluations with people and assistive technology. If you encounter a barrier, describe the page, device and technology when contacting us.',
        },
      ],
    },
    roadmap: {
      title: 'What comes next.',
      intro: 'A direction of work, without dates or launch promises.',
      sections: [
        {
          title: 'Today’s foundation',
          text: 'A watchlist, company catalog, documents and calendar with examples. Native interfaces for Apple devices, local preferences and a foundation of automated tests.',
        },
        {
          title: 'A shared infrastructure',
          text: 'Core and API are the next planned foundations. Official source ingestion, usage rights, provenance, contracts and security precede integrations. Architecture approval does not imply services are available.',
        },
        {
          title: 'The ecosystem vision',
          text: 'MCP for compatible AI clients, Intelligence with monitors and summaries, a web portal and webhooks are planned experiences. No dates, early access, commercial plans or public integrations have been announced.',
        },
        {
          title: 'Before public distribution',
          text: 'Validate the platform experiences, expand accessibility and localization review and complete publication requirements. No public download link has been announced.',
        },
        {
          title: 'Real information, responsibly',
          text: 'Any data integration will need defined sources, freshness, availability and usage limits. Live feeds, alerts and synchronization are not available in the current version.',
        },
      ],
    },
    'how-we-build': {
      title: 'Clarity under the surface.',
      intro:
        'A few well-defined parts and respect for the product’s actual stage.',
      sections: [
        {
          title: 'One platform, different interfaces',
          text: 'The ecosystem is being designed around a shared foundation: authorized sources → Core → API → Apple apps, MCP, web and automations. The existing SwiftUI foundation uses sample data and local storage. Core, API and integrations are not available yet.',
        },
        {
          title: 'Core and API: contracts before integrations',
          text: 'Core is intended to handle ingestion, normalization, deduplication and provenance. The REST/OpenAPI API is intended to expose data and services with authentication and permissions. Postgres and Workers are the approved infrastructure direction, with no service provisioned. There is no public endpoint, operational API reference or API key issuance.',
        },
        {
          title: 'MCP, Intelligence and webhooks',
          text: 'MCP will be an API adapter for compatible clients, without duplicating business rules. Monitors, summaries and webhooks will depend on official data, permissions and backend execution. This website’s demonstration is illustrative and does not configure real actions.',
        },
        {
          title: 'Identity and private data',
          text: 'The approved direction is a shared Lasso account across apps, the future portal and MCP, preserving local use without login. Accounts, synchronization and per-client grants still require implementation; there is no login on this website.',
        },
        {
          title: 'A lightweight website',
          text: 'This website uses Astro to deliver static pages, shared components and Brazilian Portuguese and English content. Reading and basic navigation work without JavaScript.',
        },
        {
          title: 'Verifiable quality',
          text: 'The repository includes contributor and agent instructions, type checking, linting, formatting, tests and generated-page validation. Changes go through pull requests before reaching the main branch.',
        },
        {
          title: 'Content commitments',
          text: 'No invented success metrics, fictional testimonials or features announced without an implementation. Current limitations are part of the product’s presentation.',
        },
      ],
    },
  },
};
