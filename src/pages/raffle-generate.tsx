import { useState } from "react";
import { Button } from "../components/button.tsx";
import Card from "../components/card.tsx";
import FormInput from "../components/input.tsx";
import MoneyInput from "../components/money-input.tsx";
import RaffleTicketPreview from "../components/raffle-ticket-preview.tsx";
import { formatDate } from "../helpers/date.ts";

export default function RafflePrintPage() {
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");
  const [prize, setPrize] = useState("");
  const [ticketValue, setTicketValue] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  /* Event Handlers */
  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTitle = e.target.value;
    setTitle(newTitle);
  }
  function handleTargetChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTarget = e.target.value;
    setTarget(newTarget);
  }
  function handlePrizeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newPrize = e.target.value;
    setPrize(newPrize);
  }
  function handleTicketValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setTicketValue(newValue);
  }
  function handleLocationChange(e: React.ChangeEvent<HTMLInputElement>) {
    const location = e.target.value;
    setLocation(location);
  }
  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newDate = formatDate(e.target.value);
    setDate(newDate);
  }
  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTime = e.target.value;
    setTime(newTime);
  }

  return (
    <div className="min-h-screen bg-gray-100 text-(--color-gray-900) flex items-center justify-center px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-5">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-3">Impressão de Rifas</h1>

          <p className="text-lg text-(--color-primary-base) max-w-2xl mx-auto">
            Crie bilhetes personalizados e gere um PDF
            <br />
            pronto para impressão de forma rápida e prática.
          </p>
        </header>

        {/* Formulário */}
        <Card as="section">
          <FormInput
            label="Título"
            placeholder="Ex: Ação entre amigos"
            onChange={handleTitleChange}
          />

          <FormInput
            label="Objetivo"
            placeholder="Em prol de ajudar..."
            onChange={handleTargetChange}
          />

          <FormInput
            label="Prêmio"
            placeholder="Ex: Cesta de chocolates"
            onChange={handlePrizeChange}
          />

          <MoneyInput
            label="Valor do bilhete"
            onChange={handleTicketValueChange}
          />

          <FormInput
            label="Local do sorteio"
            placeholder="Ex: Salão comunitário"
            onChange={handleLocationChange}
          />

          {/* Data e Horário*/}
          <div className="space-y-2">
            <label className="font-semibold">Data e horário do sorteio</label>
            <div className="flex gap-4">
              <FormInput type="date" hideLabel onChange={handleDateChange} />
              <FormInput type="time" hideLabel onChange={handleTimeChange} />
            </div>
          </div>

          {/* Números */}
          <div className="space-y-2">
            <label className="font-semibold">Números</label>
            <div className="flex gap-4">
              <FormInput type="number" placeholder="De" hideLabel />
              <FormInput type="number" placeholder="Até" hideLabel />
            </div>
          </div>
        </Card>

        {/* Preview */}
        <RaffleTicketPreview
          title={title}
          target={target}
          prize={prize}
          ticketValue={ticketValue}
          location={location}
          date={date}
          time={time}
        />

        {/* Actions */}
        <section className="flex justify-end gap-4">
          <Button>Imprimir</Button>

          <Button variant="secondary">Baixar PDF</Button>
        </section>
      </div>
    </div>
  );
}
