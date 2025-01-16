import React, { useState } from 'react';
import {
  Page,
  ScrollView,
  StackLayout,
  Label,
  TextField,
  Button,
  DatePicker,
} from '@nativescript/core';

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const availableTimes = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  return (
    <Page>
      <ScrollView>
        <StackLayout className="p-4">
          <Label
            text="Agende sua Consulta"
            className="text-2xl font-bold text-center mb-4"
          />

          {/* Personal Information */}
          <StackLayout className="form-group mb-4">
            <Label
              text="Informações Pessoais"
              className="text-xl font-semibold mb-2"
            />
            
            <Label text="Nome Completo" className="mb-1" />
            <TextField
              className="input mb-2"
              placeholder="Digite seu nome completo"
            />

            <Label text="Email" className="mb-1" />
            <TextField
              className="input mb-2"
              placeholder="Digite seu email"
              keyboardType="email"
            />

            <Label text="Telefone" className="mb-1" />
            <TextField
              className="input mb-4"
              placeholder="Digite seu telefone"
              keyboardType="phone"
            />
          </StackLayout>

          {/* Appointment Selection */}
          <StackLayout className="form-group mb-4">
            <Label
              text="Selecione a Data e Horário"
              className="text-xl font-semibold mb-2"
            />

            <Label text="Data da Consulta" className="mb-1" />
            <DatePicker
              date={selectedDate}
              className="mb-4"
            />

            <Label text="Horário Disponível" className="mb-1" />
            <StackLayout className="time-slots">
              {availableTimes.map((time) => (
                <Button
                  key={time}
                  text={time}
                  className="btn btn-outline mb-2"
                />
              ))}
            </StackLayout>
          </StackLayout>

          <Button
            text="Confirmar Agendamento"
            className="btn btn-primary"
          />
        </StackLayout>
      </ScrollView>
    </Page>
  );
}