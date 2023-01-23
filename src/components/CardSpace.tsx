import { Card } from './Card'
let data = [
    {
      id: 1,
      name: 'Geladeira',
      category: 'Cozinha',
      description: 'Geladeira Brastemp Frost Free Duplex 375 litros cor Inox com Espaço Adapt - BRM45JK',
      image:
        'https://a-static.mlcdn.com.br/450x450/geladeira-brastemp-frost-free-duplex-375-litros-cor-inox-com-espaco-adapt-brm45jk/whirlpool/326031049/9dc48a59d7cf59cb3d9e2a07321b9362.jpeg',
      price: '4189,00',
    },
    {
      id: 2,
      name: 'Fogão',
      category: 'Cozinha',
      description: 'Fogão 4 Bocas Cooktop a Gás Moob Ultra Chama Com Acendimento Automatico - Bivolt',
      image:
        'https://a-static.mlcdn.com.br/450x450/fogao-4-bocas-cooktop-a-gas-moob-ultra-chama-com-acendimento-automatico-bivolt/belamagazine/14664/3cbea10d73c867b0d7e78fe4fa85c11b.jpeg',
      price: '499,90',
    },
    {
      id: 3,
      name: 'Microondas',
      category: 'Cozinha',
      description: 'Microondas LG 30 Litros Grill Prata MH7093 110V',
      image:
        'https://a-static.mlcdn.com.br/450x450/microondas-lg-30-litros-grill-prata-mh7093-110v/dufrio/100249626/8305d4d201f9f2e973d24929e469d713.jpeg',
      price: '1120,24',
    },
    {
      id: 4,
      name: 'AirFryer',
      category: 'Cozinha',
      description: 'Fritadeira Elétrica sem Óleo/Air Fryer Mondial',
      image:
        'https://a-static.mlcdn.com.br/450x450/fritadeira-eletrica-sem-oleo-air-fryer-mondial-new-pratic-af-31-preta-35l-com-timer/magazineluiza/236479400/41085c41ff7bedbdd5b1a8ce572b4cbc.jpg',
      price: '429,99',
    },
    {
      id: 5,
      name: 'Liquidificador',
      category: 'Cozinha',
      description: 'Liquidificador Mondial Turbo L-900 FB Copo',
      image:
        'https://a-static.mlcdn.com.br/450x450/liquidificador-mondial-turbo-l-900-fb-copo-preto-com-filtro-05-velocidades-900w/magazineluiza/021726000/334670bd3e78374f5b5429a0109cc091.jpg',
      price: '149,90',
    },
    {
      id: 6,
      name: 'Cafeteira',
      category: 'Cozinha',
      description: 'Cafeteira Elétrica Mondial Pratic 20 CN-01-20X',
      image:
        'https://a-static.mlcdn.com.br/450x450/cafeteira-eletrica-mondial-pratic-20-cn-01-20x-20-cafes-preto/magazineluiza/228892200/011e38739eaef230b08abf07d79f9709.jpg',
      price: '240,00',
    },
    {
      id: 7,
      name: 'Purificador de Água',
      category: 'Cozinha',
      description: 'Purificador de Água IBBL E-Due Placa Prata 127v a 220v',
      image:
        'https://a-static.mlcdn.com.br/450x450/purificador-de-agua-ibbl-e-due-placa-prata-127v-a-220v/techshop/bebibb00024/6b68abfefc7f5765ea596e472fe48bbb.jpeg',
      price: '682,24',
    },
    {
      id: 8,
      name: 'Mixer',
      category: 'Cozinha',
      description: 'Mixer Electrolux 3 Em 1 (EIB10)',
      image:
        'https://a-static.mlcdn.com.br/450x450/mixer-electrolux-3-em-1-eib10/electrolux/310118728/d35d531009f7bcfd7c835edc37dd0b04.jpeg',
      price: '299,00',
    },
    {
      id: 9,
      name: 'Mesa',
      category: 'Cozinha',
      description: 'Mesa De Jantar Estilo Industrial 4 Lugares Moderna Tolix Madeira Com Ferro 120x90cm',
      image:
        'https://imgs.casasbahia.com.br/1528416834/1xg.jpg?imwidth=350',
      price: '329,99',
    },
    {
      id: 10,
      name: 'Aparelho de jantar',
      category: 'Cozinha',
      description: 'Aparelho de Jantar 20 Peças em Cerâmica com Estampa Unni Lilac Oxford',
      image:
        'https://a-static.mlcdn.com.br/450x450/aparelho-de-jantar-20-pecas-em-ceramica-com-estampa-unni-lilac-oxford/gazinshop/12277/d19be0b33bcd7d321b1d0899ce209cda.jpeg',
      price: '273,90',
    },
    {
      id: 11,
      name: 'Conjunto de formas',
      category: 'Cozinha',
      description: 'Conjunto de Assadeiras de Vidro Marinex - Opaline 3 Peças',
      image:
        'https://a-static.mlcdn.com.br/450x450/conjunto-de-assadeiras-de-vidro-marinex-opaline-3-pecas/jwshop/a96b10381e7811ec879b4201ac185013/c78add13b72007fd31e9591ee1831a26.jpeg',
      price: '114,90',
    },
    {
      id: 12,
      name: 'Jogo de panelas',
      category: 'Cozinha',
      description: 'Jogo de Panelas Tramontina 5 peças Caribe Revestimento Antiaderente Starflon Max',
      image:
        'https://a-static.mlcdn.com.br/450x450/jogo-de-panelas-tramontina-5-pecas-caribe-revestimento-antiaderente-starflon-max/alfixshop/11498/0e436728de0231867c1f478408f33d5b.jpeg',
      price: '249,90',
    },
    {
      id: 13,
      name: 'Potes de Condimentos',
      category: 'Cozinha',
      description: 'Kit 6 Potes Vidro Porta Condimento Hermético Casa Cozinha Tampa Bambu 110ML',
      image:
        'https://a-static.mlcdn.com.br/450x450/kit-6-potes-vidro-porta-condimento-hermetico-casa-cozinha-tampa-bambu-110ml-oikos/baitashopcombr/5375688/9a519a2aee8426ae28aa050f29c876ab.jpeg',
      price: '124,79',
    },
    {
      id: 14,
      name: 'Conjunto de Cozinha',
      category: 'Cozinha',
      description: 'Cozinha Compacta 2 pç c/ Armário e Balcão MP3687 Veneza GB Preta',
      image:
        'https://a-static.mlcdn.com.br/450x450/cozinha-compacta-2-pc-c-armario-e-balcao-mp3687-veneza-gb-preta-multimoveis/multimoveis2/mp3687130/52d5c2019bdb3c02d7abad47eb9f82ac.jpeg',
      price: '669,90',
    },
    {
      id: 15,
      name: 'Sofá',
      category: 'Sala',
      description: 'Sofá Retrátil e Reclinável 3 lugares com Molas 1,80m Livia Suede Marrom Adonai Estofados',
      image:
        'https://a-static.mlcdn.com.br/450x450/sofa-retratil-e-reclinavel-3-lugares-com-molas-180m-livia-suede-marrom-adonai-estofados/adonaiestofados/1784/639a35bfe1cab1798437e05b7f4acd9e.jpeg',
      price: '1299,90',
    },
    {
      id: 16,
      name: 'Televisão',
      category: 'Sala',
      description: 'Smart TV 43” 4K LED TCL 43P635 VA Wi-Fi',
      image:
        'https://a-static.mlcdn.com.br/450x450/smart-tv-43-4k-led-tcl-43p635-va-wi-fi-bluetooth-hdr-google-assistente-3-hdmi-1-usb/magazineluiza/235509200/d65ebce73846942ca297832f891de130.jpg',
      price: '2799,00',
    },
    {
        id: 17,
        name: 'Estante/Rack',
        category: 'Sala',
        description: 'Rack Bancada Paladio TV 55 Pol. Sala Com Pes de Madeira',
        image:
          'https://a-static.mlcdn.com.br/450x450/rack-bancada-paladio-tv-55-pol-sala-com-pes-de-madeira-moveis-bechara/lojadocelar/13096/f3057e50847192042d975189084c398f.jpeg',
        price: '307,99',
      },
      {
        id: 18,
        name: 'Tapete',
        category: 'Sala',
        description: 'Tapete Peludo Felpudo 2,00 x 1,50 Shaggy Luxo Sala',
        image:
          'https://a-static.mlcdn.com.br/450x450/tapete-peludo-felpudo-200-x-150-shaggy-luxo-sala-essencia-confeccoes/evaenxovais/000080010080010080010080010/8449ecf715818dd65a56b5b741dcc97a.jpeg',
        price: '117,00',
      },
      {
        id: 19,
        name: 'Poltronas',
        category: 'Sala',
        description: 'Kit 02 Poltronas Decorativa Sala Oferta Preta',
        image:
          'https://a-static.mlcdn.com.br/450x450/kit-02-poltronas-decorativa-sala-oferta-preta-balqui-decor/balaquidecor/15814726023/402ec1d690279eb98f53bbc291ad2f16.jpeg',
        price: '315,80',
      },
      {
        id: 20,
        name: 'Ventilador',
        category: 'Sala',
        description: 'Ventilador de Mesa Mondial Super Power VSP-40-B',
        image:
          'https://a-static.mlcdn.com.br/450x450/ventilador-de-mesa-mondial-super-power-vsp-40-b-40cm-3-velocidades/magazineluiza/231203900/2a3dbec9933ac4545ac5e5e179e1c9e0.jpg',
        price: '169,99',
      },
      {
        id: 21,
        name: 'Cama',
        category: 'Quarto',
        description: '',
        image:
          'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: '$$$',
      },
      {
        id: 21,
        name: 'Guarda-Roupas',
        category: 'Quarto',
        description: '',
        image:
          'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: '$$$',
      },
      {
        id: 22,
        name: 'Ventilador',
        category: 'Quarto',
        description: 'Ventilador de Mesa Mondial Super Power VSP-40-B',
        image:
          'https://a-static.mlcdn.com.br/450x450/ventilador-de-mesa-mondial-super-power-vsp-40-b-40cm-3-velocidades/magazineluiza/231203900/2a3dbec9933ac4545ac5e5e179e1c9e0.jpg',
        price: '169,99',
      },
      {
        id: 23,
        name: 'Abajur',
        category: 'Quarto',
        description: 'Abajur Luminaria De Mesa Cabeceira Cama Para Quarto 2 Uni',
        image:
          'https://a-static.mlcdn.com.br/450x450/abajur-luminaria-de-mesa-cabeceira-cama-para-quarto-2-uni-temshop/temshopweb/2297cdfa6a4311eca6c84201ac18503a/183df741ecaf546c48982f1d129a1b26.jpeg',
        price: '199,99',
      },
      {
        id: 24,
        name: 'Jogo de lençol',
        category: 'Quarto',
        description: 'Kit 2 jogos de lençois casal queen 3 pçs microfibra estampas sortidas',
        image:
          'https://a-static.mlcdn.com.br/450x450/kit-2-jogos-de-lencois-casal-queen-3-pcs-microfibra-estampas-sortidas-reliquias-do-interior/reliquiasdointerior/9567089708/f62492212cc96689974cf6a41ff43de9.jpg',
        price: '75,00',
      },
      {
        id: 25,
        name: 'Jogo de lençol',
        category: 'Quarto',
        description: 'Colcha Casal Cama Box Matelado Cobre Leito Padrão com Viés 3 Peças Premium',
        image:
          'https://a-static.mlcdn.com.br/450x450/colcha-casal-cama-box-matelado-cobre-leito-padrao-com-vies-3-pecas-premium-enzo-enxovais/enzoenxovais/and-pratic-c-branco/ffb6f67ad6ca1bffd2218d476bd80d5d.jpeg',
        price: '119,90',
      },
      {
        id: 26,
        name: 'Travesseiros',
        category: 'Quarto',
        description: 'Kit 2 Travesseiro Nasa Antialérgico Super Macio Admirare',
        image:
          'https://a-static.mlcdn.com.br/450x450/kit-2-travesseiro-nasa-antialergico-super-macio-admirare/cortinaweb/10586725916/5c9aed1ab4ab5b4a294433e1f3706336.jpeg',
        price: '119,90',
      },
  ];

export function CardSpace() {
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 items-start mx-auto'>
        {data.map((item, index) => {
            return(
                <Card 
                    key={index}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                  />
                )
            })}
        </div>
    )
}