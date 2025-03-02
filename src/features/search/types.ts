// Autor da resposta
export interface Author {
    name: string;
    lastname: string;
  }
  
  // Estrutura de preço
  export interface Price {
    currency: string;
    amount: number;
    decimals: number;
  }
  
  // Estrutura de um item (produto)
  export interface Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
  }
  
  // Estrutura da resposta da busca
  export interface SearchResponse {
    author: Author;
    categories: string[];
    items: Item[];
  }
  
  // Estrutura da resposta do detalhe do produto
  export interface ProductDetailResponse {
    author: Author;
    item: Item & {
      sold_quantity: number;
      description: string;
    };
  }
  