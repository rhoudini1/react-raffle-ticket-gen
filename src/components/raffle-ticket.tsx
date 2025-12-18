interface RaffleTicketProps {
  title: string;
  ticketNumber: string;
  target?: string;
  prize?: string;
  ticketValue?: string;
  date?: string;
  time?: string;
  location?: string;
}

export default function RaffleTicket({
  title,
  ticketNumber,
  target = "Objetivo da rifa",
  prize = "Premiação",
  ticketValue = "R$ 0,00",
  date = "01/01/2025",
  time = "00:00",
  location = "Local do sorteio",
}: RaffleTicketProps) {
  return (
    <div
      className="
        w-170 border border-(--color-gray-300)
        rounded-md flex overflow-hidden bg-white
        text-(--color-gray-900) font-arial
      "
    >
      {/* Canhoto */}
      <div className="w-1/3 border-r border-(--color-gray-300) p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-base font-bold">{title}</span>
          <div className="border border-black text-xl font-bold flex items-center justify-center px-0.5">
            {ticketNumber}
          </div>
        </div>

        <div className="space-y-1 mt-2">
          <div>
            <span className="text-xs">Nome:</span>
            <div className="border-b border-(--color-gray-300) w-full mt-1 h-5"></div>
          </div>
          <div>
            <span className="text-xs">Telefone:</span>
            <div className="border-b border-(--color-gray-300) w-full mt-1 h-5"></div>
          </div>
          <div>
            <span className="text-xs">Endereço:</span>
            <div className="border-b border-(--color-gray-300) w-full mt-1 h-5"></div>
          </div>
        </div>
      </div>

      {/* Parte direita maior */}
      <div className="w-2/3 py-4 px-5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{title}</h2>
            <div>
              <span className="text-sm">Bilhete </span>
              <span className="font-semibold text-lg">{ticketNumber}</span>
            </div>
          </div>

          <div className="mt-2">
            <span className="font-semibold text-sm">Objetivo: </span>
            <span className="text-sm">{target}</span>
          </div>

          <div className="mt-2">
            <span className="font-semibold text-sm">Premiação: </span>
            <span className="text-sm">{prize}</span>
          </div>
        </div>

        <div className="mt-1">
          <div className="flex justify-between space-x-6">
            <div>
              <span>Valor: </span>
              <span className="text-lg font-bold">{ticketValue}</span>
            </div>
            <div>
              <span>Data: </span>
              <span className="text-lg font-bold">
                {date} {time}
              </span>
            </div>
          </div>
          <div className="mt-1 text-center">
            <span className="font-semibold text-sm">Local: </span>
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
