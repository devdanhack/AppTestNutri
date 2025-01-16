import React from 'react';
import {
  Page,
  ScrollView,
  StackLayout,
  Label,
  Button,
} from '@nativescript/core';

export default function Profile() {
  return (
    <Page>
      <ScrollView>
        <StackLayout class="p-4">
          <Label
            text="Meu Perfil"
            class="text-2xl font-bold text-center mb-4"
          />

          <StackLayout class="profile-info p-4 mb-4 bg-white rounded">
            <Label
              text="Informações Pessoais"
              class="text-xl font-semibold mb-2"
            />
            <Label text="Nome: João Silva" class="mb-1" />
            <Label text="Email: joao@email.com" class="mb-1" />
            <Label text="Telefone: (11) 99999-9999" class="mb-4" />
            <Button
              text="Editar Informações"
              class="btn btn-outline"
            />
          </StackLayout>

          <StackLayout class="appointments p-4 mb-4 bg-white rounded">
            <Label
              text="Próximas Consultas"
              class="text-xl font-semibold mb-2"
            />
            <Label text="Nenhuma consulta agendada" class="text-gray-500" />
          </StackLayout>

          <Button
            text="Sair"
            class="btn btn-secondary"
          />
        </StackLayout>
      </ScrollView>
    </Page>
  );
}