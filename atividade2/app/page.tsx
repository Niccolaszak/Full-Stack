'use client';

import { useState, useEffect } from 'react';
import { Search, Loader2, AlertCircle } from 'lucide-react';

// Contrato da API do Rick & Morty
interface Character {
  id: number;
  name: string;
  image: string;
}

export default function RickAndMortySearch() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${searchTerm}`, 
          { signal }
        );

        
        if (response.status === 404) {
          setCharacters([]);
          setLoading(false);
          return;
        }

        if (!response.ok) throw new Error('Falha ao buscar personagens');

        const data = await response.json();
        setCharacters(data.results || []);
      } catch (err: any) {
        
        if (err.name === 'AbortError') {
          console.log('Requisição cancelada para:', searchTerm);
        } else {
          setError('Ocorreu um erro ao carregar os dados.');
        }
      } finally {
        
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    
    const timer = setTimeout(() => {
      fetchCharacters();
    }, 500);

    
    return () => {
      clearTimeout(timer);
      controller.abort(); 
    };
  }, [searchTerm]);

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Rick & Morty Finder</h1>
        <div className="relative flex items-center">
          <Search className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar personagem..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </header>

    
      {loading && <div className="flex items-center gap-2 text-blue-500"><Loader2 className="animate-spin"/> Buscando no multiverso...</div>}
      {error && <div className="flex items-center gap-2 text-red-500"><AlertCircle/> {error}</div>}
      {!loading && !error && characters.length === 0 && <p className="text-gray-500">Nenhum personagem encontrado.</p>}

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {characters.map((char) => (
          <div key={char.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-black">
            <img src={char.image} alt={char.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold truncate">{char.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}