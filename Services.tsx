import React from 'react';
import {
  Page,
  ScrollView,
  StackLayout,
  Label,
  Button,
} from '@nativescript/core';

export default function Services() {
  return (
    <Page>
      <ScrollView>
        <StackLayout class="p-4">
          <Label
            text="Nossos Serviços"
            class="text-2xl font-bold text-center mb-4"
          />

          <StackLayout class="service-item p-4 mb-4 bg-white rounded">
            <Label
              text="Consulta Nutricional"
              class="text-xl font-semibold mb-2"
            />
            <Label
              text="Avaliação completa do seu perfil nutricional e elaboração de plano alimentar personalizado."
              textWrap={true}
              class="mb-2"
            />
            <Button
              text="Agendar"
              class="btn btn-primary"
            />
          </StackLayout>

          <StackLayout class="service-item p-4 mb-4 bg-white rounded">
            <Label
              text="Acompanhamento Mensal"
              class="text-xl font-semibold mb-2"
            />
            <Label
              text="Monitoramento contínuo do seu progresso com ajustes no plano alimentar."
              textWrap={true}
              class="mb-2"
            />
            <Button
              text="Agendar"
              class="btn btn-primary"
            />
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </Page>
  );
}