import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const TopicCard = ({ topic }) => {
  return (
    <Card className={"border border-neutral-200 px-3 pb-5 pt-3"}>
      <CardHeader
        className={"border-none flex items-center gap-6 p-0 rounded-none"}
      >
        <div className="flex gap-3 items-center flex-1">
          <div className="w-8 h-8 bg-neutral-200 rounded-full">
            {topic.autorFotoUrl && (
              <img
                // url ou base64
                src={topic.autorFotoUrl}
                alt={`${topic.autor}'s profile`}
                className="w-full h-full rounded-full object-cover"
              />
            )}
          </div>
          <span className="text-xs">{topic.autor}</span>
        </div>

        <span className="text-xs">{topic.dataCriacao}</span>
        <span className="text-xs">{topic.tema}</span>
      </CardHeader>
      <CardContent className={"text-start  p-0"}>
        <span className="text-base">{topic.titulo}</span>
      </CardContent>
    </Card>
  );
};
