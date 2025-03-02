export default function ProductDetailScreen({ params }: { params: { id: string } }) {
    return (
      <div>
        <h2>Detalhes do Produto</h2>
        <p>Exibindo informações do produto ID: {params.id}</p>
      </div>
    );
  }
  