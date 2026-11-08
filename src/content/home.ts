import type { Locale } from './site';

interface Product {
  id: string;
  name: string;
  symbol: string;
  stage: string;
  description: string;
  detail: string;
}
interface HomeContent {
  contextTitle: string;
  contextIntro: string;
  contexts: [string, string, string][];
  ecosystemTitle: string;
  ecosystemIntro: string;
  products: Product[];
  intelligenceTitle: string;
  intelligenceIntro: string;
  demoLabel: string;
  request: string;
  flow: [string, string][];
  responseTitle: string;
  response: string;
  demoNote: string;
  signatureTitle: string;
  signatureIntro: string;
  signatureFeatures: [string, string][];
  architectureTitle: string;
  architectureIntro: string;
  architectureNote: string;
  sourceTitle: string;
  sources: string[];
  coreText: string;
  coreDetail: string;
  apiText: string;
  apiDetail: string;
  inspect: string;
  evolutionTitle: string;
  evolutionIntro: string;
  evolution: [string, string, string][];
  roadmap: string;
  engineering: string;
}

export const home: Record<Locale, HomeContent> = {
  'pt-BR': {
    contextTitle: 'Cada acontecimento faz parte de uma história.',
    contextIntro:
      'Um comunicado aqui. Uma data em outro lugar. O Lasso RI está sendo construído para reunir as peças e tornar o contexto mais fácil de acompanhar.',
    contexts: [
      [
        'Documentos e comunicados',
        'Fatos relevantes, resultados e publicações oficiais. A informação acompanhada de sua origem.',
        'Publicação → fonte → contexto',
      ],
      [
        'Proventos e próximos eventos',
        'Dividendos, juros sobre capital próprio e assembleias. Cada tipo de evento com suas datas e seu significado.',
        'Anúncio → data-com → pagamento',
      ],
      [
        'Empresas e continuidade',
        'Uma lista de interesse e um histórico de acontecimentos. Para retomar a leitura de onde você parou.',
        'Descoberta → acompanhamento → histórico',
      ],
    ],
    ecosystemTitle: 'Um ecossistema. Várias formas de acompanhar.',
    ecosystemIntro:
      'Uma base de informação compartilhada, com experiências pensadas para diferentes momentos. Conheça o que existe e o que estamos planejando.',
    products: [
      {
        id: 'apple',
        name: 'Apple Apps',
        symbol: '⌘',
        stage: 'Em desenvolvimento',
        description: 'O contexto das empresas, em uma experiência nativa.',
        detail:
          'Base SwiftUI com empresas, documentos, proventos e agenda de exemplo. iPhone e demais plataformas Apple, com evolução por plataforma. Sem distribuição pública anunciada.',
      },
      {
        id: 'mcp',
        name: 'Lasso RI MCP',
        symbol: '⌁',
        stage: 'Planejado',
        description: 'Uma ponte para os assistentes que você já usa.',
        detail:
          'Adapter planejado sobre a API para ChatGPT, Claude e outros clientes MCP compatíveis. Conexão e ferramentas ainda não disponíveis.',
      },
      {
        id: 'intelligence-product',
        name: 'Intelligence',
        symbol: '✳',
        stage: 'Planejado',
        description: 'Acompanhar acontecimentos. Preservar o contexto.',
        detail:
          'Visão de monitoramentos, resumos com fontes e alertas. Depende da ingestão oficial, das permissões e dos serviços de execução.',
      },
      {
        id: 'api',
        name: 'Lasso RI API',
        symbol: '{ }',
        stage: 'Planejada',
        description: 'Uma infraestrutura comum para novas experiências.',
        detail:
          'REST e OpenAPI previstos para dados, autenticação, permissões, watchlists e serviços compartilhados. Sem endpoint público ou emissão de chaves.',
      },
      {
        id: 'web',
        name: 'Lasso RI Web',
        symbol: '⊞',
        stage: 'Site disponível / portal planejado',
        description: 'A plataforma também começa pela web.',
        detail:
          'Este website apresenta o ecossistema. O futuro portal, com acompanhamento de empresas, dependerá da API e de uma implementação própria de conta e permissões.',
      },
      {
        id: 'webhooks',
        name: 'Webhooks',
        symbol: '↗',
        stage: 'Planejados',
        description: 'Informação que poderá chegar a outros fluxos.',
        detail:
          'Entregas para integrações e automações externas fazem parte da visão do backend. Assinaturas, tentativas de reenvio e controles de acesso ainda precisam ser implementados.',
      },
    ],
    intelligenceTitle: 'Do que você quer acompanhar ao que merece sua atenção.',
    intelligenceIntro:
      'A visão para o Lasso RI Intelligence: transformar uma intenção em acompanhamento contínuo, sempre conectado às fontes.',
    demoLabel: 'Demonstração conceitual',
    request:
      'Monitore TAEE11 e BBAS3. Quero acompanhar novos fatos relevantes e dividendos anunciados.',
    flow: [
      ['Solicitação', 'Empresas e assuntos de interesse'],
      ['Monitoramento', 'Consulta e identificação de novidades'],
      ['Acontecimentos', 'Publicações com origem e histórico'],
      ['Resumo', 'Contexto e links para as fontes'],
    ],
    responseTitle: 'Como um resumo poderia ser organizado',
    response:
      'Novos acontecimentos seriam agrupados por empresa e tipo, com data de publicação, origem e links para leitura. Fatos e interpretação seriam apresentados separadamente.',
    demoNote:
      'Fluxo ilustrativo de uma integração planejada. Nenhum monitoramento foi configurado. Não há consulta a dados reais nesta demonstração.',
    signatureTitle: 'Clareza em cada detalhe.',
    signatureIntro:
      'Lasso Signature é a direção da experiência Apple: uma leitura organizada pelo que acontece nas empresas, com espaço para aprofundar.',
    signatureFeatures: [
      [
        'Um radar, com foco',
        'Próximos eventos, novidades e empresas acompanhadas em uma hierarquia clara.',
      ],
      [
        'Proventos sem ambiguidade',
        'Dividendo e JCP identificados. Anúncio, data-com e pagamento com papéis distintos.',
      ],
      [
        'Da síntese ao documento',
        'Contexto primeiro. Documentos, origem e histórico para continuar a leitura.',
      ],
    ],
    architectureTitle: 'Uma plataforma por trás de cada experiência.',
    architectureIntro:
      'A informação percorre uma base comum antes de chegar a cada canal. A origem permanece parte da história.',
    architectureNote:
      'Visão de arquitetura planejada. As conexões representam o desenho da plataforma, não serviços em execução.',
    sourceTitle: 'Fontes oficiais e autorizadas',
    sources: [
      'CVM',
      'B3',
      'Relações com Investidores',
      'Documentos e notícias autorizados',
    ],
    coreText: 'Organizar a informação. Preservar a origem.',
    coreDetail:
      'Ingestão, normalização, deduplicação, proveniência, armazenamento e processamento. A direção aprovada prevê Postgres e serviços de backend; a ingestão e os direitos de uso dependem de validação.',
    apiText: 'Uma linguagem comum entre os canais.',
    apiDetail:
      'REST/OpenAPI, autenticação, permissões, watchlists e serviços compartilhados. Os clientes consomem o mesmo contrato; o MCP será um adapter, sem duplicar as regras de negócio.',
    inspect: 'Explorar a camada',
    evolutionTitle: 'Uma visão ambiciosa. Uma evolução transparente.',
    evolutionIntro:
      'O ecossistema está em desenvolvimento. Cada nova experiência depende de fontes verificadas, contratos claros e validação antes de ser disponibilizada.',
    evolution: [
      [
        'Agora',
        'A fundação',
        'Website institucional e base dos apps Apple com dados de exemplo.',
      ],
      [
        'Próximas bases',
        'Core e API',
        'Ingestão oficial, proveniência e serviços compartilhados antes das integrações.',
      ],
      [
        'Na visão',
        'Novas experiências',
        'MCP, Intelligence, portal e webhooks, sem promessa de datas ou lançamento.',
      ],
    ],
    roadmap: 'Acompanhe a evolução',
    engineering: 'Como construímos',
  },
  en: {
    contextTitle: 'Every event is part of a bigger story.',
    contextIntro:
      'An announcement here. A date somewhere else. Lasso RI is being built to bring the pieces together and make company context easier to follow.',
    contexts: [
      [
        'Documents and announcements',
        'Material facts, earnings and official publications. Information with a clear path back to its source.',
        'Publication → source → context',
      ],
      [
        'Distributions and upcoming events',
        'Dividends, interest on equity and shareholder meetings. Each event with its own dates and meaning.',
        'Announcement → entitlement → payment',
      ],
      [
        'Companies and continuity',
        'A watchlist and a history of company events. A considered way to pick up where you left off.',
        'Discovery → following → history',
      ],
    ],
    ecosystemTitle: 'One ecosystem. More ways to stay informed.',
    ecosystemIntro:
      'A shared information foundation, with experiences for different moments. Explore what exists today and what we are planning.',
    products: [
      {
        id: 'apple',
        name: 'Apple Apps',
        symbol: '⌘',
        stage: 'In development',
        description: 'Company context in a native experience.',
        detail:
          'A SwiftUI foundation with sample companies, documents, distributions and events. iPhone and other Apple platforms, evolving individually. No announced public distribution.',
      },
      {
        id: 'mcp',
        name: 'Lasso RI MCP',
        symbol: '⌁',
        stage: 'Planned',
        description: 'A bridge to the assistants you already use.',
        detail:
          'A planned API adapter for ChatGPT, Claude and other compatible MCP clients. Connections and tools are not available yet.',
      },
      {
        id: 'intelligence-product',
        name: 'Intelligence',
        symbol: '✳',
        stage: 'Planned',
        description: 'Follow events. Keep the context.',
        detail:
          'A vision for monitors, source-linked summaries and alerts. It depends on official ingestion, permissions and execution services.',
      },
      {
        id: 'api',
        name: 'Lasso RI API',
        symbol: '{ }',
        stage: 'Planned',
        description: 'A common foundation for new experiences.',
        detail:
          'Planned REST and OpenAPI contracts for data, authentication, permissions, watchlists and shared services. No public endpoint or API key issuance.',
      },
      {
        id: 'web',
        name: 'Lasso RI Web',
        symbol: '⊞',
        stage: 'Website available / portal planned',
        description: 'The platform starts on the web, too.',
        detail:
          'This website introduces the ecosystem. The future company-following portal will depend on the API and an account and permissions implementation.',
      },
      {
        id: 'webhooks',
        name: 'Webhooks',
        symbol: '↗',
        stage: 'Planned',
        description: 'Information that could reach your other workflows.',
        detail:
          'Deliveries to external integrations and automations are part of the backend vision. Signing, retries and access controls still need implementation.',
      },
    ],
    intelligenceTitle: 'From what you follow to what needs your attention.',
    intelligenceIntro:
      'The vision for Lasso RI Intelligence: turn an intention into ongoing awareness, with sources always in view.',
    demoLabel: 'Concept demonstration',
    request:
      'Monitor TAEE11 and BBAS3. I want to follow new material facts and dividend announcements.',
    flow: [
      ['Request', 'Companies and topics of interest'],
      ['Monitoring', 'Check for and identify updates'],
      ['Events', 'Publications with sources and history'],
      ['Summary', 'Context and links to sources'],
    ],
    responseTitle: 'How a summary could be organized',
    response:
      'New events would be grouped by company and type, with publication dates, sources and links for further reading. Facts and interpretation would be presented separately.',
    demoNote:
      'Illustration of a planned integration. No monitor has been configured. This demonstration does not query real data.',
    signatureTitle: 'Clarity in every detail.',
    signatureIntro:
      'Lasso Signature is the direction for the Apple experience: reading organized around company events, with room to explore further.',
    signatureFeatures: [
      [
        'A focused radar',
        'Upcoming events, updates and followed companies in a clear hierarchy.',
      ],
      [
        'Distributions, clearly defined',
        'Dividends and interest on equity (JCP) identified. Announcement, entitlement and payment dates kept distinct.',
      ],
      [
        'From overview to document',
        'Context first. Documents, sources and history to keep reading.',
      ],
    ],
    architectureTitle: 'One platform behind every experience.',
    architectureIntro:
      'Information travels through a common foundation before reaching each channel. Its source stays part of the story.',
    architectureNote:
      'Planned architecture. Connections illustrate the platform design, not running services.',
    sourceTitle: 'Official and authorized sources',
    sources: [
      'CVM',
      'B3',
      'Investor Relations',
      'Authorized documents and news',
    ],
    coreText: 'Organize information. Preserve its source.',
    coreDetail:
      'Ingestion, normalization, deduplication, provenance, storage and processing. The approved direction includes Postgres and backend services; ingestion and usage rights require validation.',
    apiText: 'A shared language across channels.',
    apiDetail:
      'REST/OpenAPI, authentication, permissions, watchlists and shared services. Clients use the same contract; MCP will be an adapter without duplicating business rules.',
    inspect: 'Explore this layer',
    evolutionTitle: 'An ambitious vision. Transparent progress.',
    evolutionIntro:
      'The ecosystem is in development. Every new experience depends on verified sources, clear contracts and validation before it becomes available.',
    evolution: [
      [
        'Today',
        'The foundation',
        'The institutional website and an Apple app foundation with sample data.',
      ],
      [
        'Next foundations',
        'Core and API',
        'Official ingestion, provenance and shared services before integrations.',
      ],
      [
        'The vision',
        'New experiences',
        'MCP, Intelligence, portal and webhooks, with no promised dates or launch.',
      ],
    ],
    roadmap: 'Follow our progress',
    engineering: 'How we build',
  },
};
