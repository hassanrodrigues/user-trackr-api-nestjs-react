export const APP_SETTINGS = {
  project_version: '0.0.0',

  TOAST: {
    timeout: 5000
  },

  STORAGE_KEYS: {
    token: 'access_token',
    refresh_token: '_REFRESH_TOKEN',
    profile: '_PROFILE'
  },

  COMPONENTS: {
    inputs_tooltip_key: 'USER-MANAGEMENT',
    filter_paper_width: '500px',
    input_multiline_max_length: 181
  }
};

export const GLOBAL_TEXTS = {
  project_name: 'USER-MANAGEMENT',
  not_applicable: '-',

  FORM: {
    required_field_symbol: 'ㅤ*',
    required_field: 'Campo Obrigatório',
    invalid_email: 'Email inválido!'
  },

  LIST: {
    able_item: 'Habilitar item',
    disable_item: 'Desabilitar item',

    search_not_found: {
      title: 'Nenhum resultado encontrado',

      description:
        'O que você pesquisou infelizmente não foi encontrado ou não existe.'
    },

    empty_list: {
      title: 'Não há Itens Registrados',

      description: (
        <p style={{ textAlign: 'center' }}>
          Registre um item para exibir suas <br /> informações aqui.
        </p>
      )
    }
  },

  FILTER: {
    search_order_title: 'Ordem:',
    search_filter_title: 'Filtros:',
    get_options_filter_error: 'Falha ao buscar opções do filtro',
    select_default_option: 'Selecione'
  }
};
