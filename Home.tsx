import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Page,
  ScrollView,
  StackLayout,
  Label,
  Button,
  Image,
} from 'react-nativescript';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

export default function Home({ navigation }: HomeScreenProps) {
  return (
    <Page>
      <ScrollView>
        <StackLayout class="p-4">
          {/* Hero Section */}
          <StackLayout class="hero p-4 bg-emerald-600">
            <Label
              text="Transforme sua saúde com nutrição personalizada"
              class="text-3xl font-bold text-white text-center mb-2"
              textWrap={true}
            />
            <Label
              text="Descubra um novo estilo de vida saudável com acompanhamento nutricional especializado."
              class="text-white text-center mb-4"
              textWrap={true}
            />
            <Button
              text="Agende sua consulta"
              class="btn btn-primary-outline"
              onTap={() => navigation.navigate('Appointments')}
            />
          </StackLayout>

          {/* Features */}
          <StackLayout class="features p-4">
            <Label
              text="Por que escolher a NutriLife?"
              class="text-2xl font-bold text-center mb-4"
            />
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </Page>
  );
}