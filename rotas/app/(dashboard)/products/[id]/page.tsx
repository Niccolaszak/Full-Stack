import { products } from "../data";

    interface ProductDetailsProps{
        params: Promise<{id: string}>;
    }

    export default async function ProductDetailsProps({params} : ProductDetailsProps){
        const resolvedParams = await params;
        const id  =  resolvedParams.id;
        const product = products.find((p) => String(p.id).trim() === String(id).trim());

        if (!product){
            return(
                <div style={{padding:'2rem'}}>
                    <h2 style={{fontSize:'1.5rem', fontWeight:'bold', marginBottom:'1rem'}}>
                        Produto Não Encontrado
                    </h2>
                    <p style={{fontSize:'1.25rem'}}>
                        O produto com ID {id} não foi encontrado.
                    </p>
                </div>
            )
        }
        return(
                    
            <div style={{padding:'2rem'}} >
                <h2 style={{fontSize:'1.5rem', fontWeight:'bold', marginBottom:'1rem'}}>
                    Detalhes do Produto
                </h2>
                <div style={{backgroundColor:'#f0f0f0', padding:'1rem', borderRadius:'8px'}}>
                    <h1 style={{fontSize:'1.25rem', marginBottom:'0.5rem'}}>Nome: {product.name}</h1>
                    <p style={{fontSize:'1.25rem', marginBottom:'0.5rem'}}>
                        <p>Descrição: {product.description}</p>
                    </p>
                </div>
            </div>

        )
    }