'use client';

import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import { User, Image as ImageIcon, Save } from "lucide-react";

interface UserProfile {
  name: string;
  role: string;
  avatarUrl: string;
}

export default function PerfilPage() {
  const [profile, setProfile] = useState<UserProfile>({
    name: "João Silva",
    role: "Desenvolvedor Frontend",
    avatarUrl: "https://i.pravatar.cc/150?img=22",
  });

  //Handler Generico
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({ ...prevState,// copia o estado anterior
       [name]: value })); // atualiza a propriedade específica

  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Perfil atualizado: ${profile.name} - ${profile.role}`);
  };

  return (
    <div>
      <Card>
          <CardHeader title="Editor de Perfil" description="Altere as informações abaixo."/>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <label>Nome Completo</label>
                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}/>
                <label>Cargo/Função</label>
                <input
                  name="role"
                  value={profile.role}
                  onChange={handleChange}/>
                <label>URL da foto</label>
                <input
                  name="avatarUrl"
                  value={profile.avatarUrl}
                  onChange={handleChange}/>

                <Button type="submit">
                  Salvar Perfil
                </Button>
              </form>
            </CardContent>
          </Card>
    </div>
  );
}