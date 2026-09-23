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
    nav: ['O app', 'Como construímos', 'Suporte'],
    title: 'Lasso RI | Acompanhe empresas, com contexto',
    description:
      'Conheça o Lasso RI: um app nativo Apple para organizar comunicados, documentos e eventos de relações com investidores. Em desenvolvimento, com dados de exemplo.',
    eyebrow: 'Relações com investidores, no seu ritmo',
    headline: 'Mais contexto. Menos ruído.',
    intro:
      'Comunicados, documentos e eventos das empresas que você acompanha. Um espaço para olhar além da cotação.',
    cta: 'Conheça o app',
    secondary: 'Veja o que vem a seguir',
    artwork: 'Ícone original do Lasso RI',
    statusTitle: 'Um produto em construção, com os pés no chão.',
    status:
      'O app já tem uma base funcional com dados de exemplo. Ainda não há feed ao vivo, conta, assinatura ou distribuição pública anunciada.',
    featureTitle: 'A empresa por inteiro.',
    featureIntro:
      'Da sua lista de interesse ao próximo evento, informações de RI organizadas para uma leitura com calma.',
    features: [
      [
        'Sua lista, seu foco',
        'Acompanhe as empresas de seu interesse em uma watchlist salva no dispositivo.',
        'Watchlist',
      ],
      [
        'Documentos com contexto',
        'Explore fatos relevantes, comunicados e materiais de resultados no catálogo de demonstração.',
        'Documentos',
      ],
      [
        'Datas que merecem atenção',
        'Consulte eventos corporativos, dividendos e JCP, distinguindo cada tipo de informação.',
        'Calendário',
      ],
      [
        'Uma visão do dia',
        'Veja as atualizações agrupadas e identifique o que é novo desde a última visita.',
        'Hoje',
      ],
    ],
    platformTitle: 'Em casa nos seus dispositivos Apple.',
    platformText:
      'Uma interface nativa, pensada para cada tela. No iPhone, listas claras. No iPad e Mac, espaço para explorar. No Watch e na TV, visões rápidas.',
    platforms: ['iPhone e iPad', 'Mac', 'Apple Watch', 'Apple TV'],
    platformNote:
      'Base atual para sistemas Apple 26 ou posteriores. Os dados locais do app, Watch e extensões ainda são independentes.',
    privacyTitle: 'Sua lista fica com você.',
    privacyText:
      'Na versão atual, as preferências ficam no dispositivo. Sem conta, publicidade ou analytics no app. Os exemplos vêm incluídos na instalação.',
    privacyLink: 'Entenda a privacidade',
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
    footer: 'Um olhar mais atento para as empresas.',
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
    nav: ['The app', 'How we build', 'Support'],
    title: 'Lasso RI | Follow companies, with context',
    description:
      'Meet Lasso RI: a native Apple app for organizing Brazilian investor relations announcements, documents and events. In development with sample data.',
    eyebrow: 'Investor relations, at your pace',
    headline: 'More context. Less noise.',
    intro:
      'Announcements, documents and events from the companies you follow. A place to look beyond the share price.',
    cta: 'Explore the app',
    secondary: 'See what comes next',
    artwork: 'Original Lasso RI app icon',
    statusTitle: 'A work in progress, grounded in reality.',
    status:
      'The app has a working foundation with sample data. There is no live feed, account, subscription or announced public distribution yet.',
    featureTitle: 'See the whole company.',
    featureIntro:
      'From your watchlist to the next event, investor relations information organized for a considered read.',
    features: [
      [
        'Your list, your focus',
        'Follow companies you are interested in with a watchlist saved on your device.',
        'Watchlist',
      ],
      [
        'Documents in context',
        'Explore material facts, shareholder notices and earnings materials in the demo catalog.',
        'Documents',
      ],
      [
        'Dates worth following',
        'Browse corporate events, dividends and interest on equity (JCP), with distinct information types.',
        'Calendar',
      ],
      [
        'A view of the day',
        'Read grouped updates and identify what is new since your last visit.',
        'Today',
      ],
    ],
    platformTitle: 'At home on your Apple devices.',
    platformText:
      'A native interface designed for each screen. Clear lists on iPhone. Room to explore on iPad and Mac. Glanceable views on Watch and TV.',
    platforms: ['iPhone and iPad', 'Mac', 'Apple Watch', 'Apple TV'],
    platformNote:
      'The current foundation targets Apple operating systems 26 or later. The app, Watch and extensions still have independent local data.',
    privacyTitle: 'Your list stays with you.',
    privacyText:
      'In the current version, preferences stay on your device. No account, advertising or analytics in the app. Examples are bundled with the installation.',
    privacyLink: 'Understand privacy',
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
    footer: 'A closer look at the companies you follow.',
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
        'Esta página descreve o site e a versão atual do app com dados de exemplo. Revisada em 23 de setembro de 2026.',
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
          text: 'O layout se adapta a telas menores e ao aumento de texto. O tema acompanha a preferência clara ou escura do sistema. Não há animação automática ou conteúdo que dependa apenas de cor.',
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
          title: 'Um app nativo',
          text: 'O Lasso RI é construído em SwiftUI, com modelos de domínio separados das fontes de dados. A versão atual usa repositórios de exemplo e armazenamento local, sem dependências externas de aplicação.',
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
        'This page describes the website and the current sample-data app. Reviewed on September 23, 2026.',
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
          text: 'The layout adapts to smaller screens and enlarged text. The theme follows your system’s light or dark preference. There is no automatic animation or content that relies only on color.',
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
          title: 'A native app',
          text: 'Lasso RI uses SwiftUI, with domain models separated from data sources. The current version uses sample repositories and local storage, without third-party application dependencies.',
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
