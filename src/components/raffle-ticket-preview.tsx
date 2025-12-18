import Card from "./card.tsx";
import RaffleTicket from "./raffle-ticket.tsx";

interface RaffleTicketPreviewProps {
  title?: string;
  ticketNumber?: string;
  target?: string;
  prize?: string;
  ticketValue?: string;
  date?: string;
  time?: string;
  location?: string;
}

export default function RaffleTicketPreview(props: RaffleTicketPreviewProps) {
  const defaultValues: Record<keyof RaffleTicketPreviewProps, string> = {
    title: "Prévia",
    ticketNumber: "001",
    target: "Objetivo da rifa",
    prize: "Premiação",
    ticketValue: "R$ 0,00",
    date: "01/01/2025",
    time: "00:00",
    location: "Local do sorteio",
  };

  const shouldRenderPreview: boolean = !Object.values(props).every(
    (p: string) => p === undefined || p.length === 0
  );

  return (
    <>
      {shouldRenderPreview ? (
        <Card as="section" variant="white">
          <h2 className="w-170 font-semibold mb-4 text-(--color-primary-base)">
            Pré-visualização do bilhete
          </h2>
          <RaffleTicket
            title={props.title || defaultValues.title}
            ticketNumber={props.ticketNumber || defaultValues.ticketNumber}
            target={props.target || defaultValues.target}
            prize={props.prize || defaultValues.prize}
            ticketValue={props.ticketValue || defaultValues.ticketValue}
            date={props.date || defaultValues.date}
            time={props.time || defaultValues.time}
            location={props.location || defaultValues.location}
          />
        </Card>
      ) : (
        <Card as="section" variant="white">
          <h2 className="w-170 font-semibold mb-4 text-(--color-primary-base)">
            Pré-visualização do bilhete
          </h2>

          <div className="h-40 rounded-md border-2 border-dashed border-(--color-gray-300) flex items-center justify-center text-(--color-gray-300)">
            Preview do bilhete (em branco)
          </div>
        </Card>
      )}
    </>
  );
}
